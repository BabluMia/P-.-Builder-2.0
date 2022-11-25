import React from "react";
import { Line } from "react-chartjs-2";
import { defaults } from "react-chartjs-2";
const OrderChart = () => {
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
        label: "Order",
        data: [313, 543, 685, 441, 414, 675, 34, 657, 520, 60, 449, 390],
        fill: false,
        // backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "#56CCF2",
      },
    ],
  };
  return (
    <>
      <div className="cotagorey-head ">
        <h3>Order Report</h3>
      </div>
      <Line
        data={data}
        // width={90}
        height={70}
        // options={{ maintainAspectRatio: false }}
      />
    </>
  );
};

export default OrderChart;
