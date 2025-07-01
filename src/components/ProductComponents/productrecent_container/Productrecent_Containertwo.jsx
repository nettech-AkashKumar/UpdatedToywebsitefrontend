import React, {useState, useEffect} from 'react';
import Card from '../card/Card';
import { MdChevronLeft } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import './Productrecent_Container.css'

const Productrecent_Containertwo = ({heading}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [recentProducts, setRecentProducts] = useState([])
    // const recentProducttwo = [
    //     {
    //       id: 1,
        
    //       image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/05/2-photoutils.com_.jpg?ssl=1&quality=80&w=full&strip=all",
    //        heading: "Blanket",
    //        rating:"2. 4/5 Rating",
    //       subheading: "Cotton",
    //       off: "(3% OFF)",
    //       newprice: "Rs 169",
    //       oldprice: "Rs 699",
         
    //     },
    //      {
    //       id: 1,
          
    //       image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/05/2-photoutils.com_.jpg?ssl=1&quality=80&w=full&strip=all",
    //        heading: "Underwear",
    //         rating:"2. 4/5 Rating",
    //       subheading: "Smooth",
    //       off: "(6% OFF)",
    //       newprice: "Rs 869",
    //       oldprice: "Rs 1229",
         
    //     },
    //      {
    //       id: 1,
         
    //       image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/05/2-photoutils.com_.jpg?ssl=1&quality=80&w=full&strip=all",
    //        heading: "Lahnga",
    //         rating:"2. 4/5 Rating",
    //       subheading: "Washable",
    //       off: "(20% OFF)",
    //       newprice: "Rs 469",
    //       oldprice: "Rs 999",
         
    //     },
    //      {
    //       id: 1,
          
    //       image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/05/2-photoutils.com_.jpg?ssl=1&quality=80&w=full&strip=all",
    //        heading: "Ghaghra",
    //         rating:"2. 4/5 Rating",
    //       subheading: "Silcon",
    //       off: "(19% OFF)",
    //       newprice: "Rs 200",
    //       oldprice: "Rs 700",
         
    //     },
    //       {
    //       id: 1,
          
    //       image:"https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2023/05/2-photoutils.com_.jpg?ssl=1&quality=80&w=full&strip=all",
    //        heading: "Ghaghra",
    //         rating:"2. 4/5 Rating",
    //       subheading: "Silcon",
    //       off: "(19% OFF)",
    //       newprice: "Rs 200",
    //       oldprice: "Rs 700",
         
    //     },
    // ]
     const getStep = () => (window.innerWidth <= 1024 ? 3 : 1);

const nextSlide = () => {
  setCurrentIndex((prev) => (prev + getStep()) % recentProducts.length);
};

const prevSlide = () => {
  setCurrentIndex((prev) => 
    (prev - getStep() + recentProducts.length) % recentProducts.length
  );
};

 
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("recentActivity")) || [];
    setRecentProducts(storedProducts)
  }, []);
  return (
    <div>
       {/* for-dektop? */}
      <div className="product-recent-container">
        <p style={{fontFamily: '"Poppins", sans-serif', fontWeight:"500", fontSize:"20px"}}>{heading}</p>
      <div className='flex justify-content-between'>
             {recentProducts.slice(0, 5).map((item, index) => (
          item ? <Card
             key={index}
             data={item}
            />
            : null
           
          ))}
      </div>
      </div>

       {/* for-mobile-view?? */}

      <div className="product-recent-container-mobile d-none">
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
                color:"white",
                borderRadius: "50%",
              }}
            >
              <MdChevronLeft/>
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

        <div className="productrecent-content flex justify-content-between">
              {recentProducts[currentIndex] && (
            <Card data={recentProducts[currentIndex]} />
            )}
          {recentProducts[currentIndex + 1] && (
            <Card data={recentProducts[currentIndex + 1]} />
          )}
          {recentProducts[currentIndex + 2] && (
            <Card data={recentProducts[currentIndex + 2]} />
          )}
         
        </div>
      </div>
    </div>
  );
}

export default Productrecent_Containertwo;
