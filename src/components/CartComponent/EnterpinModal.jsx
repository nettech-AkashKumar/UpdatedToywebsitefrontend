import React, { useEffect, useState } from "react";
import "./EnterpinModal.css";
import { BiCurrentLocation } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from "react-router";
import DeliveryAddress from "../../pages/DeliveryDetails/DeliveryAddress";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import BASE_URL from "../../Config/config.js";

const EnterpinModal = ({ onClose, onPinSubmit  }) => {
  const [pinCode, setPinCode] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [filteredAddresses, setFilteredAddresses] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const token = localStorage.getItem("token")?.trim();
  let userId = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);

      userId = decoded.id;
    } catch (error) {
      console.log("Error decoding token", error);
    }
  }
  console.log("userId from pincd", userId);

  // handle fetch
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/address/${userId}`);
        if (Array.isArray(res.data.data)) {
          setAddresses(res.data.data);
          setFilteredAddresses(res.data.data); //initally show all
          console.log("enterfetchadd33", res.data.data);
        } else {
          setAddresses([]);
          setFilteredAddresses([]);
        }
      } catch (error) {
        console.error("Error fetching addresses", error);
      }
    };
    if (userId) {
      fetchAddresses();
    }
  }, [userId]);

  // handle pin code submission
  const handleSubmit = () => {
    if (!pinCode || pinCode.length < 6) return;

    const matched = addresses.filter((addr) => addr.zip === pinCode);
    setFilteredAddresses(matched);
    setSubmitted(true);
    // send pin to parent component
    if(matched.length > 0 && onPinSubmit) {
        onPinSubmit(pinCode)
    }
  };

  const handleChangePin = () => {
    setSubmitted(false);
    setPinCode("");
    setFilteredAddresses([]);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="modal-headerpin">
          <h3 className="deheads">Enter Delivery Details</h3>
          <button className="close-btn" onClick={onClose}>
            x
          </button>
        </div>
        <div className="pincode-section">
          {submitted ? (
            <>
              <div
                className="submitted-pin-box"
                style={{
                  border: "1px solid #ccc",
                  padding: "10px 15px",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <strong>{pinCode}</strong>
                  <span
                    style={{
                      backgroundColor: "#2dd4bf",
                      borderRadius: "50%",
                      width: "18px",
                      height: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      color: "white",
                    }}
                  >
                    ✓
                  </span>
                </div>
                <span
                  style={{
                    color: "#ff8272",
                    fontWeight: "600",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onClick={handleChangePin}
                >
                  CHANGE
                </span>
              </div>
            </>
          ) : (
            <>
              <input
                type="number"
                maxLength={6}
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                placeholder="Enter Pincode"
                className="pincode-input"
                onFocus={(e) => (e.target.style.border = "1px solid #ff8272")}
                style={{ outline: "none", MozAppearance: "textfield", WebkitAppearance: "none", margin: 0}}
              />
              <button
                type="submit"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </>
          )}
        </div>

        {/* render filtered delivery addresses here */}
        <div className="delivery-address-wrapper mt-3">
          {filteredAddresses.length > 0 ? (
            <DeliveryAddress preloadedAddresses={filteredAddresses} />
          ) : (
            <p style={{ color: "gray", fontSize: "14px", marginTop: "10px" }}>
              {pinCode
                ? "No address found for this PIN."
                : "Enter PIN to filter addresses"}
            </p>
          )}
        </div>
        <div className="divider">OR</div>
        <Link to="/address_book">
          <button className="add-address-btn">Add New Address</button>
        </Link>
        <div className="current-location">
          <span className="location-icon">
            <GiMoneyStack />
          </span>
          <span className="location-text">Use Payment Option</span>
        </div>
      </div>
    </div>
  );
};

export default EnterpinModal;
