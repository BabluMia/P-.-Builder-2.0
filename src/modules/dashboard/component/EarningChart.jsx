import React from "react";

import { Line } from "react-chartjs-2";
import { useState } from "react";
export const options = {
  // maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      
    },
  },
};
const data2 = [33, 53, 85, 41, 44, 65]
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'Jul','Aug','Sep', 'Oct',"Nov",'Dec'],
  datasets: [
    {
      label: "This month",
      data: [33, 53, 85, 41, 44, 65,25, 35, 51, 54,67,76],
      fill: false,
      //   backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#1F78B4",
    },
    {
      label: "Last month",
      data: [0, 25, 35, 51, 54, 76,33, 53, 85, 41, 44, 6],
      fill: false,
      borderColor: "#A6CEE3",
    },
  ],
};

export default function EarningChart() {
  return (
    <div className="dashboard-card" >
      <div className="d-flex justify-content-between mb-3">
        <h5>Earning</h5>
        <select  style={{height:"23px", fontSize:"14px"}}>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                </select>
      </div>
      <Line
      className='area-h'
      data={data} 
       height={92.5}
      //  options= {{
      //      maintainAspectRatio: false,
          
      //  }}
      options={options}
       />
    </div>
  );
}
