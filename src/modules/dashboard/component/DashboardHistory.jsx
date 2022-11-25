import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HistoryList from "./HistoryList";
import PendingList from "./PendingList";

const DashboardHistory = () => {
const [value, setValue] = useState("1");

const handleChange = (event, newValue) => {
setValue(newValue);
};
return (
<>
  <div className="dashboard-card table-responsive" style={{ padding: "25px 0" }}>
    <div className="d-flex justify-content-end" style={{ paddingRight: "32px " }}>
      <div className="dashboard_date">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 9H4V11H6V9ZM10 9H8V11H10V9ZM14 9H12V11H14V9ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0 2.9 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2ZM16 18H2V7H16V18Z"
            fill="#1E2553" />
        </svg>

        <input type="date" name="" id="" className="input-date" />
      </div>
    </div>
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} variant="scrollable" scrollButtons allowScrollButtonsMobile
            aria-label="scrollable force tabs example" style={{ paddingLeft: "0" }}>
            <Tab label="History" value="1" />
            <Tab label="Pending" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <HistoryList />
        </TabPanel>
        <TabPanel value="2">
          <PendingList />
        </TabPanel>
      </TabContext>
    </Box>
  </div>
</>
);
};

export default DashboardHistory;