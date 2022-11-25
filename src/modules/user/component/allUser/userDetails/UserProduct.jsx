import React from "react";
import { Badge } from "react-bootstrap";
import { BsArrowRightCircle } from "react-icons/bs";
const UserProduct = () => {
  return (
    <div className="product-card">
      <div className="row mb-4">
        <div className="col-lg-6 mb-4">
        
            <div className="payment-card d-sm-flex align-items-start justify-content-between gap-3">
              <div className="d-sm-flex align-items-center gap-3">
                <h6>
                  <Badge bg="primary">Monthly</Badge>
                </h6>
                <h6>Plan</h6>
              </div>
              <div className="">
                <div className="d-flex">
                  <div className="h2">€729.95</div>
                  <p>/month</p>
                </div>
                <div className="mt-4">
                  <button className="blue-btn">
                    Upgrade package{" "}
                    <BsArrowRightCircle
                      style={{
                        color: "white",
                        fontSize: "20px",
                        marginLeft: "14px",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
         
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="col-lg-6 mb-4">
              
                <div className="payment-card">
                    <p className="red-p mb-3">Last Payment</p>
                    <p className="large-p">on November 30,2022</p>
                    <div className="d-flex justify-content-center">
                    <button className="green-outline-btn mt-4">
                        Paid
                    </button>
                    </div>
                  
                </div>
             
            </div>
            <div className="col-lg-6 mb-4">
              
                <div className="payment-card">
                    <p className="green-p mb-3">Next Paymentt</p>
                    <p className="large-p">on December 30,2022</p>
                    <div className="d-flex justify-content-center">
                    <button className="blue-outline-btn mt-4">
                    Manage Request
                    </button>
                    </div>
                  
                </div>
             
            </div>
          </div>
        </div>
      </div>

 {/* packahe information */}
 <div className="info-card mb-4">
          <div className="info-heading">
            <h6>Package Information</h6>
            <p>Please check your personal details here</p>
          </div>
          <div className="info-details">
            <div className="row">
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Package Name</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Surany</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Package Code</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>123</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Subscription  Name</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>Female</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Duration</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>6 Month</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Price</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>€729.95</p>
                  </div>
                 
                </div>
              </div>
              <div className="col-lg-2 col-1"></div>
              <div className="col-md-6 col-lg-5 mb-3">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <p>Subscription Date</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p style={{ color: "#4F4F4F" }}>30 April, 2022</p>
                  </div>
                  <div className="col-md-6 mb-3">
                    <p>Expired Date</p>
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
          <div className="info-details"   style={{ borderTop: "1px solid #E0E0E0" }}>
          <h6>Description</h6>

          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasbeen the industry's standard dummy text ever since the 1500s, when
an  unknown printer tooka galley of typeand scrambled it to make a type specimen  book.
          </p>
          </div>
        </div>
 
    </div>
  );
};

export default UserProduct;
