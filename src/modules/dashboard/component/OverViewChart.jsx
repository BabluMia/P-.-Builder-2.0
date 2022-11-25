import React, { useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const dateOption = ["2022", "2023", "2024"];
const ITEM_HEIGHT = 48;
const OverViewChart = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let data = {
    labels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ],
    datasets: [
      {
        label: "This month",
        backgroundColor: "#2B6D9B",
        borderColor: "#2B6D9B)",
        borderWidth: 1,
        stack: 1,

        hoverBorderColor: "#2B6D9B)",
        data: [65, 59, 80, 81, 56, 55, 40, 45, 79, 10, 41, 16, 85, 20],
      },
      {
        label: "Last month",
        backgroundColor: "#FF747C",
        borderColor: "#FF747C",
        borderWidth: 1,
        stack: 2,

        hoverBorderColor: "#FF747C",
        data: [45, 79, 10, 41, 16, 85, 20, 59, 80, 81, 56, 55, 4],
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: true,
    },
    type: "bar",
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: false,
        },
      ],
    },
  };
  return (
    <div className="dashboard-card">
      <div className="d-flex justify-content-between mb-3">
        <h5>Leads Overview</h5>
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {dateOption.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
      <Bar data={data} width={null} height={80} options={options} />
    </div>
  );
};

export default OverViewChart;
