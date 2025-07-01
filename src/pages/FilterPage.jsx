import React, { useEffect, useState, useMemo } from "react";
import PageLayout from "../layouts/PageLayout";
import ShopByCateg from "../components/HomeComponents/shopbycategoryheading/ShopByCateg";
import CardOffer from "../components/HomeComponents/cardoffer/cardoffer";
import { useParams } from "react-router";
import axios from "axios";
import BASE_URL from "../Config/config.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Testing from "../components/HomeComponents/TestCarousal/testing.jsx";
import CardData from "../JSONData/carddata.json";
import CarrousallBannerFilter from "../components/HomeComponents/carouselbannerfilter/CarouselBannerFilter.jsx";

const FilterPage = () => {
  const { category } = useParams();
  const [filteroffers, setFilterOffers] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchCategoryOffer = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/homecards`);
        if (res.data.success) {
          const data = res.data.data;
          console.log("datafil", data);
          const filtered = data.filter(
            (item) => item.category?.toLowerCase() === category?.toLowerCase()
          );
          console.log("category from URL:", category);
          console.log("filtered offer", filtered);
          setFilterOffers(filtered);
        }
      } catch (error) {
        toast.error("Failed to fetch offer", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    };
    fetchCategoryOffer();
  }, [category]);

  useEffect(() => {
    const fetchCategoryOffer = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/offers/get`);
        if (res.data.success) {
          const data = res.data.data;
          console.log("dataoffer", data);
          const filteredoffer = data.filter(
            (item) => item.category?.toLowerCase() === category?.toLowerCase()
          );
          console.log("category from URL:", category);
          console.log("filtered offer", filteredoffer);
          setOffers(filteredoffer);
        }
      } catch (error) {
        toast.error("Failed to fetch offer", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    };
    fetchCategoryOffer();
  }, [category]);

  

  const filtered = CardData.cardData.filter(
    (item) => item.category?.toLowerCase() === category?.toLowerCase()
  );
  console.log("filtered data via card carousal", filtered);

 const filteredoffer = offers.filter(
  (item) => item.category?.toLowerCase() === category?.toLowerCase(),
   (item) => item.type?.toLowerCase() === "banner"
  
);
  console.log("filteredoffer data via card carousal", filteredoffer);

  return (
    <div>
      <PageLayout>
        <CarrousallBannerFilter data={filteredoffer} />
        <Testing data={filtered} />
        <ShopByCateg />
        <CardOffer data={filteroffers} />
      </PageLayout>
    </div>
  );
};

export default FilterPage;
