import React, { useEffect, useState } from "react";
import PageLayouts from "../../../layouts/PageLayout";
import Herosection_Userprofile from "../herosection_userprofile/Herosection_Userprofile";
import Sidebar_userprofile from "../../sidebar_userprofile/Sidebar_userprofile";
import RatingReviews_Card from "./RatingReviews_Card";
import './Rating_Reviews.css'

const Rating_Reviews = () => {
  return (
    <div>
      <PageLayouts>
        <div>
          <Herosection_Userprofile
            heading="Your Profile "
            subheading=" Rating & Reviews"
          />
          <div className="ratingandreviews-container" style={{ display: "flex", gap: "40px"}}>
            <Sidebar_userprofile />
            <div style={{ width: "100%", overflow:"auto" }}>
              <div className="pb-4">
                <h4 style={{ fontFamily: '"Poppins", sans-serif' }}>
                  Your Reviews
                </h4>
              </div>
              <div className="" style={{display: "grid", gridTemplateColumns: "repeat(3,0fr)", gap: "20px", overflowY:"auto", height: "600px"}}>
                <RatingReviews_Card />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </PageLayouts>
    </div>
  );
};

export default Rating_Reviews;
