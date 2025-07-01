import React, { useEffect, useState } from 'react';
import './Sales.css'
import BASE_URL from "../../../Config/config.js"
import axios from 'axios'
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
       const res = await axios.get(`${BASE_URL}/api/transactions/all`)
       setSales(res.data);
      }catch(error) {
        toast.error('Fetch error', {
          position:'top-center',
          autoClose:3000
        })
      }
    }
    fetchSales();
  },[])

  const aggregatedSales = sales.reduce((acc, transaction) => {
    transaction.products.forEach((product) => {
      if (acc[product.title]) {
        acc[product.title].quantity += product.quantity;
        acc[product.title].revenue += product.quantity * product.new_price
      } else {
        acc[product.title] = {
          title: product.title,
          new_price: product.new_price,
          quantity: product.quantity,
          revenue: product.quantity * product.new_price,
          category: product.category,
          stock: product.stock
        }
      }
    });
    return acc;
  },{});

  return (
    <div>
       <div className='sales-container  my-3 mx-3 py-3 px-3' style={{backgroundColor:'white'}}>
         <div className='text-center pb-5 pt-3'>
            <h1 className='total-sales-txt-admin' style={{fontSize: "25px", fontFamily: '"Poppins", sans-serif', color:"#3D3D3D" }}>Total Sales</h1>
         </div>

          <div className='sales-table'>
            <table className=' w-100 text-center' style={{width:"100%", height:"100vh",
                 textAlign:"center"
            }}>
               <thead>
                <tr className='sales-head'>
                    <th>S. no</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Unit Price</th>
                    <th>Total unit Sold</th>
                    <th>Total Revenue</th>
                     
                </tr>
               </thead>
                 <tbody>
                  {Object.values(aggregatedSales).map((product, index) => (
                    <tr key={index.id} className='sales-data'>
                        <td>{index + 1}</td>
                        <td>{product.title}</td>
                        <td>{product.category}</td>
                        <td>{product.new_price}</td>
                        <td>{product.quantity}</td>
                        <td>{product.revenue}</td>
                    </tr>
                  ))}
                 </tbody>
            </table>
          </div>

       </div>
    </div>
  );
}

export default Sales;
