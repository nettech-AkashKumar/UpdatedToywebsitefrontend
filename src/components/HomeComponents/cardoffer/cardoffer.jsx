// import React from 'react'
// import './cardoffer.css'
// import BASE_URL from '../../../Config/config.js'

// const CardOffer = ({ data = [] }) => {
//     console.log('data in cardff', data)

//     return (
//         <div className='my-10'>
//             <div className="cardofferdiv">
//                 {data.map((item, index) => (
//                     <div className='card' key={index}>
//                         <div className='cardimagediv'>
//                             <img className='cardimageoffer' src={item.imageUrl ? `${BASE_URL}/${item.imageUrl}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s"} />
//                         </div>
//                         <div className='cardimagetext'>
//                             <p className='cardtitle'>{item.title}</p>
//                             <p className='cardcontentoffer'>{item.discount}</p>
//                             <p className='cardcontentbtn'>Shop Now</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default CardOffer;

import React, { useState } from "react";
import "./cardoffer.css";
import BASE_URL from "../../../Config/config.js";
import { Link } from "react-router-dom";

const CardOffer = ({ data = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 18;

  // Pagination calculations
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="my-10">
      <div className="cardofferdiv">
        {currentItems.map((item, index) => (
          <div className="card" key={index}>
            <div className="cardimagediv">
              <img
                className="cardimageoffer"
                src={
                  item.imageUrl
                    ? `${BASE_URL}/${item.imageUrl}`
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s"
                }
                alt="offer"
              />
            </div>
            <div className="cardimagetext">
              <p className="cardtitle">{item.title}</p>
              <p className="cardcontentoffer">{item.discount}</p>
              <Link to={item.link} className="cardcontentbtn" style={{textDecoration:"none"}}>
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div
        className="pagination-controls"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <span style={{ margin: "0 15px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardOffer;
