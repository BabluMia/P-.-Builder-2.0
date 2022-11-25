import React from "react";
import { Line } from "react-chartjs-2";
import { defaults } from 'react-chartjs-2';
const TicketChart = () => {
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
        label: "Sales",
        data: [303, 563, 185, 41, 454, 65, 374, 267, 920, 360, 404, 330],
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
        width={70}
        height={200}
        options= {{
            maintainAspectRatio: false,
           
        }}
      />
    </>
  );
};

export default TicketChart;
