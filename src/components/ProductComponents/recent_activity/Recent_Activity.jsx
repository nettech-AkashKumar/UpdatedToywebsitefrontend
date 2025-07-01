import React, { useEffect, useState } from "react";
import "./Recent_Activity.css";
import PageLayout from "../../../layouts/PageLayout";
import Herosection_Userprofile from "../herosection_userprofile/Herosection_Userprofile";
import Sidebar_userprofile from "../../sidebar_userprofile/Sidebar_userprofile";
import { IoCheckmark } from "react-icons/io5";
import Card from "../card/Card";
// import Recentone from "../../../assets/image/Recent1.png";
// import Recenttwo from "../../../assets/image/Recent2.png";
// import Recentthree from "../../../assets/image/Card-image.png"
const Recent_Activity = () => {

  const [recentProducts, setRecentProducts] = useState([])
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("recentActivity")) || [];
    setRecentProducts(storedProducts)
  }, []);

  return (
    <div>
      <PageLayout>
        <div>
          <Herosection_Userprofile heading="Your Profile " subheading=" Recent Activity" />
          <div className="recent-activity-container" style={{ display: "flex", gap: "40px" }}>
            <Sidebar_userprofile />
            <div style={{ width: "100%", overflow: "auto" }}>
              <div className="recent-activity-btn-container" style={{ display: "flex", gap: "24px", fontFamily: '"Poppins", sans-serif' }}>
                <button className="browser-history pbtn-sbtn-brbtn" style={{ backgroundColor: "#F5F5F5", display: "flex", alignItems: "center", padding: "5px" }}>
                  <IoCheckmark />
                  Browsing History
                </button>
                {/* <button className="pbtn-sbtn-brbtn" style={{ backgroundColor: "#F5F5F5", padding: "5px" }}>Product Reviews</button>
                <button className="pbtn-sbtn-brbtn" style={{ backgroundColor: "#F5F5F5", padding: "5px" }}>Shipping Details</button> */}
              </div>

              <div className="reeccrnt" style={{ display: "grid", gridTemplateColumns: "repeat(4, 0fr)", gap: "45px", height: "100vh", overflowY: "auto", margin: "30px 0" }}>
                {recentProducts.map((item, index) => (
                  <Card
                    key={index}
                    data={item}
                  />
                ))}

              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Recent_Activity;
