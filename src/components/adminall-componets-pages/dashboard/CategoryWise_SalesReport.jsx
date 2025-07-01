import React, { useEffect, useState } from "react";
import "./CategoryWise_SalesReport.css";
import axios from "axios";
import BASE_URL from "../../../Config/config.js";

const CategoryWise_SalesReport = () => {
const [categories, setCategories] = useState([])

const fetchSalesData = async() => {
  try {
   const res = await axios.get(`${BASE_URL}/api/transactions/all`)
   const transactions = res.data;
   console.log('resdata line 13', transactions)
  //  aggregate sales data by category
  const aggregateData = transactions.reduce((acc, transaction) => {
    transaction.products.forEach((product) => {
      const {category, subcategory, quantity, new_price} = product;
      const SubCategory = subcategory;
      const key = `${category}-${SubCategory}`
      if(!acc[key]) {
        acc[key] = {category, subcategory: SubCategory, quantity:0, orders:0, revenue:0}
      }
      acc[key].quantity += quantity;
      acc[key].orders += 1;
      acc[key].revenue += quantity * new_price;
    });
    return acc;
  }, {});

  const dataArray = Object.values(aggregateData)
  setCategories(dataArray)
  console.log('responsereportSales', dataArray)
  }catch(error) {
    console.error('Error fetching sales data', error)
  }
}

useEffect(() => {
  fetchSalesData();
},[])


  return (
    <div>
      <div
        className="categorieswise-salesreport-container p-3"
        style={{ backgroundColor: "white", borderRadius: "5px", }}
      >
        <h1 className="category-wise-sale-report-admin-txt" style={{ fontSize: "25px", fontFamily: 'Poppins", sans-serif' }}>
          Category-wise Sale Report
        </h1>
        <div className="categoreswise-sales-report-table ">
          <table className="w-100">
            <thead>
              <tr className="categoreswise-heading">
                <th>Category</th>
                <th>SubCategory</th>
                <th>Total Sales</th>
                <th>Orders</th>
                <th>Total Income</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(categories) && categories.map((item, index) => (
                <tr key={index} className="categoreswise-data">
                  <td>{item.category}</td>
                  <td>{item.subcategory}</td>
                  <td>{item.quantity}</td>
                  <td>{item.orders}</td>
                  <td>{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryWise_SalesReport;
