import React, {useState, useEffect} from 'react';
// import "./Addresbook_Card.css";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import BASE_URL  from "../../../Config/config.js";

const Addressbook_Card = ({ data}) => {
    const [addresses, setAddresses] = useState([]);
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
  console.log("userId from addressbook", userId);
   //handle get
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/address/${userId}`);
        if (Array.isArray(res.data.data)) {
          setAddresses(res.data.data);
        } else {
          setAddresses([]);
        }
      } catch (error) {
        console.error("Error fetching addresses", error);
      }
    };
    if (userId) {
      fetchAddresses();
    }
  }, [userId]);
  
  const openEditModal = (address) => {
  console.log("Edit clicked", address);
  // implement modal logic
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/address/${id}`);
    setAddresses(prev => prev.filter(addr => addr._id !== id));
  } catch (err) {
    console.error("Delete error", err);
  }
};

  
  return (
    <div>
      {/* <div className="address-card">
  <div className="address-header">
    <input type="radio" name="select" />
    <span className="address-username" style={{fontFamily:'"Poppins", sans-serif'}}>{data.name}</span>
  </div>
  <div className="address-description" style={{fontFamily:'"Inter", sans-serif'}}>
           {data.description}
  </div>
  <div className="addres-actions d-flex justify-content-end " style={{fontFamily:'"Poppins", sans-serif'}}>
    <button className="address-edit-btn">Edit</button>
    <button className="address-delete-btn">Delete</button>
  </div>
</div> */}
 <div className="d-flex flex-column gap-4">
                  <div
                    className="addressbook_Card"
                    style={{display:"grid",gridTemplateColumns: 'repeat(3, 1fr)', gap: "3rem" }}
                  >
                    {addresses.map((address, index) => (
                      <div
                        key={address._id}
                        style={{
                          backgroundColor: "var(--address-card)",
                          maxWidth: "371px",
                          borderRadius: "10px",
                          padding: "20px 10px",
                          color: "var(--text-color)!important",
                        }}
                      >
                        <div className="text-center">
                          <input type="radio" name="address" />
                        </div>
                        <div>
                          <p>{address.tag}</p>
                          <p>{`${address.street}, ${address.city}, ${address.state}, ${address.zip}`}</p>
                          <p>{`${address.phone}`}</p>
                          <div className="text-end d-flex flex-row justify-content-end gap-2">
                            <button
                            onClick={() => openEditModal(address)}
                              style={{
                                color: "#6941C6",
                                backgroundColor: "var(--edit-button)",
                                border: "none",
                                padding: "6px 6px",
                                borderRadius: "5px",
                              }}
                            >
                              <FiEdit/>
                            </button>
                            <button
                              onClick={() => handleDelete(address._id)}
                              style={{
                                color: "#B42318",
                                backgroundColor: "var(--delete-button)",
                                border: "none",
                                padding: "6px 6px",
                                borderRadius: "5px",
                              }}
                            >
                              <RiDeleteBinLine/>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/checkout" style={{color:"black"}}><div className="d-flex"><IoIosArrowRoundBack/><h5 style={{fontSize:'15px'}}>Checkout</h5></div></Link>
                </div>

    </div>
  );
}

export default Addressbook_Card;
