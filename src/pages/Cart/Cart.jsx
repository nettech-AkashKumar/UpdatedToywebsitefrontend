import React, { useEffect, useState } from "react";
import "../Cart/Cart.css";
import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import CartTshirt from "../../assets/image/carttshirt.png"
import EnterpinModal from "../../components/CartComponent/EnterpinModal";
import PriceSummarycart from "../../components/CartComponent/PriceSummarycart";
import { CartState } from "../../context/Context.jsx";
import axios from "axios";
import BASE_URL from "../../Config/config.js";
import Shopelogo from "../../assets/image/shop1.png"
import { toast } from "react-toastify";


const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  
  const handleOpenModal = () => {
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }

  const { state, dispatch } = CartState();
  console.log("Cart state", state.cart)

  // handle decrement for decrease quantity of product
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      const newQty = item.quantity - 1;
      updateQuantity(item, newQty)
    }
  }

  // handle increment for increase quantity of product
  const handleIncrement = (item) => {
    const newQty = item.quantity + 1;
    updateQuantity(item, newQty)
  }

  const updateQuantity = (item, newQty) => {
    if (!item || typeof item !== "object" || !item._id) {
      toast.error("Invalid item in update quantity");
      console.error("Invalid item object:", item);
      return;
    }
    dispatch({
      type: "CHANGE_CART_QUANTITY",
      payload: {
        _id: item._id,
        quantity: newQty,
      }
    })
    axios.put(`${BASE_URL}/api/cart/update-qty`, {
      _id: item._id,
      qty: newQty,
      userId: item.userId
    })
     .then((response) => {
      console.log("Quantity updated", response.data);
      localStorage.setItem("cart", JSON.stringify(response.data.updatedCart));
    })
    .catch((error) => {
      console.error("Error updating quantity", error);
    });
  }


  return (
    <div className="">
      <PageLayout>
        <div className="d-flex gap-5 cartcontainer my-10">
          <div className="delivypincartdiv">
            {/* pincode div */}
            <div className="pindeliv">
              <p style={{ color: '#3D3D3D', fontFamily: "Poppins, sans-serif;", fontWeight: 400, fontSize: '20px', lineHeight: '24px', marginBottom: '0px' }}>Deliver To:</p>
              <p style={{ backgroundColor: '#FF8272', borderRadius: '5px', fontFamily: "Poppins, sans-serif;", marginBottom: '0px' }}>
                <button className="enterpincode-btn" onClick={handleOpenModal} type="button" style={{ padding: '10px 20px 10px 20px', fontSize: '20px', lineHeight: '24px', letterSpacing: '0', color: '#FFFFFF', textTransform: 'capitalize', }}>Enter Pin Code</button>
                {showModal && <EnterpinModal onClose={handleCloseModal} />}
              </p>
            </div>
            {/* cart container */}
            <div className="cartdivcontainer my-8 p-4">
              {console.log("stateq", state.cart)}
              {state.cart.length > 0 ? (
                state.cart.map((item) => (
                  console.log("iteqam", item.image), (
                    <div>
                      <div className="cart-item">
                        <div className="" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <div className="productimgdiv">
                            <img src={Array.isArray(item.image) ? `${BASE_URL}${item.image[0]?.url}` : item.image_url} alt="cartimage" className="product-image" />
                          </div>
                        </div>
                        <div className="items-details">
                          <h3 className="brand-name">{item.brand}</h3>
                          <div className="product-name">{item.title}</div>
                          <p className="seller">Sold by: Puma Sport India Pvt. Ltd.</p>
                          <p className="size">Size: {item.size}</p>
                          <div style={{ display: 'flex', gap: '30px' }}>
                            <p style={{ marginBottom: 0 }} className="deliverydate">Delivered by <span className="date">May 19</span></p>
                            <p style={{ marginBottom: 0 }} className="discountitem">{item.discount}</p>
                          </div>
                          <div className="price-section">
                        <span className="current-price">Rs.{item.new_price}</span>
                        <span className="original-price">Rs. {item.old_price}</span>
                      </div>
                        </div>
                      </div>
                      <div className="quantity">
                        <div>
                          <button className="decre" onClick={() => handleDecrement(item)}>-</button>
                          <span className="count">{item.quantity}</span>
                          <button className="incre" onClick={() => handleIncrement(item)}>+</button>
                        </div>
                        <div className="actions">
                          <button onClick={() => dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: {
                              _id: item._id,
                              userId: item.userId,
                              productId: item.productId
                            }
                          })} className="remove-btn">Remove</button>
                        </div>
                      </div>
                    </div>
                  )
                ))
              ) : (
                <div
                  className="emptycartcontainer d-flex flex-column align-items-center justify-content-center"
                  style={{ width: "100%", marginBottom: '30px' }}
                >
                  <p>
                    <img className="img-fluid" src={Shopelogo} alt="" />
                  </p>
                  <p className="" style={{ fontWeight: "700" }}>
                    Your cart is empty !!
                  </p>
                  <p>Add items to it now.</p>
                  <button className="shopnowbtn" style={{ background: '#ff8272' }}>
                    <Link to="/" style={{ color: "white", textDecoration: 'none' }}>
                      Shop Now
                    </Link>
                  </button>
                </div>
              )}
              <Link to='/deliverydetails'><button className="place-order">Place Order</button></Link>
            </div>
          </div>

          {/* Price summary static layout */}
          <PriceSummarycart />
        </div>
      </PageLayout>
    </div>
  );
};

export default Cart;









