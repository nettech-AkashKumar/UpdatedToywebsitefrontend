import React, { useEffect, useState } from "react";
import "./OrderHistory.css";
import PageLayout from "../../../layouts/PageLayout";
import Herosection_Userprofile from "../herosection_userprofile/Herosection_Userprofile";
import Sidebar_userprofile from "../../sidebar_userprofile/Sidebar_userprofile";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../Config/config.js";
import { jwtDecode } from "jwt-decode";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token")?.trim();
      console.log("token from order history", token);
      let email = null;
      if (token) {
        try {
          const decoded = jwtDecode(token);
          email = decoded.email;
        } catch (error) {
          console.error("Error decoding token", error);
        }
      }
      try {
        const response = await axios.get(
          `${BASE_URL}/api/orders?email=${email}`
        );
        setOrders(response.data.orders);
        console.log("Fetched orders", response.data.orders);
      } catch (error) {
        toast.error("Error while fetching orders", error);
      }
    };
    fetchOrders();
  }, []);

  const handleViewOrder = (order) => {
    setSelectedOrder(order); //to fetch order
    setShowViewModal(true);
  };

  return (
    <div>
      <PageLayout>
        <div>
          <Herosection_Userprofile
            heading="Your Profile "
            subheading=" Order History"
          />
          <div
            className="orderhistory-container"
            style={{ display: "flex", gap: "40px" }}
          >
            <Sidebar_userprofile />
            <div
              className=""
              style={{ width: "100%", height: "450px", overflowY: "auto" }}
            >
              <div className="orderdetaildiv">
                <table className="ordertable">
                  <thead style={{ backgroundColor: "#F3F3FD" }}>
                    <tr>
                      <th>S.no</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Order no.</th>
                      <th>Order Total</th>
                      <th>Item</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {console.log("orders", orders)}
                    {Array.isArray(orders) &&
                      orders.map((order, index) => (
                        <tr key={order._id}>
                          <td>{index + 1}</td>
                          <td>
                            {new Intl.DateTimeFormat("en-GB", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(order.createdAt))}
                          </td>
                          <td>
                            <span
                              className={`status-badge actionstatusprocess ${
                                order.status === "Pending"
                                  ? " bg-orange-100 text-orange-500"
                                  : order.status === "Processing"
                                  ? "text-[#5267EF] bg-[#EFEFFF]"
                                  : order.status === "Delivered"
                                  ? "bg-green-100 text-green-500"
                                  : "bg-pink-100 text-pink-500"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td>{order.trackingId}</td>
                          <td>₹{order.amount_Total}</td>
                          <td>{order.cartItems.length}</td>
                          <td className="actionview">
                            <button
                              onClick={() => handleViewOrder(order)}
                              className="text-white px-2 p-1 text-xs"
                              style={{
                                textDecoration: "none !important",
                                background: "#ff8272",
                                borderRadius:'5px'
                              }}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                {/* show order for customer */}
                {showViewModal && selectedOrder && (
                  <div
                    className="modal-backdrop"
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0,0,0,0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 9999,
                    }}
                  >
                    <div
                      style={{
                        background: "white",
                        padding: "30px",
                        borderRadius: "10px",
                        maxWidth: "800px",
                        width: "90%",
                        maxHeight: "90vh",
                        overflowY: "auto",
                      }}
                    >
                      <h4 className="mb-3">Order Details</h4>

                      <p>
                        <strong>Tracking ID:</strong> {selectedOrder.trackingId}
                      </p>
                      <p>
                        <strong>Status:</strong> {selectedOrder.status}
                      </p>
                      <p>
                        <strong>Date:</strong>{" "}
                        {new Date(selectedOrder.createdAt).toLocaleDateString()}
                      </p>

                      <table className="table table-bordered mt-3">
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedOrder.cartItems.map((item, i) => (
                            <tr key={i}>
                              <td>
                                <img
                                  src={item?.image?.[0]?.url ? `${BASE_URL}${item.image[0].url}` : "https://via.placeholder.com/60"}
                                  alt={item.title}
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    objectFit: "cover",
                                  }}
                                />
                              </td>
                              <td>{item.title}</td>
                              <td>₹{item.new_price}</td>
                              <td>{item.quantity}</td>
                              <td>₹{item.new_price * item.quantity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      <div className="text-end mt-3">
                        <strong>
                          Total: ₹
                          {selectedOrder.cartItems.reduce(
                            (acc, item) => acc + item.new_price * item.quantity,
                            0
                          )}
                        </strong>
                      </div>

                      <div className="text-end mt-4">
                        <button
                          style={{backgroundColor:'#ff8272', color:'white', padding:'5px', borderRadius:'5px'}}
                          onClick={() => setShowViewModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default OrderHistory;
