import React, { useEffect, useState } from "react";
import "./Analytics.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BASE_URL from "../../../Config/config.js";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Filler
);

const Analytics = () => {
  const [selectedMonth, setSelectedMonth] = useState(0); // Default: January
  const [chartData, setChartData] = useState({
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        label: "Total Sale",
        data: Array(12).fill(0),
        borderColor: "green",
        backgroundColor: "green",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "green",
        fill: false,
      },
      {
        label: "Total Users",
        data: Array(12).fill(0),
        borderColor: "salmon",
        backgroundColor: "salmon",
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "salmon",
        fill: false,
      },
    ],
  });
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalSales, setTotalSales] = useState(0);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          boxWidth: 12,
          font: { size: 14 },
        },
        position: "top",
        align: "end",
      },
    },
    scales: {
      // y: {
      //   min: 0,
      //   max: 100,
      //   ticks: { stepSize: 10 },
      //   grid: {
      //     color: "#eee",
      //   },
      // },
      // x: {
      //   grid: {
      //     color: "#eee",
      //   },
      // },
    },
  };

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const usersRes = await axios.get(`${BASE_URL}/api/users/all`);
        console.log("usersRes", usersRes);
        const salesRes = await axios.get(`${BASE_URL}/api/transactions/all`);
        console.log("salesRes", salesRes);
        const monthLabels = [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ];

        const salesByMonth = Array(12).fill(0);
        const usersByMonth = Array(12).fill(0);

        // process sales data
        salesRes.data.forEach((sale) => {
          const date = new Date(sale.createdAt);
          const monthIndex = date.getMonth(); //0-11

          salesByMonth[monthIndex] += sale.amount || 0;
        });

        // process sales data
        usersRes.data.forEach((user) => {
          const date = new Date(user.createdAt);
          const monthIndex = date.getMonth(); //0-11
          usersByMonth[monthIndex]++;
        });

        //  set dynamic chart data
        setChartData({
          labels: monthLabels,
          datasets: [
            {
              label: "Total Sale",
              data: salesByMonth,
              borderColor: "green",
              backgroundColor: "green",
              tension: 0.4,
              pointRadius: 4,
              pointBackgroundColor: "green",
              fill: false,
            },
            {
              label: "Total Users",
              data: usersByMonth,
              borderColor: "salmon",
              backgroundColor: "salmon",
              tension: 0.4,
              pointRadius: 4,
              pointBackgroundColor: "salmon",
              fill: false,
            },
          ],
        });
        setTotalUsers(usersRes.data.length);
        setTotalSales(
          salesRes.data.reduce((acc, sale) => acc + (sale.amount || 0), 0)
        );
      } catch (error) {
        console.error("Analytics fetch error:", error);
        toast.error("Failed to load analytics data", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    };
    fetchAnalyticsData();
  }, []);

  return (
    <div>
      <div
        className="analytics-conatainer my-3 mx-3 py-3 px-3"
        style={{ backgroundColor: "white" }}
      >
          {/* <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="month">Select Month: </label>
        <select
          id="month"
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
          value={selectedMonth}
        >
          {chartData.labels.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <p>
        <strong>{chartData.labels[selectedMonth]} Report</strong>
        <br />
        <span style={{ color: "salmon" }}>
          Users: {chartData.datasets[1]?.data[selectedMonth] || 0}
        </span>
        <br />
        <span style={{ color: "green" }}>
          Sales: ₹{chartData.datasets[0]?.data[selectedMonth] || 0}
        </span>
      </p> */}
        <div className="analytics-data-admin pb-5">
          <h1
            style={{
              fontSize: "25px",
              fontFamily: '"Poppins", sans-serif',
              color: "#3D3D3D",
            }}
          >
            Analytics Data
          </h1>
          <p>
            <span style={{ color: "#FF8272" }}>Total Users :{totalUsers} </span>
            <span style={{ color: "#116500" }}>Total Sales :₹{totalSales}</span>
          </p>
        </div>

        <div className="analytics" style={{ width: "100%", height: "60vh" }}>
          <Line  data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
