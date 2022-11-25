import React from "react";
import BillingList from "./BillingList";

const UserPaymentPlan = () => {
 
  return (
    <>
      <div className="summary-card">
        {/* basicinfo */}
        <div className="info-card mb-4">
          <div className="info-heading">
            <h6>Lease Information</h6>
            <p>Please check your personal details here</p>
          </div>
          <div className="info-details">
            <div className="row">
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Lease No</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 408-0371388-000</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Lease Provider</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: FDGL</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Lease Status</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: Active</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Buyback</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: No</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Telephone</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>+447 82879 1967</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Buyback Percentage</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: N/A</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Contract Terms</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 48</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-1"></div>
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Commencement Date</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 30 April, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Contact Payment</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: €729.95</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Payment Made</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 6.00</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Funding Amount</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: €729.95</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Funding Date</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 15 July, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* financial info */}
        <div className="info-card mb-4">
          <div className="info-heading">
            <h6>Financial Information</h6>
            <p>Please check your personal details here</p>
          </div>
          <div className="info-details">
            <div className="row">
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Arreas Date</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: Surany</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>DD Status</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: Active</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Debt Stage</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: Day 1</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Debt Status</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: Paid</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Debt Refer To</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: N/A</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Debt Referral Date</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: N/A</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-1"></div>
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Debt Letter Sent</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: N/A</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Asset Replacement Amountt</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: N/A</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Outstanding Debt Amount</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: €729.95</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Final Settlement Amount</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: €729.95</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Del Payment Made</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 5</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Restocking Fees</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: N/A5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
         
        </div>


   {/* Subscription Information */}
   <div className="info-card mb-4">
          <div className="info-heading">
            <h6>Subscription Information</h6>
            <p>Please check your personal details here</p>
          </div>
          <div className="info-details">
            <div className="row">
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Contract Number</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: POS204545856</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>RT Provider</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: N/A</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Subscription Start Date</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 22 August, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Subscription End Date</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 22 September, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Subscription Status</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: Pending</p>
                  </div>
                 
                </div>
              </div>
              <div className="col-lg-2 col-1"></div>
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Total Payment</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: £ 2,800.00</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Last Payment Date</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 22 August, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Next Payment Date</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: 22 September, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Payment Status</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>: Paid</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

      
         
        </div>

        <BillingList/>
        
      </div>
    </>
  );
};

export default UserPaymentPlan;
