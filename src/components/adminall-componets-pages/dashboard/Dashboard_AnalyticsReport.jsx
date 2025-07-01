import React, { useState } from "react";
import "./Dashboard_AnalyticsReport.css";
import { SiSimpleanalytics } from "react-icons/si";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa";
import { Calendar, BarChart2 } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FcCalendar } from 'react-icons/fc'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";



const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getCurrentMonth = () => {
  const currentMonthIndex = new Date().getMonth();
  return monthNames[currentMonthIndex];
};

const COLORS = [
  "#ea4b8a", 
  "#a4265e",
  "#341a17",
  "#3a5592",
  ];

const Dashboard_AnalyticsReport = ({ data }) => {
  const [filterType, setFilterType] = useState("lastWeek");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const selectedDay = selectedDate.getDate();
  const selectedWeek = Math.ceil(selectedDay / 7);
  const selectedMonth = monthNames[selectedDate.getMonth()];
  const selectedYear = selectedDate.getFullYear();

  const today = new Date();
  const lastWeekDate = new Date(today);
  lastWeekDate.setDate(today.getDate() - 7);

  const lastMonthDate = new Date(today);
  lastMonthDate.setMonth(today.getMonth() - 1);

  const lastYearDate = new Date(today);
  lastYearDate.setFullYear(today.getFullYear() - 1);

  console.log(
    "selected day, week, month, year",
    selectedDay,
    selectedWeek,
    selectedMonth,
    selectedYear
  );

  const filteredData = data.filter((item) => {
    const { day, week, month, year, createdAt } = item;
    let itemDate;

    if (createdAt) {
      itemDate = new Date(createdAt);
      if (isNaN(itemDate)) {
        console.warn("Invalid date detected in createdAt:", createdAt);
        return false;
      }
    } else if (day && month && year) {
      itemDate = new Date(year, monthNames.indexOf(month), day);
    } else {
      console.warn("Skipping item due to missing date information", item);
      return false;
    }

    // Normalize dates for accurate comparison
    itemDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    lastWeekDate.setHours(0, 0, 0, 0);
    lastMonthDate.setHours(0, 0, 0, 0);
    lastYearDate.setHours(0, 0, 0, 0);

    switch (filterType) {
      case "lastWeek":
        return itemDate >= lastWeekDate && itemDate <= today;
      case "lastMonth":
        return itemDate >= lastMonthDate && itemDate <= today;
      case "lastYear":
        return itemDate >= lastYearDate && itemDate <= today;
      case "custom":
      default:
        return (
          itemDate.getDate() === selectedDate.getDate() &&
          itemDate.getMonth() === selectedDate.getMonth() &&
          itemDate.getFullYear() === selectedDate.getFullYear()
        );
    }
  });
   console.log("Filtered Data for", filterType, filteredData)

  const handleFilterChange = (type) => {
    setFilterType(type);
  }
  console.log("Filtered Data:", filteredData);


//  const filteredData = data.filter(item => {
// try {
//        const itemDate = new Date(item.createdAt);
//        const itemMonth = itemDate.getMonth();
//      return itemMonth === selectedMonth || item.month === selectedMonth;
//     } catch(error) {
//       console.error("Error parsing date:", error, item)
//     }
//   });
//   console.log('filtered Data', filteredData)
  


  // Aggregate data for the pie chart
  const TotalOrders = filteredData.reduce((sum, item) => sum + item.TotalOrders, 0);
  const TotalSales = filteredData.reduce((sum, item) => sum + item.TotalSales, 0);
  const TotalProducts = filteredData.reduce((sum, item) => sum + item.TotalProducts, 0);
  const TotalCustomersAvailable = filteredData.reduce((sum, item) => sum + item.TotalCustomersAvailable, 0);

  const pieData = [

    { name: "Total Sales", value: TotalSales },
    { name: "Total Products", value: TotalProducts },
    { name: "Total Customers", value: TotalCustomersAvailable },
    { name: "Total Orders", value: TotalOrders },
  ];

  return (
    <div>
      <div className="analytics-container my-4 p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h1
            className="analytics-report-admin d-flex"
            style={{ fontSize: "25px", fontFamily: '"Poppins", sans-serif', gap:"4px", margin:"0" }}
          >
            Analytics Report <SiSimpleanalytics />
          </h1>
           {/* <BarChart2 className="w-5 h-5 text-gray-500 cursor-pointer" /> */}
          <div className="d-flex gap-2">
            <button style={{ border: "1px solid grey", padding: "8px 8px" }} onClick={() => handleFilterChange("lastWeek")}>
              Last Week
            </button>
            <button style={{ border: "1px solid grey", padding: "8px 8px" }} onClick={() => handleFilterChange("lastMonth")}>
              Last Month
            </button>
            <button style={{ border: "1px solid grey", padding: "8px 8px" }} onClick={() => handleFilterChange("lastYear")}>
              Last Year
            </button>
            <span style={{ position: "relative", display:"inline-block" }}>
              <FcCalendar
                style={{
                  position: "absolute",
                  color: "gray",
                 left:"8px",
                 top:"50%",
                 transform:"translateY(-50%)",
                  cursor: "pointer",
                  pointerEvents:"none",
                  fontSize:'24px'
                }}
              />
              <DatePicker
                selected={selectedDate} onChange={(date) =>{setSelectedDate(date); setFilterType("custom")}}
                dateFormat="dd/MM/yyyy"
                showFullMonthYearPicker
                className="border border-gray-300 rounded pl-4 pr-2  py-2 text-sm cursor-pointer text-right"
              />
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label={({ name, value }) => `${name}: ${value}`}
            // sx={{margin: '20px'}}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={40} />
        </PieChart>
      </ResponsiveContainer>
      </div>
      
    </div>
  );
};

export default Dashboard_AnalyticsReport;

