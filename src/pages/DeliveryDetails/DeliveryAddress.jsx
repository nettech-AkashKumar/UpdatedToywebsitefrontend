import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router'
import { Link } from 'react-router'
import BASE_URL from "../../Config/config.js"

const DeliveryAddress = ({preloadedAddresses = [], onAddressSelect}) => {
    const [addresses, setAddresses] = useState([])
    const [selectedAddress, setSelectedAddress] = useState(null)
    const [showOptions, setShowOptions] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if(preloadedAddresses.length > 0) {
            setAddresses(preloadedAddresses);
            setSelectedAddress(preloadedAddresses[0]); //default to first address
        } else {
            const fetchAddresses = async () => {
                const token = localStorage.getItem("token")?.trim();
                let userId = null;
    
                if(token) {
                    try {
                        const decoded = jwtDecode(token)
                        userId = decoded.id
                    }catch(error) {
                        console.error("token decode error", error)
                    }
                }
                if(userId) {
                    try {
                        const res = await axios.get(`${BASE_URL}/address/${userId}`)
                        if(Array.isArray(res.data.data) && res.data.data.length > 0) {
                            setAddresses(res.data.data)
                            setSelectedAddress(res.data.data[0])
                        }
                    }catch(error) {
                        console.error("Error fetching address", error)
                    }
                }
            }
            fetchAddresses();
        }
    }, [preloadedAddresses])

    const handleSelect = (address) => {
        setSelectedAddress(address)
        setShowOptions(false)
        if(onAddressSelect) {
            onAddressSelect(addresses)
        }
    }

    const displayAddresses = (addresses || []).slice(0, 3);

  return (
     <div className="delivery-container">
      <div className="step-header">
        <span className="step-number">1</span>
        <span className="step-title">DELIVERY ADDRESS</span>
        <span className="step-check">✔</span>
      </div>

      {selectedAddress ? (
        <div className="address-details">
          <strong>{selectedAddress.tag}</strong>{" "}
          <span className="address">{`${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state} - ${selectedAddress.zip}`}</span>
        </div>
      ) : (
        <p>Loading address...</p>
      )}

      {/* Button Row */}
      <div className="button-row">
        {/* <Link to="/address_book">
          {" "}
          <button className="add-address-btn" onClick={handleAddAddress}>
            + Add New Address
          </button>
        </Link> */}

        <button type="button" className="change-btn" onClick={() => setShowOptions(!showOptions)}>
          {showOptions ? "CANCEL" : "CHANGE"}
        </button>

      </div>

      {showOptions && (
        <div className="address-options">
          {displayAddresses.map((addr) => (
            <div
              key={addr._id}
              className={`faq-address-item ${
                addr._id === selectedAddress?._id ? "selected" : ""
              }`}
              onClick={() => handleSelect(addr)}
            >
              <strong>{addr.tag}</strong>{" "}
              <span className="address">{`${addr.street}, ${addr.city}, ${addr.state} - ${addr.zip}`}</span>
            </div>
          ))}

          {addresses.length > 3 && (
            <p className="more-address-msg">
              Showing only 3 of {addresses.length} addresses.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default DeliveryAddress
