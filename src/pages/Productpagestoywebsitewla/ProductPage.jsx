import React, {useState, useEffect } from "react";
import Heroallpages from "../../Components/Heroallpages/Heroallpages";
import { useProductContext } from "../../context/Products/Product";
import { useParams } from "react-router-dom";
import axios from "axios"


const Product = () => {

  const [storedProduct, setStoredProduct] = useState([])
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await axios.get("/")
        console.log('pdata', data)
        if(data.data.success) {
          setStoredProduct(data.data.data);
        }
      } catch(error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchProducts();
  }, []);

  const { getCategoryProduct, isSingleLoading, categoryProduct } =
    useProductContext();

  const { getTargetProduct, isTargetLoading, targetProduct } =
    useProductContext();

  const { category, target } = useParams();

  const normalizedCategory = category ? category.toLowerCase() : "";
  const normalizedTarget = target ? target.toLowerCase() : "";

  useEffect(() => {
    if (category && storedProduct) {
      getCategoryProduct(storedProduct, category.toLowerCase());
    }
  }, [storedProduct, category]);

  useEffect(() => {
    if (category && target && storedProduct) {
      getTargetProduct(storedProduct, target, category);
    }
  }, [storedProduct, category, target]);


  console.log("CATEGORY", categoryProduct);
  console.log("TARGET", targetProduct);

  let categoryProductz = getCategoryProduct(storedProduct, category);

  let targetProductz = getTargetProduct(storedProduct, target, category);


  const heroData = {
    menstopwear: { hero_nav: "Mens Topwear" },
     fusionwearwomen: { hero_nav: "Fusion Wear For Women" },
     kidswear:{hero_nav:"Kids Wear Online Store"},
     bed: { hero_nav: "Bedding" }
  };

  const key = `${normalizedTarget + normalizedCategory}`;
  const { hero_nav } = heroData[key] || {
    hero_nav: category || "default",
  
  };
  console.log("hero_nav", hero_nav);
  console.log("Key", key);

  return (
    <>
      {" "}
      <div>
        <Heroallpages hero_nav={hero_nav} />
        <div className="section-padding">
          {categoryProductz?.length > 0 && target === undefined ? (
            <FilterPAGE data={categoryProductz} />
          ) : targetProductz?.length > 0 ? (
            <FilterPAGE data={targetProductz} />
          ) :(
            <h1>LOADING</h1>
          )}
        </div>
      </div>
      <div style={{position:"fixed", zIndex:"1" ,right:"40px", bottom:"100px"}}>
      </div>
    </>
  );
};

export default Product;
