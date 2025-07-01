import React, { useState, useEffect } from "react";
import PageLayout from "../../layouts/PageLayout";
import ProductHeroSection from "../../components/ProductComponents/ProductHerosection/ProductHeroSection";
import FilterProductSection from "../../components/ProductComponents/FilterProductsection/FilterProductSection";
import PriceRangeSection from "../../components/ProductComponents/PriceRangeSection/PriceRangeSection";
import Card from "../../components/ProductComponents/card/Card";
import "./ProductPage.css";
import axios from "axios";
import BASE_URL from "../../Config/config.js";
import { useParams } from "react-router-dom";
import { capitalize } from "@mui/material";

const ProductPage = () => {
  console.log("ProductPage mounted");
  const { category, gender, subcategory } = useParams();
  const [datalist, setDataList] = useState([]);
  console.log('category from productpage:', category);
  console.log('subcategory from productpage:', subcategory);
  console.log('gender from productpage:', gender);
  const [filters, setFilters] = useState({
  sortby: "",
  size: "",
  category:"",
  brand:[],
  color:[],
  discount:[]
});


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`${BASE_URL}/api/products`);
      console.log("fetchdata via product page fetched", response.data.data);
      if (response.data.success) {
        let filtered = response.data.data.filter((product) => {
          const isCategoryMatch = product.category?.toLowerCase() === category?.toLowerCase();
          const isSubCategoryMatch = product.subcategory?.toLowerCase() === subcategory?.toLowerCase();
          const isGenderMatch = gender ? product.gender?.toLowerCase() === gender?.toLowerCase() : true;
          const isSizeMatch = filters.size ? product.size?.toLowerCase() === filters.size : true;
          const isBrandMatch = filters.brand.length > 0  ? filters.brand.includes(product.brand?.toLowerCase()) : true;
          const isColorMatch = filters.color.length > 0 ? filters.color.includes(product.color?.toLowerCase()) : true;
          const isDiscountMatch = filters.discount.length > 0 ? filters.discount.includes(product.discount?.toString()) : true;
          return isCategoryMatch && isSubCategoryMatch && isGenderMatch && isSizeMatch && isBrandMatch && isColorMatch && isDiscountMatch;
        });
        // Apply sorting
  if(filters.sortby === "price-asc") {
    filtered.sort((a,b) => a.new_price - b.new_price);
  }else if(filters.sortby === "price-desc") {
    filtered.sort((a, b) => b.new_price - a.new_price)
  }
 else {
        //  Reverse only if no sorting is applied default: newest first
        filtered = filtered.reverse();
      }

        setDataList(filtered)
      }
    }
    fetchProducts();
  }, [category, subcategory, gender, filters]);

  const sizeOptions = [...new Set(datalist.map((item) => item.size?.toLowerCase()).filter(Boolean))]

  const sessions = [
    // not needed now
    // {
    //   name: "Categories",
    //   filter: [...new Set(datalist.map((product) => product.category))],
    // },
    {
      name: "Brands",
      filter: [...new Set(datalist.map((product) => product.brand))],
    },
    {
      name: "Price",
      filter: [], // or keep static if not dynamic
    },
    {
      name: "Colours",
      filter: [...new Set(datalist.map((product) => product.color))],
    },
    {
      name: "DiscountRange",
      filter: [...new Set(datalist.map((product) => product.discount))],
    },
  ];

  return (
    <div>
      <PageLayout>
        <ProductHeroSection category={capitalize(category)} subcategory={capitalize(subcategory)} productCount={datalist.length} filters={filters} setFilters={setFilters} sizeOptions={sizeOptions} />
        <div className="productfilpage">
          <div className="filterproductssession">
            {sessions.map(
              (filter, index) =>
                (filter.name !== "Price" && (
                  <FilterProductSection
                    title={filter.name}
                    filter={filter.filter}
                    filters={filters}
                    setFilters={setFilters}
                    key={index}
                  />
                )) ||
                (filter.name === "Price" && (
                  <div>
                    {/* <PriceRangeSection />   currently i commit it */}
                  </div>
                ))
            )}
          </div>
          <div className="mobile-view-prodctfilter d-none">
            {sessions.map((filter, index) => (
              <select key={index} name={filter.name.toLowerCase()} id={filter.name.toLowerCase()}>
                <option className="option" value="">
                  {filter.name}
                </option>
                {filter.filter.map((option, i) => (
                  <option className="option" value={option} key={i}>
                    {option}
                  </option>
                ))}
              </select>
            ))}

          </div>
          <div
            className="rightsideallcard"
            style={{ paddingBottom: "0px", marginBottom: "0px", }}
          >
            {datalist.map((item) => (
              <Card key={item._id} data={item} />
            ))}
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default ProductPage;

