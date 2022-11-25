import React from "react";
import { Form } from "react-bootstrap";
import "./dashboard.css";
import DashboardHistory from "./DashboardHistory";
import EarningChart from "./EarningChart";
import OverViewChart from "./OverViewChart";
const Dashboard = () => {
return (
<>
  <div className="box-wrapper">
    <div className="row">
      <div className="col-md-6 mb-3">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="dashboard-card d-flex justify-content-around align-items-center gap-3 mb-3"
              style={{paddingTop:"42px",paddingBottom:"42px"}}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
              </svg>
              <div className="dashboard-info">
                <p className="mb-2">Total Sale</p>
                <h5>£8224K</h5>
              </div>
            </div>
            <div className="dashboard-card justify-content-around align-items-center d-flex gap-3"
              style={{paddingTop:"42px",paddingBottom:"42px"}}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
              </svg>
              <div className="dashboard-info">
                <p className="mb-2">Total Revenue</p>
                <h5>£8224K</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="dashboard-card d-flex justify-content-around align-items-center gap-3 mb-3"
              style={{paddingTop:"42px",paddingBottom:"42px"}}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
              </svg>
              <div className="dashboard-info">
                <p className="mb-2">Total Cost</p>
                <h5>£8224K</h5>
              </div>
            </div>
            <div className="dashboard-card d-flex  justify-content-around align-items-center gap-3"
              style={{paddingTop:"42px",paddingBottom:"42px"}}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
              </svg>
              <div className="dashboard-info">
                <p className="mb-2">Total Invoice</p>
                <h5>124</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <EarningChart />
      </div>
      <div className="col-md-6 mb-3">
        <OverViewChart />
      </div>
      <div className="col-md-6">
        <div className="dashboard-card" style={{paddingTop:"47px",paddingBottom:"47px"}}>
          <div className="d-flex justify-content-between mb-3">
            <h5>Leads Overview</h5>
            <select style={{height:"23px", fontSize:"14px"}}>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
            </select>
          </div>
          <div className="d-flex justify-content-between flex-lg-row flex-column">
            <div className="d-flex gap-3" style={{flexDirection:"column"}}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
              </svg>
              <div className="dashboard-info gap-3">
                <p className="mb-3">Total Customer</p>
                <h5>8224K</h5>
              </div>
            </div>
            <div className="d-flex gap-3" style={{flexDirection:"column"}}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
              </svg>
              <div className="dashboard-info gap-2">
                <p className="mb-3">New Customer</p>
                <h5>1234</h5>
              </div>
            </div>
            <div className="d-flex gap-3" style={{flexDirection:"column"}}>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#D9D9D9" />
              </svg>
              <div className="dashboard-info gap-2">
                <p className="mb-3">New Leads</p>
                <h5>456</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-4">
        <DashboardHistory />
      </div>
    </div>
  </div>
</>
);
};

export default Dashboard;