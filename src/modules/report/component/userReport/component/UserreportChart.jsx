import React from "react";
import { Line } from "react-chartjs-2";
import { defaults } from 'react-chartjs-2';
const UserreportChart = () => {
  const data = {
    labels: [
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
    ],
    datasets: [
      {
        label: "User",
        data: [3, 153, 85, 41, 404, 65, 34, 687, 20, 60, 484, 30],
        fill: false,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#56CCF2        ",
      },
    ],
  };
  return (
    <>
      <div className="cotagorey-head ">
        <h3>User Report</h3>
      </div>
      <Line
        data={data}
        // width={90}
        height={70}
        options= {{
            // maintainAspectRatio: false,
           
        }}
      />
    </>
  );
};

export default UserreportChart;
