import React from "react";
import "./dropdown.css";
import { Link } from "react-router";

const Dropdownfive = () => {
  return (
    <div>
      <div className="dropdownmain d-flex" style={{ backgroundColor: "#f3f5f6" }}>
        <div className="dropdowcontentnone d-flex flex-column gap-4">
          <div >

            <ul>
              <Link to="/electronics/phone" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <li><strong style={{ color: "#ED4245" }}>Phones</strong></li>
              </Link>
              <li>
                <Link to="/electronics/nova" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Nova
                </Link>
              </li>
              <li>
                <Link to="/electronics/realzon" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Realzon
                </Link>
              </li>
              <li>
                <Link to="/electronics/skyfi" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Skyfi
                </Link>
              </li>
              <li>
                <Link to="/electronics/oppa" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  OPPA
                </Link>
              </li>
              <li>
                <Link to="/electronics/applin" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Applin
                </Link>
              </li>
              <li>
                <Link to="/electronics/vion" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Vion
                </Link>
              </li>
              <li>
                <Link to="/electronics/hexa" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Hexa
                </Link>
              </li>
              <li>
                <Link to="/electronics/iqn" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  IQN
                </Link>
              </li>
              <li>
                <Link to="/electronics/motra" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Motra
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <Link to="/electronics/phoneaccessories" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <li><strong style={{ color: "#ED4245" }}>Phone Accessories</strong></li>
              </Link>
              <li>
                <Link to="/electronics/cases" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Cases
                </Link>
              </li>
              <li>
                <Link to="/electronics/headsets" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Headsets
                </Link>
              </li>
              <li>
                <Link to="/electronics/chargers" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Chargers
                </Link>
              </li>
              <li>
                <Link to="/electronics/cables" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Cables
                </Link>
              </li>
              <li>
                <Link to="/electronics/holders" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Holders
                </Link>
              </li>
              <li>
                <Link to="/electronics/memory-cards" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Memory Cards
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentntwo d-flex flex-column gap-4">
          <div>
            <ul>
              <Link to="/electronics/smartdevices" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <li><strong style={{ color: "#ED4245" }}>Smart Devices</strong></li>
              </Link>
              <li>
                <Link to="/electronics/smartwatches" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Smartwatches
                </Link>
              </li>
              <li>
                <Link to="/electronics/fitness" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Fitness
                </Link>
              </li>
              <li>
                <Link to="/electronics/bands" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Bands
                </Link>
              </li>
              <li>
                <Link to="/electronics/vr" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  VR
                </Link>
              </li>
              <li>
                <Link to="/electronics/glasses" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Glasses
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <Link to="/electronics/laptops&pc" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <li><strong style={{ color: "#ED4245" }}>Laptops & PCs</strong></li>
              </Link>
              <li>
                <Link to="/electronics/gaming-laptops" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Gaming Laptops
                </Link>
              </li>
              <li>
                <Link to="/electronics/desktop-pcs" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Desktop PCs
                </Link>
              </li>
              <li>
                <Link to="/electronics/tablets" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Tablets
                </Link>
              </li>
              <li>
                <Link to="/electronics/monitors" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Monitors
                </Link>
              </li>
              <li>
                <Link to="/electronics/keyboards" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Keyboards
                </Link>
              </li>
              <li>
                <Link to="/electronics/keyboards-and-mice" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Keyboards & Mice
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnthree d-flex flex-column gap-4">
          <div>
            <ul>
              <Link to="/electronics/storage" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <li><strong style={{ color: "#ED4245" }}>Storage & Add-ons</strong></li>
              </Link>
              <li>
                <Link to="/electronics/hard-drives" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Hard Drives
                </Link>
              </li>
              <li>
                <Link to="/electronics/usb-drives" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  USB Drives
                </Link>
              </li>
              <li>
                <Link to="/electronics/laptop-sleeves" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Laptop Sleeves
                </Link>
              </li>
              <li>
                <Link to="/electronics/laptop-skins" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Laptop Skins
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <Link to="/electronics/entertainment" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <li><strong style={{ color: "#ED4245" }}>Entertainment</strong></li>
              </Link>
              <li>
                <Link to="/electronics/smart-tvs" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Smart TVs
                </Link>
              </li>
              <li>
                <Link to="/electronics/bluetooth-speakers" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Bluetooth Speakers
                </Link>
              </li>
              <li>
                <Link to="/electronics/home-theater" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Home Theater
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnfour d-flex flex-column gap-4">
          <div>
            <ul>
              <Link to="/electronics/camera" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <li><strong style={{ color: "#ED4245" }}>Cameras & Gear</strong></li>
              </Link>
              <li>
                <Link to="/electronics/dslrs" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  DSLRs
                </Link>
              </li>
              <li>
                <Link to="/electronics/action-cams" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Action Cams
                </Link>
              </li>
              <li>
                <Link to="/electronics/tripods" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Tripods
                </Link>
              </li>
              <li>
                <Link to="/electronics/lenses" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Lenses
                </Link>
              </li>
            </ul>

          </div>
          <div>
            <ul>
              <Link to="/electronics/smarthome" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              </Link>
              <li><strong style={{ color: "#ED4245" }}>Smart Home</strong></li>
              <li>
                <Link to="/electronics/voice-assistants" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Voice Assistants
                </Link>
              </li>
              <li>
                <Link to="/electronics/automation-tools" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Automation Tools
                </Link>
              </li>
            </ul>

          </div>
        </div>

        <div className="dropdowcontentnfive d-flex flex-column gap-4">
          <div>
            <ul>
              <Link to="/electronics/topdeals" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                <li><strong style={{ color: "#ED4245" }}>Top Deals</strong></li>
              </Link>
              <li>
                <Link to="/electronics/trade-in-offers" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Trade-in Offers
                </Link>
              </li>
              <li>
                <Link to="/electronics/smartbuy-picks" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  SmartBuy Picks
                </Link>
              </li>
              <li>
                <Link to="/electronics/emi-plans" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  EMI Plans
                </Link>
              </li>
              <li>
                <Link to="/electronics/limited-offers" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Limited Offers
                </Link>
              </li>
              <li>
                <Link to="/electronics/deodorants" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Deodorants
                </Link>
              </li>
              <li>
                <Link to="/electronics/ties-cufflinks-pocket-squares" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Ties, Cufflinks & Pocket Squares
                </Link>
              </li>
              <li>
                <Link to="/electronics/accessory-gift-sets" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Accessory Gift Sets
                </Link>
              </li>
              <li>
                <Link to="/electronics/mufflers-scarves-gloves" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Mufflers, Scarves & Gloves
                </Link>
              </li>
              <li>
                <Link to="/electronics/phone-cases" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Phone Cases
                </Link>
              </li>
              <li>
                <Link to="/electronics/rings-wristwear" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Rings & Wristwear
                </Link>
              </li>
              <li>
                <Link to="/electronics/helmets" className="dropdowntext" style={{ textDecoration: "none", color: "#717171" }}>
                  Helmets
                </Link>
              </li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Dropdownfive;
