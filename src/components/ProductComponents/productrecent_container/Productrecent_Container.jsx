import React, { useState } from "react";
import Card from "../card/Card";
import { MdChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import "./Productrecent_Container.css";

const Productrecent_Container = ({ heading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const recentProduct = [
    {
      id: 1,
      image:
        "https://st1.bollywoodlife.com/wp-content/uploads/2018/07/SalmanKhan.jpg",
      heading: "Full Shirt",
      rating: "2. 4/5 Rating",
      subheading: "Black Cotton",
      off: "(13% OFF)",
      newprice: "Rs 369",
      oldprice: "Rs 899",
    },
    {
      id: 1,
      image:
        "https://veirdo.in/cdn/shop/files/01_0004_8_9550f34c-29a5-445a-98cc-7038d725642d.jpg?v=1733466511",
      heading: "Full Shirt",
      rating: "2. 4/5 Rating",
      subheading: "Black Cotton",
      off: "(14% OFF)",
      newprice: "Rs 269",
      oldprice: "Rs 1299",
    },
    {
      id: 1,
      image:
        "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28137932/2024/3/19/10fa6957-1082-4a8e-a7fa-b28e8a4d7dc11710836900879-NOBERO-Men-Typography-Printed-Applique-T-shirt-2971710836900-7.jpg",
      heading: "Full Shirt",
      rating: "2. 4/5 Rating",
      subheading: "Black Cotton",
      off: "(30% OFF)",
      newprice: "Rs 869",
      oldprice: "Rs 2799",
    },
    {
      id: 1,
      image:
        "https://www.botnia.in/cdn/shop/files/5_41b6d8fa-fa23-4550-97f2-5161b85abcbd.png?v=1695274048",
      heading: "Full Shirt",
      rating: "2. 4/5 Rating",
      subheading: "Black Cotton",
      off: "(16% OFF)",
      newprice: "Rs 469",
      oldprice: "Rs 5099",
    },
  ];
  const getStep = () => (window.innerWidth <= 1024 ? 3 : 1);

const nextSlide = () => {
  setCurrentIndex((prev) => (prev + getStep()) % recentProduct.length);
};

const prevSlide = () => {
  setCurrentIndex((prev) => 
    (prev - getStep() + recentProduct.length) % recentProduct.length
  );
};

  return (
    <div>
      {/* for-dektop-view?? */}
      <div className="product-similar-container">
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          {heading}
        </p>

        <div className=" flex justify-content-between">
          {recentProduct.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </div>
      {/* for-mobile-view?? */}

      <div className="product-similar-container-mobile d-none">
        <div className="d-flex justify-content-between align-items-center pb-2">
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: "500",
              fontSize: "20px",
              marginBottom: "0",
            }}
          >
            {heading}
          </p>
          <div className="d-flex align-items-center gap-3">
            <button className="prevslideproduct"
              onClick={prevSlide}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
                backgroundColor: "#FF8272",
                color: "white",
                borderRadius: "50%",
              }}
            >
              <MdChevronLeft />
            </button>
            <button className="nextslideproduct"
              onClick={nextSlide}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "20px",
                height: "20px",
                backgroundColor: "#FF8272",
                color: "white",
                borderRadius: "50%",
              }}
            >
              <MdOutlineChevronRight />
            </button>
          </div>
        </div>

        <div className="productsimilar-content flex justify-content-between">
          <Card data={recentProduct[currentIndex]} />

          {recentProduct[currentIndex + 1] && (
            <Card data={recentProduct[currentIndex + 1]} />
          )}
          {recentProduct[currentIndex + 2] && (
            <Card data={recentProduct[currentIndex + 2]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Productrecent_Container;
