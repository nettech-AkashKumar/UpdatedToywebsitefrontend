import React, { useEffect, useState, useMemo } from 'react';
import './Dashbaord.css'
import DashboardWeather from './DashboardWeather'
import Dashboard_AnalyticsReport from './Dashboard_AnalyticsReport'
import Calendar from "react-calendar";
import CategoryWise_SalesReport from './CategoryWise_SalesReport';
import MyAccount from './MyAccount';
import { useSelector } from "react-redux";
import BASE_URL from '../../../Config/config.js';
import axios from 'axios';
import { monthNames } from './dateUtils.js';


const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);  //for displaying name of the admin in first
  const [orders, setOrders] = useState([])
  const [sales, setSales] = useState([])
  const [customers, setCustomers] = useState([])
  const [products, setProducts] = useState([])

  // fetch orders
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
  // get total sales
  useEffect(() => {
    const getTotalSales = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/transactions/all`);
        setSales(res.data)
        console.log('response sales from dashboard comp', res.data)
      } catch (error) {
        console.error('Error fetching sales', error)
      }
    };
    getTotalSales();
  }, []);

  // get total customers
  useEffect(() => {
    const getCustomerAvailable = async () => {
      try {
        const customerresponse = await axios.get(`${BASE_URL}/api/users/all`)
        setCustomers(customerresponse.data);
        console.log('successfully fetch customer', customerresponse.data)
      }
      catch (error) {
        console.log('Failed to get customer', error)
      }
    }
    getCustomerAvailable();
  }, []);

  //fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productResponse = await axios.get(`${BASE_URL}/api/products`)
        setProducts(productResponse.data.data)
        console.log('fetched products successfully', productResponse.data.data)
      }
      catch (error) {
        console.log('Failed to fetch products')
      }
    }
    fetchProducts();
  }, []);



  //    // for analytics data
const analyticsData = useMemo(() => {
  const data = [];

  if (Array.isArray(orders)) {
    orders.forEach(order => {
      const orderDate = new Date(order.createdAt);
      const orderDay = orderDate.getDate();
      const orderWeek = Math.ceil(orderDay / 7);
      const orderMonth = monthNames[orderDate.getMonth()];
      const orderYear = orderDate.getFullYear();

      let existingEntry = data.find(entry =>
        entry.day === orderDay &&
        entry.week === orderWeek &&
        entry.month === orderMonth &&
        entry.year === orderYear
      );

      if (!existingEntry) {
        existingEntry = {
          day: orderDay,
          week: orderWeek,
          month: orderMonth,
          year: orderYear,
          TotalOrders: 0,
          TotalSales: 0,
          TotalProducts: 0,
          TotalCustomersAvailable: 0,
        };
        data.push(existingEntry);
      }

      existingEntry.TotalOrders += 1;
    });
  }

  if (Array.isArray(sales)) {
    sales.forEach(sale => {
      const saleDate = new Date(sale.createdAt);
      const saleDay = saleDate.getDate();
      const saleWeek = Math.ceil(saleDay / 7);
      const saleMonth = monthNames[saleDate.getMonth()];
      const saleYear = saleDate.getFullYear();

      let existingEntry = data.find(entry =>
        entry.day === saleDay &&
        entry.week === saleWeek &&
        entry.month === saleMonth &&
        entry.year === saleYear
      );

      if (!existingEntry) {
        existingEntry = {
          day: saleDay,
          week: saleWeek,
          month: saleMonth,
          year: saleYear,
          TotalOrders: 0,
          TotalSales: 0,
          TotalProducts: 0,
          TotalCustomersAvailable: 0,
        };
        data.push(existingEntry);
      }

      existingEntry.TotalSales += 1;
    });
  }

  if (Array.isArray(products)) {
    products.forEach(product => {
      const productDate = new Date(product.createdAt);
      const productDay = productDate.getDate();
      const productWeek = Math.ceil(productDay / 7);
      const productMonth = monthNames[productDate.getMonth()];
      const productYear = productDate.getFullYear();

      let existingEntry = data.find(entry =>
        entry.day === productDay &&
        entry.week === productWeek &&
        entry.month === productMonth &&
        entry.year === productYear
      );

      if (!existingEntry) {
        existingEntry = {
          day: productDay,
          week: productWeek,
          month: productMonth,
          year: productYear,
          TotalOrders: 0,
          TotalSales: 0,
          TotalProducts: 0,
          TotalCustomersAvailable: 0,
        };
        data.push(existingEntry);
      }

      existingEntry.TotalProducts += 1;
    });
  }

  if (Array.isArray(customers)) {
    customers.forEach(customer => {
      const customerDate = new Date(customer.createdAt);
      const customerDay = customerDate.getDate();
      const customerWeek = Math.ceil(customerDay / 7);
      const customerMonth = monthNames[customerDate.getMonth()];
      const customerYear = customerDate.getFullYear();

      let existingEntry = data.find(entry =>
        entry.day === customerDay &&
        entry.week === customerWeek &&
        entry.month === customerMonth &&
        entry.year === customerYear
      );

      if (!existingEntry) {
        existingEntry = {
          day: customerDay,
          week: customerWeek,
          month: customerMonth,
          year: customerYear,
          TotalOrders: 0,
          TotalSales: 0,
          TotalProducts: 0,
          TotalCustomersAvailable: 0,
        };
        data.push(existingEntry);
      }

      existingEntry.TotalCustomersAvailable += 1;
    });
  }

  return data;
}, [orders, sales, products, customers]);

  console.log("Constructed Analytics Data:", analyticsData)


  return (
    <div>
      <div className="dashboard-container  pt-3 px-3">
        <div className="dashboard-user-intro px-5 py-5" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>


          <div >
            <h1 style={{ fontFamily: '"Poppins", sans-serif' }}>Hii, {user ? user.name : "Shopinity"}</h1>
            <p style={{ fontFamily: '"Poppins", sans-serif' }}>Your shop, your data, your decisions — simplified.</p>
          </div>
          <div className='d-flex flex-column align-items-center'>
            <h1 style={{ fontFamily: '"Poppins", sans-serif', fontSize: "25px" }}>Weather & Timing</h1>
            <div ><DashboardWeather /></div>
          </div>

        </div>

        <div className='dashboardmain-conatiner d-flex justify-content-between py-3'>
          <div className="dashbaord-left-section">
            <div className="total-card-dashboard d-flex">
              <div className="total-revenue-card card-dashbaord">
                <p>Total Orders</p>
                <strong style={{ fontSize: "25px" }}>{orders?.length}</strong>
              </div>
              <div className="total-orders-card card-dashbaord">
                <p>Total Sales</p>
                <strong style={{ fontSize: "25px" }}>{sales?.length}</strong>
              </div>
              <div className="total-product-card card-dashbaord">
                <p>Total Product</p>
                <strong style={{ fontSize: "25px" }}>{products?.length}</strong>
              </div>
              <div className="total-customers-card card-dashbaord">
                <p>Total Customer</p>
                <strong style={{ fontSize: "25px" }}>{customers?.length}</strong>
              </div>
            </div>

            <div>
              <Dashboard_AnalyticsReport data={analyticsData} />
            </div>
            <div className=''>
              <CategoryWise_SalesReport />
            </div>
          </div>


          <div className="dashbaord-right-section" style={{ width: "35%" }}>
            <MyAccount />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
