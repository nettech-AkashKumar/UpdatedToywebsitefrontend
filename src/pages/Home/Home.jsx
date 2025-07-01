import React, { useEffect, useState } from 'react';
import PageLayout from '../../layouts/PageLayout';
import ElevateSection from '../../components/HomeComponents/ElevateSection/ElevateSection';
import Testing from '../../components/HomeComponents/CardCarousal/testing.jsx';
import Knockoutoffer from '../../components/HomeComponents/Knockoutoffer/Knockoutoffer';
import CardOffer from '../../components/HomeComponents/cardoffer/cardoffer';
import ShopByCateg from '../../components/HomeComponents/shopbycategoryheading/ShopByCateg';
import BASE_URL from '../../Config/config.js';
import axios from 'axios';
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import CardData from "../../JSONData/carddata.json"
import CarrousallBannerFilter from '../../components/HomeComponents/carouselbannerfilter/CarouselBannerFilter.jsx';


const Home = () => {
  // for card offer
  const [offers, setOffers] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/homecards`)
        if (res.data.success) {
          setOffers(res.data.data);
          console.log('data', res.data.data)
        }
      } catch (error) {
        toast.error('Failed to fetch card offer data', {
          position: 'top-center',
          autoClose: 3000,
        })
      }
    }
    fetchOffer();
  }, []);

  useEffect(() => {
  const fetchBanner = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/offers/get`);
      const allBanners = res.data.data;

      // ✅ Logic: Keep only latest banner per category (by assuming last one is latest)
      const uniqueCategoryMap = new Map();
      for (let i = allBanners.length - 1; i >= 0; i--) {
        const banner = allBanners[i];
        if (!uniqueCategoryMap.has(banner.category)) {
          uniqueCategoryMap.set(banner.category, banner);
        }
      }

      const filteredBanners = Array.from(uniqueCategoryMap.values());
      setBannerData(filteredBanners);

    } catch (err) {
      console.error("Error:", err);
    }
  };
  fetchBanner();
}, []);



  return (
    <div>
      <PageLayout>
        <ElevateSection />
        <Testing data={CardData?.cardData?.slice(0,6)} />
        <CarrousallBannerFilter data={bannerData.slice(0,6)}/>
        <ShopByCateg />
        <CardOffer data={offers} />
        <Knockoutoffer />
      </PageLayout>

    </div>
  );
}

export default Home;


