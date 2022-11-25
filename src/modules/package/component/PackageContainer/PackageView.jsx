import React from "react";
import { useHistory } from "react-router-dom";
import epos from "../../../../assets/icon/epos.svg";
const PackageView = () => {
  const history =useHistory()
  return (
    <div>
      <div className="box-wrapper ">
        <div className="row">
          <div className="col-md-4 mb-4 ">
            <div className="personal_info p-3">
              <div className="details_img">
                <img src={epos} alt="" />
              </div>
              <div className="text-align-center package-info">
                <h3>EPOSN UT-220</h3>
                <h4>EPOSN UT-220</h4>
                <p>
                  Lorim Ipsum is simply dummy text been the <br />
                  industry’s standard
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="personal_info">
              <div className="info-card mb-4 p-3">
                <div className="info-heading d-flex justify-content-between">
                  <div className="">
                    <h6>Package Details</h6>
                    <p>Please check your personal details here</p>
                  </div>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="30" height="30" rx="2" fill="#2F80ED" />
                    <path
                      d="M20.2746 6.83708C20.6407 6.47097 21.2343 6.47097 21.6004 6.83708L24.4129 9.64958C24.779 10.0157 24.779 10.6093 24.4129 10.9754L15.9754 19.4129C15.7996 19.5887 15.5611 19.6875 15.3125 19.6875H12.5C11.9822 19.6875 11.5625 19.2678 11.5625 18.75V15.9375C11.5625 15.6889 11.6613 15.4504 11.8371 15.2746L20.2746 6.83708ZM13.4375 16.3258V17.8125H14.9242L22.4242 10.3125L20.9375 8.82582L13.4375 16.3258ZM7.8125 10.3125C7.8125 9.27697 8.65197 8.4375 9.6875 8.4375H14.375C14.8928 8.4375 15.3125 8.85724 15.3125 9.375C15.3125 9.89276 14.8928 10.3125 14.375 10.3125H9.6875V21.5625H20.9375V16.875C20.9375 16.3572 21.3572 15.9375 21.875 15.9375C22.3928 15.9375 22.8125 16.3572 22.8125 16.875V21.5625C22.8125 22.5981 21.9731 23.4375 20.9375 23.4375H9.6875C8.65197 23.4375 7.8125 22.5981 7.8125 21.5625V10.3125Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="info-details">
                  <div className="row">
                    <div className="col-md-12 col-lg-10 mb-3">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <p>Package Name</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <p style={{ color: "#4F4F4F" }}>Package 1</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <p>PackageType:</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <p style={{ color: "#4F4F4F" }}>Only Pos</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <p>Subscription Name</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <p style={{ color: "#4F4F4F" }}>Monthly</p>
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
                  </div>
                </div>
                <div
                  className="info-details"
                  style={{ borderTop: "1px solid #E0E0E0" }}
                >
                  <h6>Description</h6>

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum hasbeen the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer tooka galley of typeand scrambled it to make a type
                    specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-end gap-4">
              <div className="save_and_next_btn my-5" onClick={()=> history.push(`./allpackage`)}>
                <button>Back </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageView;
