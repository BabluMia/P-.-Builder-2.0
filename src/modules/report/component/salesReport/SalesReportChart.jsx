import React from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
const SalesReportChart = () => {
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
        label: "Ticket",
        data: [33, 53, 85, 41, 44, 65, 34, 67, 20, 60, 44, 30],
        fill: false,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#56CCF2        ",
      },
    ],
  };
  return (
    <>
      <div className="cotagorey-head ">
        <h3>Ticket Report</h3>
      </div>
      <Line
        data={data}
        // width={90}
        height={70}
        options={{
          // maintainAspectRatio: false,
        }}
      />
    </>
  );
};

export default SalesReportChart;
