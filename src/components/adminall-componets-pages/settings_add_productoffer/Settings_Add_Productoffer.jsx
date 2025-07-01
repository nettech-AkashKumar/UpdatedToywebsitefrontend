import React, { useState, useRef } from "react";
import "./Settings_Add_Productoffer.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../Config/config.js";
import HomeoffershopbyCategoryCard from "../../HomeComponents/shopbycategoryheading/homeoffershopbycategorycard/HomeoffershopbyCategoryCard.jsx";
import HomeCarousalOfferModal from "./HomeCarousalOfferModal.jsx";
import { PlusCircle, ImagePlus } from "lucide-react";

const Settings_Add_Productoffer = () => {
  const [isopen, setIsOpen] = useState(false)

  const [homemodalopen, setHomeModalOpen] = useState(false);

  return (
   <div className="flex flex-col gap-6 items-center mt-10">
      <HomeCarousalOfferModal isopen={isopen} setIsOpen={setIsOpen} />
      <HomeoffershopbyCategoryCard
        show={homemodalopen}
        onClose={() => setHomeModalOpen(false)}
      />

      {/* Add Banner Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 bg[red]] px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
        style={{color:"white", backgroundColor:"rgb(255, 130, 114)"}}
      >
        <ImagePlus size={20} />
        Add Banner for Home
      </button>

      {/* Add Home Product Button */}
      <button
        onClick={() => setHomeModalOpen(true)}
        className="flex items-center gap-3 bg-gradient-to-r px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
        style={{color:"white", backgroundColor:"rgb(255, 130, 114)"}}
      >
        <PlusCircle size={20} />
        Add Home Product
      </button>
    </div>
  );
};

export default Settings_Add_Productoffer;
