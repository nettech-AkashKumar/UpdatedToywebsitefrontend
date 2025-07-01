import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./Orders.css";
import { Modal, Button, Form, ModalBody } from "react-bootstrap"
import BASE_URL from "../../../Config/config.js"
import axios from "axios"


const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [editOrder, setEditOrder] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [selectedOrderId, setSelectedOrderId] = useState(null)
  const [estimatedDate, setEstimatedDate] = useState("")
  const [carrier, setCarrier] = useState("")
  const [selectedOrder, setSelectedOrder] = useState(null);


  //  state for view product order
  const [viewOrderProducts, setViewOrderProducts] = useState([])
  const [showViewModal, setShowViewModal] = useState(false)
  const [trackingId, setTrackingId] = useState([])
  const [showTrackingInput, setShowTrackingInput] = useState([])


  const [filter, setFilter] = useState("All");


  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);


  // function to handle view order
  const handleView = (order) => {
    setViewOrderProducts(order.cartItems);
    setSelectedOrder(order)  // store full order
    setSelectedOrderId(order._id)
    setShowViewModal(true);
  }


  // orders
  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/all-orders`);
        console.log('Fetch Order11', res.data)
        setOrders(res.data.orders)
      } catch (error) {
        toast.error("Error fetching orders", {
          position: 'top-center',
          autoClose: 3000
        })
      }
    };
    fetchAllOrders();
  }, []);

  const handleEdit = (order) => {
    setEditOrder(order);
    // show tracking inputs if dispatch
    const isDispatched = order.status === "Dispatch";
    setShowTrackingInput(isDispatched)
    setTrackingId(order.trackingId || "");
    // prefill carrier and estimated date if available
    if (isDispatched && order.tracking) {
      setCarrier(order.tracking.carrier || "");
      setEstimatedDate(order.tracking.estimatedDate || "")
    } else {
      setCarrier("")
      setEstimatedDate("")
    }
    setShowModal(true)
  };

  const handleSaveChanges = async () => {
    try {
      const payload = { status: editOrder.status }
      if (editOrder.status === "Dispatch") {
        if (trackingId) payload.trackingId = trackingId;
        payload.carrier = carrier;
        payload.estimatedDate = estimatedDate;
      }
      const res = await axios.put(`${BASE_URL}/api/update-order/${editOrder._id}`, payload)
      setOrders((prevOrders) => prevOrders.map((order) => order._id === editOrder._id ? { ...order, ...editOrder, trackingId, tracking: { ...order.tracking, carrier, estimatedDate, currentStatus: "Dispatch" } } : order));
      setShowModal(false)
      setEstimatedDate("")
    } catch (error) {
      toast.error("Failed to update  order", {
        position: 'top-center'
      })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditOrder({
      ...editOrder,
      [name]: value,
    })
    // this for dispatch
    if (name === "status") {
      setShowTrackingInput(value === "Dispatch")
    }
    if (name === "trackingId") {
      setTrackingId(value)
    }
  }

  const statusBadge = (status) => {
    switch (status) {
      case "Pending":
        return (
          <span
            className="badge text-warning text-dark bg-transparent"
            style={{ backgroundColor: "#ff8272" }}
          >
            Pending
          </span>
        );
      case "Dispatch":
        return (
          <span className="badge text-primary bg-transparent"
            style={{ backgroundColor: "#ff8272" }}
          >
            Dispatch
          </span>
        );
      case "Delivered":
        return (
          <span
            className="badge text-success bg-transparent"
            style={{ backgroundColor: "#ff8272" }}
          >
            {status}
          </span>
        );
    }
  }

  return (
    <>
      <div className="order-table-content my-3 mx-3 py-3 px-3" style={{ backgroundColor: "white", }}>
        <h2
          className="customer-orders-txt"
          style={{ fontSize: "25px", fontFamily: '"Poppins", sans-serif', color: "#3D3D3D" }}
        >
          Customers Orders
        </h2>

        <div className="orders-button-group">
          {["All", "Dispatch", "Pending", "Delivered"].map((btn) => (
            <button
              key={btn}
              className={`btn ${filter === btn ? "active" : ""}`}
              onClick={() => setFilter(btn)}
            >
              {btn}
            </button>
          ))}
        </div>

        <div className="order-table-section">
          <table
            className="order-table"
            style={{
              width: "100%",
              height: "100vh",
              borderCollapse: "collapse",
              textAlign: "center",
            }}
          >
            <thead style={{ fontFamily: '"Poppins", sans-serif' }}>
              <tr className="order-tableheader">
                <th>Order Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
                {filter === "Dispatch" && <th>Tracking Id</th>}
                <th>View</th>
                {filter === "All" && <th>Action</th>}
              </tr>
            </thead>
            <tbody className="table-body-container">
              {filteredOrders.map((order, index) => {
                const fullName = order.name;
                const fullAddress = `${order.address}`
                return (
                  <tr key={index + 1}
                    className={
                      selectedOrderId === order._id ? "table-primary" : ""
                    }
                    onClick={() => setSelectedOrderId(order._id)}
                    style={{ cursor: 'pointer', backgroundColor: 'transparent !important' }}
                  >
                    <td>{order._id.slice(0, 10).toUpperCase()}</td>
                    <td>{fullName}</td>
                    <td>{fullAddress}</td>
                    <td>{new Intl.DateTimeFormat('en-GB', {
                      day: '2-digit', month: 'long', year: 'numeric'
                    }).format(new Date(order.createdAt))}</td>
                    <td>₹{order.amount_Total}</td>
                    <td>{statusBadge(order.status)}</td>
                    {filter === "Dispatch" && (
                      <td>{order.trackingId}</td>
                    )}
                    <td>
                      <button className="order-view-btn" onClick={() => handleView(order)}>View</button>
                    </td>
                    {filter === "All" && (

                      <td>
                        <button
                          className="btn btn-sm  me-2"
                          style={{ fontSize: "22px", color: "#FF8272" }}
                          onClick={() => handleEdit(order)}
                        >
                          <FaEdit />
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>
        {/* modal for edit */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          centered
          backdrop="static"
          dialogClassName="custom-modal"
        >
          <div
            style={{
              background: 'white',
              borderRadius: "12px",
              padding: "30px",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
              width: "100%",
              maxWidth: "300px",
              margin: "0 auto"
            }}
          >
            <h5 className="text-center mb-4" style={{ fontWeight: "bold" }}>Edit Orders</h5>
            <Form>
              <Form.Group className="" style={{ marginBottom: "30px" }}>
                <Form.Label>
                  <strong>Order Status:</strong>
                </Form.Label>
                <Form.Select
                  name="status"
                  value={editOrder?.status}
                  onChange={(e) => {
                    handleChange(e); setShowTrackingInput(e.target.value === "Dispatch");
                  }}
                >
                  <option>Pending</option>
                  <option>Dispatch</option>
                  <option>Delivered</option>
                </Form.Select>
              </Form.Group>
              {/* conditional tracking ID Input */}
              {showTrackingInput && (
                <>
                  <Form.Group style={{ marginBottom: "30px" }}>
                    <Form.Label>
                      <strong>Tracking ID</strong>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter tracking ID" name="trackingId" value={trackingId} maxLength="10" onChange={handleChange}>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group style={{ marginBottom: "30px" }}>
                    <Form.Label>
                      <strong>Carrier Name</strong>
                    </Form.Label>
                    <Form.Control type="text" name="carrier" value={carrier} onChange={(e) => setCarrier(e.target.value)}>

                    </Form.Control>
                  </Form.Group>
                  <Form.Group style={{ marginBottom: "30px" }}>
                    <Form.Label>
                      <strong>Estimated Delivery Date</strong>
                    </Form.Label>
                    <Form.Control type="date" name="estimatedDate" value={estimatedDate} onChange={(e) => setEstimatedDate(e.target.value)}>

                    </Form.Control>
                  </Form.Group>
                </>
              )}
            </Form>
            <div
              className="d-flex justify-content-between mt-4" style={{ marginTop: "20px" }}>
              <Button style={{ background: '#ff8272', border: 'none' }} onClick={handleSaveChanges}>Update</Button>
              <Button style={{ background: '#abacac', border: 'none', color: '#000', fontWeight: 400 }} onClick={() => setShowModal(false)}>Cancel</Button>
            </div>
          </div>
        </Modal>

       
      {/* view order modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)} size="lg" centered>
       <Modal.Header>
        <Modal.Title>Invoice / Order Details</Modal.Title>
       </Modal.Header>
       <Modal.Body style={{backgroundColor:'white'}}>
        {selectedOrder?.cartItems && selectedOrder.cartItems.length > 0 ? (
  <>
    <div style={{ marginBottom: '1.5rem', fontFamily:'"Poppins", sans-serif' }}>
      <h5>Customer Information</h5>
      <p><strong>Name:</strong> {selectedOrder.name}</p>
      <p><strong>Address:</strong> {selectedOrder.address}</p>
      <p><strong>Date:</strong> {new Intl.DateTimeFormat('en-GB', {
        day: '2-digit', month: 'long', year: 'numeric'
      }).format(new Date(selectedOrder.createdAt))}</p>
      <p><strong>Status:</strong> {selectedOrder.status}</p>

      {selectedOrder.status === "Dispatch" && (
        <>
          <p><strong>Tracking ID:</strong> {selectedOrder.trackingId}</p>
          <p><strong>Carrier:</strong> {selectedOrder.tracking?.carrier}</p>
          <p><strong>Estimated Delivery:</strong> {selectedOrder.tracking?.estimatedDate}</p>
        </>
      )}
    </div>

    <h5>Product Details</h5>
    <table className="table table-bordered" style={{fontFamily:'"Poppins", sans-serif'}}>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Unit Price</th>
          <th>Qty</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {selectedOrder.cartItems.map((item, index) => (
          <tr key={index}>
            <td>
              <img
                src={item?.image?.[0]?.url ? `${BASE_URL}${item.image[0].url}` : "https://via.placeholder.com/60"}
                alt={item.title}
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
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
      <h5>
        Total Amount: ₹{selectedOrder.cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0)}
      </h5>
    </div>
  </>
) : (
  <p>No products found for this order.</p>
)}

       </Modal.Body>
       <Modal.Footer style={{backgroundColor:'white'}}>
        <button style={{backgroundColor:'#ff8272', color:'white'}} onClick={() => setShowViewModal(false)}>Close</button>
       </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};

export default Orders;
