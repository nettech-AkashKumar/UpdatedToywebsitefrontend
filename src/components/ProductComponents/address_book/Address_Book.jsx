import React, { useEffect, useState } from "react";
import "./Address_Book.css";
import PageLayout from "../../../layouts/PageLayout";
import Herosection_Userprofile from "../herosection_userprofile/Herosection_Userprofile";
import Sidebar_userprofile from "../../sidebar_userprofile/Sidebar_userprofile";
import { jwtDecode } from "jwt-decode";
import Address_bookModel from "./Address_bookModel";
import Addressbook_Card from "../address_book/Addressbook_Card";
import axios from "axios";
import BASE_URL from "../../../Config/config.js";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Address_Book = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [formData, setFormData] = useState({
     name: "",
    tag: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

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
        const res = await axios.get(`${BASE_URL}/api/address/${userId}`);
        if (Array.isArray(res.data.data)) {
          setAddresses(res.data.data.reverse());
          console.log('resdatasw', res.data.data)
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
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("selectedAddress"))
    if (saved) {
      setSelectedAddress(saved)
    }
  }, [])

  //handle input change
  const handleInputChange = (e) => {
    setFormData((preve) => ({ ...preve, [e.target.name]: e.target.value }));
  };
  const openAddModal = () => {
    setFormData({ tag: "", street: "", city: "", state: "", zip: "" });
    setEditMode(false);
    setIsModalOpen(true);
  };

  const openEditModal = (address) => {
    setFormData(address);
    setEditId(address._id);
    setEditMode(true);
    setIsModalOpen(true);
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      const response = await axios.put(
        `${BASE_URL}/api/address/${editId}`,
        formData
      );
      //update the edited address in your local storaqge
      setAddresses((prev) =>
        prev.map((addr) => (addr._id === editId ? response.data.data : addr))
      );
    } else {
      const response = await axios.post(`${BASE_URL}/api/address`, {
        ...formData,
        userId,
      });
      //Add the new address to your local state
      setAddresses((prev) => [...prev, response.data.data]);
    }
    // fetchAddresses();
    setIsModalOpen(false);
  };

  const handleDelete = async (addressId) => {
    try {
      await axios.delete(`${BASE_URL}/api/address/${addressId}`);
      setAddresses((prev) => prev.filter((addres) => addres._id !== addressId));
    } catch (error) {
      console.error("Failed to delete address", error);
    }
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address)
    localStorage.setItem("selectedAddress", JSON.stringify(address))
    setTimeout(() => {
      navigate("/paymentoption")
    }, 1000)
  }

  return (
    <div>
      <PageLayout>
        <div>
          <Herosection_Userprofile
            heading="Your Profile "
            subheading=" Address Book"
          />
          <div
            className="adrress-book-container"
            style={{ display: "flex", gap: "40px" }}
          >
            <Sidebar_userprofile />
            <div className="w-100 addresbook-cardcontainer">
              <div className="adrress-addlocation text-center py-7">
                <button
                  onClick={openAddModal}
                  style={{
                    backgroundColor: "#ff8272",
                    color: "white",
                    padding: "7px 65px",
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: "500",
                  }}
                >
                  + Add New Location
                </button>
              </div>
              <div className=" d-flex gap-4  py-4">
                <button
                  className="address-btn"
                  style={{
                    border: "1px solid #F3F3F3",
                    padding: "5px",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  <input
                    type="radio"
                    name="tag"
                    value="Home"
                    checked={formData.tag === "Home"}
                    onChange={handleInputChange}
                  />{" "}
                  Home
                </button>
                <button
                  className="address-btn"
                  style={{
                    border: "1px solid #F3F3F3",
                    padding: "5px",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  <input type="radio" /> Office
                </button>
                <button
                  className="address-btn"
                  style={{
                    border: "1px solid #F3F3F3",
                    padding: "5px",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  <input type="radio" /> Other
                </button>
              </div>
              {/* get address */}
              <div
                className="addressbook_Card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "3rem",
                }}
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
                      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
                    }}
                  >
                    <div className="text-center">
                      <input type="radio" name="address" checked={selectedAddress?._id === address._id} onChange={() => handleSelectAddress(address)} />
                    </div>
                    <div>
                      <p>{address.tag}</p>
                      <p>{`${address.street}, ${address.city}, ${address.state}, ${address.zip}`}</p>
                      <p>{`${address.phone}`}</p>
                      <div className="text-end d-flex flex-row justify-content-end gap-2">
                        <button
                          onClick={() => openEditModal(address)}
                          style={{
                            color: "#ff8272",
                            backgroundColor: "var(--edit-button)",
                            border: "none",
                            padding: "6px 6px",
                            borderRadius: "5px",
                            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px"
                          }}
                        >
                          <FiEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(address._id)}
                          style={{
                            color: "#ff8272",
                            backgroundColor: "var(--delete-button)",
                            border: "none",
                            padding: "6px 6px",
                            borderRadius: "5px",
                            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px"
                          }}
                        >
                          <RiDeleteBinLine />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className=""
                style={{
                  width: "100%",
                  height: "250px",
                  overflowY: "auto",
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 0fr)",
                  gap: "45px",
                }}
              >
                <Address_bookModel
                  isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  editMode={editMode}
                />
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Address_Book;
