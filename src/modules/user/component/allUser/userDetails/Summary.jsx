import React, { useState } from "react";

const Summary = () => {
  const [first, setfirst] = useState();
  return (
    <>
      <div className="summary-card">
        {/* basicinfo */}
        <div className="info-card mb-4">
          <div className="info-heading">
            <h6>Basic Information</h6>
            <p>Please check your personal details here</p>
          </div>
          <div className="info-details">
            <div className="row">
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>First Name</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Surany</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Last Name Name</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Izabella</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Gender</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Female</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Email Address</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Sur112@gmail.com</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Telephone</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>+447 82879 1967</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Mobile</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>+447 82879 1967</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-1"></div>
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Lead Created</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>30 April, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Accepted Request</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>09 May, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Start Business</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>15 July, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* business info */}
        <div className="info-card mb-4">
          <div className="info-heading">
            <h6>Business Information</h6>
            <p>Please check your personal details here</p>
          </div>
          <div className="info-details">
            <div className="row">
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Legal Name</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Surany</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Treding Name</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Izabella</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Business Type</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>IT</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Business Telephone</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>+447 82879 1967</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>New to Card Process</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>YES</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Company Name</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>DevsStream</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-1"></div>
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Lead Created</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>30 April, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Accepted Request</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>09 May, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Start Business</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>15 July, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

      
          <div
            className="info-details"
            style={{ borderTop: "1px solid #E0E0E0" }}
          >
            <div className="row">
      {/* legal address */}            
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-12 ">
                    <div className="address-heading">
                      <h6>Legal Address</h6>
                      <p style={{ fontSize: "12px", fontWeight: "normal" }}>
                        Please check your personal details here
                      </p>
                    </div>
                  </div>
                 
                  <div className="col-md-6 mb-3">
                    <p>Address 1</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>144 Cavendish Avenue, W13 0JN</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Address 2</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>21/A Cavendish, W13 0JN</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>City/Town</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Liverpool</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Post Code</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>W13 0JN</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>County</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>London</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Country</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>United Kingdom</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-1"></div>
     {/* trading address */}             
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-12 ">
                    <div className="address-heading">
                      <h6>Trading Address</h6>
                      <p style={{ fontSize: "12px", fontWeight: "normal" }}>
                        Please check your personal details here
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Address 1</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>144 Cavendish Avenue, W13 0JN</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Address 2</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>21/A Cavendish, W13 0JN</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>City/Town</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Liverpool</p> 
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Post Code</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>W13 0JN</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>County</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>London</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Country</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Summary;
