import React, { useEffect, useState } from "react";
import "./ProdcutsDetailsPage.css";
// import { AiFillLike, AiFillDislike } from "react-icons/ai";
import RatingStar from "../../components/RatingStar/RatingStar";
import { Link } from "react-router";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";


const ReviewCard = () => {
    const [reviews, setReviews] = useState([])
    const [currentDate, setCurrentDate] = useState('');

    // retrive review data from local storage
    useEffect(()=> {
        setInterval(() => {
            const storedReviews = JSON.parse(localStorage.getItem("formDataArray")) || [];
            setReviews(storedReviews)
            console.log('stored review', storedReviews.reviews)
        }, 1000)
    },[]);

    useEffect(() => {
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-GB', {
            day:'2-digit',
            month:'2-digit',
            year:'numeric',
        }).replace(/\//g, '-');
        setCurrentDate(formattedDate)
    },[])
  return (
    <div>
      <div
        className="customer-reviews-container"
        style={{
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="reviews-view"
            style={{ margin: "30px 0" }}
          >
            <div className=" d-flex justify-content-between align-items-center">
              <div>
                <div className="d-flex align-items-center gap-3">
                  <div style={{ width: "40px", height: "40px" }}>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: "50px",
                      }}
                      src={review.profileImage}
                      alt="reviews_img"
                    />
                  </div>
                  <div>
                    <p
                      className="m-0"
                      style={{ color: "#8d8b8b", fontSize: "15px" }}
                    >
                      {review.name}
                    </p>
                    <RatingStar rate={review.rate || 0} readOnly={true}/>
                  </div>
                </div>
              </div>
              <div>
                <p style={{ color: "#828282", fontSize: "13px" }}>
                  {currentDate}
                </p>
              </div>
            </div>

            <div>
              <p>{review.review}</p>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex gap-4">
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "grey",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={review.image[0]}
                      alt="review_img1"
                    />
                  </div>
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "grey",
                    }}
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src={review.image[1]}
                      alt="review_img2"
                    />
                  </div>
                </div>
                <div className="d-flex gap-4">
                  <span
                    className="d-flex align-items-center gap-3"
                    style={{ color: "rgb(152 148 148)" }}
                  >
                    <AiOutlineLike />
                    72 Helpful
                  </span>
                  <span
                    className="d-flex align-items-center gap-3"
                    style={{ color: "rgb(152 148 148)" }}
                  >
                    <AiOutlineDislike />
                    06
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <p>
          <Link style={{ color: "#FF8272" }}>View all {reviews.length} reviews</Link>
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;

