import React from "react";
import "./dropdown.css";
import { Link } from "react-router";

const Dropdownfour = () => {
  return (
    <div>
      <div className="dropdownmain d-flex" style={{ backgroundColor: "#f3f5f6" }}>
        <div className="dropdowcontentnone d-flex flex-column gap-4">
          <div >

            <ul>
              <Link to="/beauty/essentials" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <li>
                  <strong style={{ color: "#06ACA3" }}>Beauty Essentials</strong>
                </li>
              </Link>
              <li>
                <Link to="/beauty/lipstick" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Lipstick
                </Link>
              </li>
              <li>
                <Link to="/beauty/mascara" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Mascara
                </Link>
              </li>
              <li>
                <Link to="/beauty/eyeliner" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Eyeliner
                </Link>
              </li>
              <li>
                <Link to="/beauty/eyeshadow" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Eyeshadow
                </Link>
              </li>
              <li>
                <Link to="/beauty/foundation" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Foundation
                </Link>
              </li>
              <li>
                <Link to="/beauty/compact" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Compact
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <Link to="/beauty/skincare" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <li>
                <strong style={{ color: "#06ACA3" }}>Skin Care</strong>
              </li>
              </Link>
              <li>
                <Link to="/beauty/face-cream" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Face Cream
                </Link>
              </li>
              <li>
                <Link to="/beauty/cleanser" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Cleanser
                </Link>
              </li>
              <li>
                <Link to="/beauty/sunscreen" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sunscreen
                </Link>
              </li>
              <li>
                <Link to="/beauty/face-wash" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Face Wash
                </Link>
              </li>
              <li>
                <Link to="/beauty/body-lotion" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Body Lotion
                </Link>
              </li>
              <li>
                <Link to="/beauty/hand-cream" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Hand Cream
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentntwo d-flex flex-column gap-4">
          <div>
            <ul>
              <Link to="/beauty/men'szone" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <li><strong style={{ color: "#06ACA3" }}>Men’s Zone</strong></li>
              </Link>
              <li>
                <Link to="/beauty/beard-trimmer" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Beard Trimmer
                </Link>
              </li>
              <li>
                <Link to="/beauty/nourishing-beard-balm" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Nourishing Beard Balm
                </Link>
              </li>
              <li>
                <Link to="/beauty/matte-hair-wax" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Matte Hair Wax
                </Link>
              </li>
              <li>
                <Link to="/beauty/mens-face-wash" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Men’s Face Wash
                </Link>
              </li>
              <li>
                <Link to="/beauty/aftershave-gel" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Aftershave Gel
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <Link to="/beauty/topbrands" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <li><strong style={{ color: "#06ACA3" }}>Top Brands</strong></li>
              </Link>
              <li>
                <Link to="/beauty/glow-up" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Glow Up
                </Link>
              </li>
              <li>
                <Link to="/beauty/skincraft" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  SkinCraft
                </Link>
              </li>
              <li>
                <Link to="/beauty/hairhaven" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  HairHaven
                </Link>
              </li>
              <li>
                <Link to="/beauty/scentury" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Scentury
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnthree d-flex flex-column gap-4">
          <div>
            <ul>
              <Link to="/beauty/giftingkits" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <li><strong style={{ color: "#06ACA3" }}>Gifting & Kits</strong></li>
              </Link>
              <li>
                <Link to="/beauty/gifting/skincare-combo-packs" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Skincare Combo Packs
                </Link>
              </li>
              <li>
                <Link to="/beauty/gifting/beauty-travel-kits" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Beauty Travel Kits
                </Link>
              </li>
              <li>
                <Link to="/beauty/gifting/festival-gift-boxes" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Festival Gift Boxes
                </Link>
              </li>
              <li>
                <Link to="/beauty/gifting/grooming-kits" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Grooming Kits for Him & Her
                </Link>
              </li>
              <li>
                <Link to="/footwear/sandals-floaters" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Sandals & Floaters
                </Link>
              </li>
              <li>
                <Link to="/footwear/flip-flops" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Flip Flops
                </Link>
              </li>
              <li>
                <Link to="/footwear/socks" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Socks
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <Link to="/beauty/appliances" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <li><strong style={{ color: "#06ACA3" }}>Appliances</strong></li>
              </Link>
              <li>
                <Link to="/beauty/appliances/hair-dryer" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Hair Dryer
                </Link>
              </li>
              <li>
                <Link to="/beauty/appliances/straightener" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Straightener
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnfour d-flex flex-column gap-4">
          <div>
            <ul>
              <Link to="/beauty/haircare" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <li><strong style={{ color: "#06ACA3" }}>Hair Care</strong></li>
              </Link>
              <li>
                <Link to="/beauty/hair-care/shampoo" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Shampoo
                </Link>
              </li>
              <li>
                <Link to="/beauty/hair-care/conditioner" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Conditioner
                </Link>
              </li>
              <li>
                <Link to="/beauty/hair-care/hair-oil" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Hair Oil
                </Link>
              </li>
              <li>
                <Link to="/beauty/hair-care/serum" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Serum
                </Link>
              </li>
              <li>
                <Link to="/beauty/hair-care/hair-color" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Hair Color
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <Link to="/beauty/fragnance" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <li><strong style={{ color: "#06ACA3" }}>Fragrance</strong></li>
              </Link>
              <li>
                <Link to="/beauty/fragrance/perfume" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Perfume
                </Link>
              </li>
              <li>
                <Link to="/beauty/fragrance/deodorant" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Deodorant
                </Link>
              </li>
              <li>
                <Link to="/beauty/fragrance/body-spray" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Body Spray
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnfive d-flex flex-column gap-4">
          <div>
            <ul>
              <Link to="/beauty/mom&babycare" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <li><strong style={{ color: "#06ACA3" }}>Mom & Baby Care</strong></li>
              </Link>
              <li>
                <Link to="/beauty/mom-baby-care/baby-lotion" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Baby Lotion
                </Link>
              </li>
              <li>
                <Link to="/beauty/mom-baby-care/tear-free-baby-wash" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Tear-Free Baby Wash
                </Link>
              </li>
              <li>
                <Link to="/beauty/mom-baby-care/diaper-rash-cream" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Diaper Rash Cream
                </Link>
              </li>
              <li>
                <Link to="/beauty/mom-baby-care/baby-hair-oil" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Baby Hair Oil
                </Link>
              </li>
              <li>
                <Link to="/beauty/mom-baby-care/baby-moisturizer" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Baby Moisturizer
                </Link>
              </li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dropdownfour;
