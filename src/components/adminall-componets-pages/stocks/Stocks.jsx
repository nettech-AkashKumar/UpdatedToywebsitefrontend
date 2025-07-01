import React, { useEffect, useState } from "react";
import "./Stocks.css";
import { FaEdit } from "react-icons/fa";
import axios from 'axios'
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BASE_URL from "../../../Config/config.js"
import {Dialog, DialogTitle,DialogContent,DialogActions} from "@mui/material"


const Stocks = () => {
  const [datalist, setDataList] = useState([])
  const [stocks, setStocks] = useState("")
  const [open, setOpen] = useState(false)
  const [currentStockId, setCurrentStockId] = useState(null)

  const handleOpen = (id, currentStock) => {
    setCurrentStockId(id);
    setStocks(currentStock);
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false);
    setStocks("");
  }

  //fetch stock data
  const getFetchData = async () => {
    const data = await axios.get(`${BASE_URL}/api/products`)
    if(data.data.success) {
      setDataList(data.data.data.reverse());  //reverse here use for last stock wiil be displayed first
    }
  };

  useEffect(() => {
    getFetchData();
  },[]);

  //update stock function, handle stock update
  const handleUpdateStocks = async () => {
    try {
      const updatedData = {
        _id: currentStockId, //use the ID we stored in state
        stock: stocks
      };
      const response = await axios.put(`${BASE_URL}/api/products/update`, updatedData);
      if(response.data.success) {
        const updatedStock = datalist.map((stock) => (stock._id === currentStockId ? {...stock, stock: response.data.data.stock} : stock));
        setDataList(updatedStock);
        setOpen(false)
        toast.success("Stock updated successfully!", {
          position:'top-center',
          autoClose:1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    }catch(error) {
      toast.error("Failed to update stock!", {
        position:'top-center',
        autoClose:1000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable: true
      })
    }
  }
    
  return (
    <div>
      <div
        className="stocks-container my-3 mx-3 py-3 px-3"
        style={{ backgroundColor: "white" }}
      >
        <div className="stocks-headline">
          <h1>Stocks Management</h1>
        </div>

        <div className="table-conatainer">
          <table>
            <thead>
              <tr className="table-header-stocks-management">
                <th>S.no</th>
                <th>Product Name</th>
                <th>In Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
                 <tbody>
              {datalist.map((stock, index)=> (
              <tr key={stock._id} className="table-data">
                <td>{index + 1}</td>
                <td>{stock.title}</td>
                <td>{stock.stock}</td>
                <td>
                  <button
                    className="btn btn-sm  me-2"
                    style={{ fontSize:"22px", color: "#FF8272" }}
                    onClick={() => handleOpen(stock._id, stock.stock)}
                  >
                    <FaEdit />
                  </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Add stock modal */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add New Stock</DialogTitle>
          <DialogContent sx={{minWidth:300}} className="stock-input">
            <input type="number" placeholder="Enter new Stocks" style={{width:'100%', padding:'8px', fontSize:'16px',  border: '1px solid #ff8272',}} value={stocks} onChange={(e) => setStocks(e.target.value)}/>
          </DialogContent>
          <DialogActions>
            <div className="edit-mdoal-buttons" style={{marginTop:'50px', display:'flex', justifyContent:'space-between', width:"100%", padding:'0px 20px'}}>
              <button style={{backgroundColor:"#ff8272", color:'white', padding:'8px 10px',  borderRadius:'5px'}} onClick={handleUpdateStocks}>Add</button>
              <button className="edit-modal-cancel-btn" onClick={handleClose}>Cancel</button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Stocks;
