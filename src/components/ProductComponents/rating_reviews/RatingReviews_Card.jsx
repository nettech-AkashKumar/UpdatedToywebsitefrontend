import React, { useEffect, useState } from "react";
import reating_reveiws_user_img from "../../../assets/image/rating-reviews-userlogo.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import rating_review_imguser from "../../../assets/image/rating-review.png";
import { IoMdStar } from "react-icons/io";
import styled from "styled-components";
import RatingStar from "../../RatingStar/RatingStar";


const StyledButton = styled.button`
   transition: 0.5s;
  &:hover {
    background-color: white !important;
    color: #FF8272 !important;
    border: 1px solid #FF8272;
  }
`;

const RatingReviews_Card = () => {
  const [reviews, setReviews] = useState([])
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("formDataArray")) || []
    setReviews(storedReviews)
  }, [])

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');
    setCurrentDate(formattedDate)
  }, [])

  return (
    <div>
      <div
        className="rating-reviews-card"
        style={{ width: "420px", height: "300px", border: "1px solid #ded7d7", borderRadius: "5px", padding: "20px 20px", display: "flex", flexDirection: "column", gap: "12px" }}
      >
        {reviews.map((review, index) => (
          <>

            <div className="d-flex  justify-content-between align-items-center">
              <div className="d-flex gap-3">
                <div style={{ width: "45px", height: "45px" }}>
                  <img
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "contain" }}
                    src={review.profileImage}
                    alt="reating_reveiws_user_img"
                  />
                </div>
                <div className="">
                  <strong style={{ color: "#3D3D3D" }}>{review.name}</strong>
                  <span><RatingStar rate={review.rate || 0} readOnly={true} /></span>
                </div>
              </div>
              <div>
                <p style={{ color: "#828282" }}>{currentDate}</p>
              </div>
            </div>

            <div className="" style={{ color: "#828282" }}>
              <p style={{ color: "#3D3D3D" }}>{review.review}</p>
              <p className="d-flex gap-3"><span className="d-flex align-items-center gap-1"><AiOutlineLike /> 72 Helpful</span>
                <span className="d-flex align-items-center gap-1"><AiOutlineDislike /> 06</span>
              </p>
            </div>

            <div className="d-flex  justify-content-between">
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: "100px", height: "75px", backgroundColor: "#aca8a8", borderRadius: "5px" }}>
                <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={review.image[0]} alt="rating_review_imguser" />
                <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={review.image[1]} alt="rating_review_imguser" />
              </div>
              {/* <div >
                <p className="mb-1" style={{ fontWeight: "500" }}>T-Shirt</p>
                <p className="d-flex align-items-center gap-2 mb-1" style={{ color: "#828282" }}>4.7 <IoMdStar />(356)</p>
                <p className="mb-1" style={{ color: "#FF8272", fontWeight: "500" }}>Rs. 579</p>
              </div> */}
              <div style={{ display: "flex", alignItems: "end" }}>
                <StyledButton className="buy-again-btn" style={{ backgroundColor: "#FF8272", color: "white", padding: "8px 22px", borderRadius: "5px" }}>Buy Again</StyledButton>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RatingReviews_Card;
