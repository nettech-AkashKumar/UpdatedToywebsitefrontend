import React, { useState } from "react";
import './Order_Tracking.css'
import PageLayout from "../../../layouts/PageLayout";
import Herosection_Userprofile from "../herosection_userprofile/Herosection_Userprofile";
import Sidebar_userprofile from "../../sidebar_userprofile/Sidebar_userprofile";
import { IoIosCheckmark } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import Mobileview_Ordertracking from "./Mobileview_Ordertracking";
import axios from "axios";
import BASE_URL from "../../../Config/config.js";
import { Link } from "react-router";

const Order_Tracking = () => {
  const [orderId, setOrderId] = useState("")
  const [order, setOrder] = useState(null)
  const [error, setError] = useState("")

  const steps = ["Order Placed", "Processing", "Shipped", "Delivered"];


  // handle search
  const handleSearch = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/order-details/${orderId}`)
      setOrder(res.data.order)
      console.log('order2322', res.data.order)
      setError("")
    } catch (error) {
      setError("Order not found")
      setOrder(null)
    }
  }

  const getCurrentStep = (status) => {
    return steps.indexOf(status)
  }
  return (
    <div>
      <PageLayout>
        <div>
          <Herosection_Userprofile
            heading="Your Profile "
            subheading=" Order Tracking"
          />

          <div className="ordertracking-container" style={{ display: "flex", gap: "40px" }}>
            <Sidebar_userprofile />
            <div className="w-100" style={{ overflow: "auto" }}>
              <div className="mobileview-ordertarcking d-none">
                <Mobileview_Ordertracking />
              </div>
              <div className="d-flex gap-3 align-items-center mb-4">
                <input
                  type="text"
                  placeholder="Enter Order ID"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  style={{ padding: "10px", width: "300px", border: "1px solid #ccc", borderRadius: "5px" }}
                />
                <button onClick={handleSearch} style={{ padding: "10px 20px", backgroundColor: "#FF8272", color: "white", border: "none", borderRadius: "5px" }}>Track</button>
                {error && <span style={{ color: "red" }}>{error}</span>}
              </div>
              <div className="ordertracking-div">
                <div className="d-flex justify-content-between align-items-center pb-4">
                  <span style={{ fontFamily: '"Poppins", sans-serif' }}>
                    Order Placed
                  </span>
                  <span style={{ fontFamily: '"Poppins", sans-serif' }}>
                    Processing
                  </span>
                  <span style={{ fontFamily: '"Poppins", sans-serif' }}>
                    Shipped
                  </span>
                  <span style={{ fontFamily: '"Poppins", sans-serif' }}>
                    Delivered{" "}
                  </span>
                </div>

                <div
                  style={{
                    backgroundColor: "#C6CDD5",
                    width: "100%",
                    height: "5px",
                  }}
                >
                  <div className="d-flex align-items-center w-100 h-full">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundColor: "#19A971",
                        // width: "500px",
                        width: `${((getCurrentStep(order?.status || "") + 1) / steps.length) * 100}%`,
                        transition: "width 0.5s ease",
                        borderBottomLeftRadius: "50px",
                        borderTopLeftRadius: "50px",
                      }}
                    >
                      <IoIosCheckmark
                        style={{
                          color: "white",
                          backgroundColor: "#19A971",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                        }}
                      />
                      <IoIosCheckmark
                        style={{
                          color: "white",
                          backgroundColor: "#19A971",
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        backgroundColor: "#19A971",
                        width: "480px",
                      }}
                    >
                      <IoIosCheckmark
                        style={{
                          backgroundColor: "#19A971",
                          color: "white",

                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        backgroundColor: "#C6CDD5",
                        width: "500px",
                        borderBottomRightRadius: "50px",
                        borderTopRightRadius: "50px",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#C6CDD5",

                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                        }}
                      ></div>
                    </div>
                    {/* <div style={{backgroundColor:"green",  width:"250px"}}></div>
                     <div style={{ width:"250px", backgroundColor:"green" }}><IoIosCheckmark style={{backgroundColor:"green",color:"white" ,backgroundColor:"#4ba44b", width:"25px", height:"25px", borderRadius:"50%"}} /></div>
                     <div style={{color:"white" ,backgroundColor:"grey", width:"25px", height:"25px", borderRadius:"50%"}}></div> */}
                  </div>
                </div>

                <div
                  style={{
                    width: "980px",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "center",
                    padding: "12px 0",
                    fontSize: "25px",
                    color: "#306CFE",
                  }}
                >
                  <TbTruckDelivery />
                </div>
                <div className="d-flex justify-content-end align-items-center">
                  <span
                    style={{
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                      padding: "8px 12px",
                      borderRadius: "5px",
                      color: "#2D2D2D",
                      fontWeight: "400",
                      fontFamily: '"Roboto", sans-serif',
                    }}
                  >
                    Stay Updated at each steps
                  </span>
                </div>

                <div className="d-flex justify-content-between  my-5">
                  {order && (
                    <>
                      <div style={{ width: "424px" }}>
                        <ul
                          style={{
                            fontFamily: '"Poppins", sans-serif',
                            padding: "0",
                          }}
                        >
                          <li
                            className="pb-3"
                            style={{
                              fontFamily: '"Poppins", sans-serif',
                              fontWeight: "500",
                              fontSize: "18px",
                            }}
                          >
                            <strong>
                              📦 Shipping Address and Carrier Information
                            </strong>
                          </li>
                          <li className="pb-2">
                            <span style={{ color: "#8C8C8C" }}>Carrier:</span>
                            <span>{order.tracking?.carrier}</span>
                          </li>
                          <li className="pb-2">
                            <span style={{ color: "#8C8C8C" }}>
                              Shipping Address:
                            </span>
                            <span>{order?.address}</span>
                          </li>
                          <li className="pb-2">
                            <span style={{ color: "#8C8C8C" }}>
                              Tracking Number:
                            </span>
                            <span>{order.trackingId}</span>
                          </li>
                        </ul>
                      </div>

                      <div style={{ width: "360px" }}>
                        <ul
                          style={{
                            fontFamily: '"Poppins", sans-serif',
                            padding: "0",
                          }}
                        >
                          <li
                            className="pb-3"
                            style={{
                              fontFamily: '"Poppins", sans-serif',
                              fontWeight: "500",
                              fontSize: "18px",
                            }}
                          >
                            <strong>Estimated Delivery Date</strong>
                          </li>
                          <li className="pb-2">
                            <span style={{ color: "#8C8C8C" }}>
                              Estimated Date:{" "}
                            </span>
                            <span>{order.tracking?.estimatedDate}</span>
                          </li>
                          <li className="pb-2">
                            <span style={{ color: "#8C8C8C" }}>
                              Shipping Address:
                            </span>
                            <span> {order?.address}</span>
                          </li>
                          <li className="pb-2">
                            <span style={{ color: "#8C8C8C" }}>
                              Tracking Number:
                            </span>
                            <span>{order?.trackingId}</span>
                          </li>
                        </ul>
                      </div>

                      <div style={{ width: "320px" }}>
                        <ul
                          style={{
                            fontFamily: '"Poppins", sans-serif',
                            padding: "0",
                          }}
                        >
                          <li
                            className="pb-3"
                            style={{
                              fontFamily: '"Poppins", sans-serif',
                              fontWeight: "500",
                              fontSize: "18px",
                            }}
                          >
                            <strong>Tracking Updates</strong>
                          </li>
                          {order.history?.map((entry, index) => (
                            <li key={index} className="pb-2">
                              <span style={{ color: "#8C8C8C" }}>Date: {entry.date}</span>
                              <span>{entry.status}</span>
                            </li>
                          ))}
                          <li
                            className="d-flex align-items-center gap-2 pb-2"
                            style={{ color: "#FF8272" }}
                          >
                            <span style={{}}>
                              <CiCircleInfo />
                            </span>
                            <span> Your package is out for delivery.</span>
                          </li>
                          <li className="pb-2 ">
                            {" "}
                            <button
                              className="track-orderbtn"
                              style={{
                                width: "100%",
                                backgroundColor: "#FF8272",
                                color: "white",
                                padding: "8px 10px",
                                borderRadius: "5px",
                              }}
                            >
                              Track Order
                            </button>
                          </li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="ordertracking-border" style={{ borderTop: "1px solid #C6CDD5" }}>
            <div
              className="bottom-ordertarcking-content"
              style={{
                display: "flex",
                justifyContent: "space-between",
                // gap: "70px",
                padding: "60px 0",
              }}
            >
              <div className="mapconatcus-container" style={{ width: "645px" }}>
                <strong
                  className="d-flex align-items-center gap-2"
                  style={{
                    fontSize: "20px",
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: "500",
                  }}
                >
                  <IoMdCall />
                  Contact for Issues
                </strong>
                <p
                  style={{
                    color: "#8C8C8C",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  If you have any questions or concerns about your order, please
                  contact our support team at{" "}
                  <span style={{ color: "#FF8272" }}>
                    {" "}
                    support@paloozashophelp.com
                  </span>{" "}
                  or call us at +1
                  <span style={{ fontWeight: "bold" }}>-800-555-1234.</span> Our
                  team is available 24/7 to assist you with any issues you may
                  have. We are committed to delivering the best customer service
                  and ensuring your satisfaction with our products and services.
                </p>
                <div className="d-flex gap-4">
                  <div
                    style={{
                      backgroundColor: "#FFE7E0",
                      width: "50px",
                      height: "50px",
                      borderRadius: "5px",
                    }}
                  >
                    <MdSupportAgent
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        color: "#FF8272",
                      }}
                    />
                  </div>
                  <div>
                    <strong
                      style={{
                        fontSize: "20px",
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: "500",
                      }}
                    >
                      24/7 Customer Support
                    </strong>
                    <p
                      style={{
                        color: "#8C8C8C",
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: "15px",
                      }}
                    >
                      Our dedicated support team is here to help you around the
                      clock.
                    </p>
                  </div>
                </div>
                <Link style={{textDecoration:'none'}} to='/support_help'>
                <button
                  className="contact-usbtn-ot"
                  style={{
                    backgroundColor: "#FF8272",
                    color: "white",
                    width: "100%",
                    padding: "10px 20px",
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Contact Us
                </button>
                </Link>
              </div>
              <div>
                <iframe
                  className="mapifrane-container"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4192.038583228666!2d77.3822129!3d28.5923125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef91f5153683%3A0x5a196bf40461160d!2siThums%2073%2C%20Noida!5e1!3m2!1sen!2sin!4v1748350042204!5m2!1sen!2sin"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{
                    width: "716px",
                    height: "341px",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Order_Tracking;



















































