import React, { useState } from "react";
import SelectedBanner from "../../Banner/Themes/SelectedBanner";
import Navbar from "../../navbar/UserNavbar/Navbar";
import "./dashboard.css";
const Dashboard = () => {
  const [data, setData] = useState({
    heading: `Hi, I'm John Deo.`,
    data: `A freelance Web developer from London. I convert custom web
    designs to bootstrap templates.`,
    btnText: `I'M AVAILABLE`,
  });

  return (
    <>
      <div className="dashboard_container">
        <div className="my-3 preview_icon">Preview</div>
        <Navbar />
        <SelectedBanner data={data} design={3} />
      </div>
    </>
  );
};

export default Dashboard;
