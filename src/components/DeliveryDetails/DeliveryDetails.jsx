import React, { useEffect, useState } from "react";
import "./DeliveryDetails.css";
import { BiCurrentLocation } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import BASE_URL from "../../Config/config.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { CartState } from "../../context/Context.jsx";
import axios from 'axios'

const DeliveryDetails = () => {
  const navigate = useNavigate();
  const { state } = CartState();
  const [officeloc, setOfficeLoc] = useState("");
  const [userId, setUserId] = useState(null)
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [addresses, setAddresses] = useState([])

  const initialCheckoutFormState = {
    email: "",
    phone: "",
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    landmark: "",
  };

  const [formData, setFormData] = useState(initialCheckoutFormState);

  // fetch user id from token
  useEffect(() => {
    const token = localStorage.getItem("token")?.trim();
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        if (decoded.email) {
          setFormData((prev) => ({
            ...prev,
            email: decoded.email,
          }))
        }
        if (decoded.id || decoded.userId || decoded._id) {
          setUserId(decoded.id || decoded.userId || decoded._id)
        }
        console.log("decoded from checkout", userId);
      } catch (error) {
        console.error("Error decoding token", error);
      }
    }
  }, [])


  const handleInputChange = (e) => {
    setSelectedAddress(null) //unselect saved address
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (phone) => {
    setSelectedAddress(null)
    setFormData((prev) => ({ ...prev, phone }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if saved address is selected
    if (selectedAddress) {
      localStorage.setItem("selectedAddress", JSON.stringify(selectedAddress))
      navigate("/paymentoption")
      return;
    }
    // validate new address
    const {name, phone, address, city, state, zip, landmark, email} = formData
      if (!name || !phone || !address || !city || !state || !zip || !landmark) {
    toast.warning("Please fill all fields");
    return;
  }
      try {
        // save to backend
        const response = await fetch(`${BASE_URL}/api/address`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            name,
            email,
            phone,
            street: `${address} ${landmark}`,
            city,
            state,
            zip,
            tag:officeloc,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to save to server");
        }
        const result = await response.json();
        console.log("Saved to server:", result);
        toast.success("Address saved successfully!");
        localStorage.setItem("selectedAddress", JSON.stringify(result.data))
        setFormData(initialCheckoutFormState);
        navigate("/paymentoption");
        return;
      } catch (error) {
        console.error("Error during form submission", error);
        toast.error("Something went wrong while saving the data");
        return;
      }
  };

  useEffect(() => {
    if (userId) {
      axios.get(`${BASE_URL}/api/address/${userId}`).then((res) => {
        setAddresses(res.data.data)
        // console.log('resdee', res.data.data)
      })
        .catch((error) => {
          console.error("Failed to fetch address", error)
        });
    }
  }, [userId]);

  return (
    <div className="deliverydetailsection">
      <div className="uselocationdetaildiv" style={{ cursor: 'pointer' }}>
        <span>
          <BiCurrentLocation style={{ color: "white" }} />
        </span>
        <span className="usemyloco">Use Saved Location</span>
      </div>
      {addresses.length > 0 && (
        <div className="saved-addresses">
          {addresses.slice(0, 2).reverse().map((addr) => (
            <div key={addr._id} style={{ marginBottom: "10px" }}>
              <input type="radio" name="savedAddress"
                checked={selectedAddress?._id === addr._id}
                onClick={() => {
                  if (selectedAddress?._id === addr._id) {
                    setSelectedAddress(null);
                  } else {
                    setSelectedAddress(addr)
                  }
                }} value={addr._id} />
              <label htmlFor="">{addr.street}, {addr.city}, {addr.state} - {addr.zip}</label>
            </div>
          ))}
        </div>
      )}
      <div className="deliveryaddress">
        <h3 className="deheaading">Add Delivery Address</h3>
        {/* form */}
        <div className="deliverformdiv">
          <form action="" onSubmit={handleSubmit}>
            {!selectedAddress && (
              <>
                <div
                  className="inputfirstdeliver"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    marginTop: "30px",
                    gap: "30px",
                  }}
                >
                  {/* name div */}
                  <div style={{ display: "flex", border: "1px solid #d0c8c8", padding: "7px 10px", borderRadius: '5px' }}>
                    <input
                      className="accouninput"
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={{ outline: 'none' }}
                    />
                  </div>
                  {/* mobile no */}
                  <div style={{ display: "flex", }}>
                    <PhoneInput
                      // className="form-input checkout-group"
                      country={"in"}
                      enableSearch={true}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputStyle={{
                        width: "100%",
                        padding: "12px 50px",
                      }}
                    />
                  </div>
                </div>
                <div
                  className="inputfirstdeliver-pincodediv"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    marginTop: "30px",
                    gap: "30px",
                  }}
                >
                  {/* pincode div */}
                  <div style={{ display: "flex", border: "1px solid #d0c8c8", padding: "7px 10px", borderRadius: '5px' }}>
                    <input
                      className="accouninput pincd"
                      type="number"
                      placeholder="Pin Code"
                      name="zip"
                      id="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      required
                      style={{ outline: 'none' }}
                    />
                  </div>
                  {/* land mark */}
                  <div style={{ display: "flex", border: "1px solid #d0c8c8", padding: "7px 10px", borderRadius: '5px' }}>
                    <input
                      className="accouninput"
                      type="text"
                      placeholder="Land Mark"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleInputChange}
                      required
                      style={{ outline: 'none' }}
                    />
                  </div>
                </div>
                {/* text area */}
                <div style={{ marginTop: "30px" }}>
                  <div style={{ display: "flex" }}>
                    <textarea
                      style={{ height: "100px", width: '100%', border: "1px solid #d0c8c8", padding: "7px 10px", outline: 'none', borderRadius: '5px' }}
                      className="accouninput"
                      type="text"
                      name="address"
                      placeholder="Area/Street Address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                {/* city & state */}
                <div
                  className="selectdelivery-city-state"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    marginTop: "30px",
                    gap: "30px",
                  }}
                >
                  {/* city div */}
                  <div style={{ display: "flex", border: "1px solid #d0c8c8", padding: "7px 10px", borderRadius: '5px' }}>
                    <select
                      style={{ color: "gray", outline: 'none' }}
                      className="accouninput"
                      type="number"
                      placeholder=""
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    >
                      <option value="">
                        City
                      </option>
                      <option value="Patna">Patna</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Ranchi">Ranchi</option>
                      <option value="Dispur">Dispur</option>
                    </select>
                  </div>
                  {/* state div */}
                  <div style={{ display: "flex", border: "1px solid #d0c8c8", padding: "7px 10px", borderRadius: '5px' }}>
                    <select
                      style={{ color: "gray", outline: 'none' }}
                      className="accouninput"
                      type="text"
                      placeholder="State"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}

                    >
                      <option value="">
                        State
                      </option>
                      <option value="Bihar">Bihar</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Assam">Assam</option>
                    </select>
                  </div>
                </div>
                {/* Address choose */}
                <div
                  className="w-full mb-3"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <label htmlFor="" className="accondetaillabel">
                    <h3 className="deheaading">Address Type</h3>{" "}
                  </label>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: "30px" }}
                  >
                    <input
                      className="radioput"
                      type="radio"
                      name="officeloc"
                      value="home"
                      checked={officeloc === "home"}
                      onChange={(e) => setOfficeLoc(e.target.value)}
                    />
                    <label htmlFor="" className="accondetaillabel">
                      Home
                    </label>
                    <input
                      className="radioput"
                      type="radio"
                      name="officeloc"
                      value="office"
                      checked={officeloc === "office"}
                      onChange={(e) => setOfficeLoc(e.target.value)}
                    />
                    <label htmlFor="" className="accondetaillabel">
                      Office
                    </label>
                  </div>
                </div>
              </>
            )}
            {/* save address or cancel */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "30px",
                gap: "30px",
              }}
            >
              <div className="cancelbtndiv">
                <button
                  type="button"
                  onClick={() => navigate("/bag")}
                  style={{ padding: "0px 40px", color: "#ff8272" }}
                >
                  Cancel
                </button>
              </div>
              <div className="saveandcontinuediv">
                <button type="submit" className="svepay">
                  Save Address & Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
