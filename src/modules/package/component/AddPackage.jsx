import React from "react";
import "./Package.css";
import ImageUpload from "./ImageUpload";
import Imageupload from "./PackageContainer/Imageupload";
const AddPackage = () => {
  return (
    <div className="box-wrapper">
      <div className="d-flex align-items-center gap-3 package-head">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1548_1892)">
            <path
              d="M21 16.621V7.37727C20.9993 7.24374 20.9634 7.11277 20.8959 6.99755C20.8284 6.88234 20.7317 6.78695 20.6156 6.72102L12.3656 2.08039C12.2545 2.01621 12.1284 1.98242 12 1.98242C11.8716 1.98242 11.7455 2.01621 11.6344 2.08039L3.38437 6.72102C3.26827 6.78695 3.1716 6.88234 3.10411 6.99755C3.03663 7.11277 3.00072 7.24374 3 7.37727V16.621C3.00072 16.7545 3.03663 16.8855 3.10411 17.0007C3.1716 17.1159 3.26827 17.2113 3.38437 17.2773L11.6344 21.9179C11.7455 21.9821 11.8716 22.0159 12 22.0159C12.1284 22.0159 12.2545 21.9821 12.3656 21.9179L20.6156 17.2773C20.7317 17.2113 20.8284 17.1159 20.8959 17.0007C20.9634 16.8855 20.9993 16.7545 21 16.621V16.621Z"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5938 14.2969V9.42188L7.5 4.40625"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.8973 6.99414L12.0848 12.0004L3.10352 6.99414"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.0844 12L12 22.0125"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1548_1892">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h3>Add Package</h3>
      </div>
      <div className="personal_info mt-5 p-4 mb-4">
        <div className="personal_info_top mb-4">
          <h3>Package Details</h3>
          <p>Please check your personal details here</p>
        </div>
        <hr />
        <div className="persional_info_form">
          <form>
            <div className="row my-4">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label align-self-center"
              >
                Package Name <span className="require_mark">*</span>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Only E-POS"
                />
              </div>
            </div>
            <hr />
            <div className="row my-4">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label align-self-center"
              >
                Package Code <span className="require_mark">*</span>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="123S"
                />
              </div>
            </div>
            <hr />
            <div className="row my-4">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label align-self-center"
              >
                Package Type<span className="require_mark">*</span>
              </label>
              <div className="col-sm-10 " style={{ position: "relative" }}>
                <select id="inputState" className="form-control">
                  <option selected>MALE</option>
                  <option>FEMALE</option>
                  <option>OTHERS</option>
                </select>
                <div className="arrow-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1548_1885)">
                      <path
                        d="M16.8281 7.25782C16.7803 7.14406 16.6998 7.04701 16.597 6.97889C16.4941 6.91076 16.3733 6.87462 16.2499 6.875H3.74994C3.62655 6.87462 3.5058 6.91076 3.40292 6.97889C3.30004 7.04701 3.21963 7.14406 3.17181 7.25782C3.12679 7.37326 3.11536 7.49909 3.13887 7.62076C3.16237 7.74242 3.21984 7.85495 3.30463 7.94532L9.55463 14.1953C9.67409 14.3108 9.83376 14.3754 9.99994 14.3754C10.1661 14.3754 10.3258 14.3108 10.4453 14.1953L16.6953 7.94532C16.78 7.85495 16.8375 7.74242 16.861 7.62076C16.8845 7.49909 16.8731 7.37326 16.8281 7.25782V7.25782Z"
                        fill="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1548_1885">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <hr />

            <div className="row my-4">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label align-self-center"
              >
                Duration<span className="require_mark">*</span>
              </label>
              <div className="col-sm-10 " style={{ position: "relative" }}>
                <select id="inputState" className="form-control">
                  <option selected>MALE</option>
                  <option>FEMALE</option>
                  <option>OTHERS</option>
                </select>
                <div className="arrow-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1548_1885)">
                      <path
                        d="M16.8281 7.25782C16.7803 7.14406 16.6998 7.04701 16.597 6.97889C16.4941 6.91076 16.3733 6.87462 16.2499 6.875H3.74994C3.62655 6.87462 3.5058 6.91076 3.40292 6.97889C3.30004 7.04701 3.21963 7.14406 3.17181 7.25782C3.12679 7.37326 3.11536 7.49909 3.13887 7.62076C3.16237 7.74242 3.21984 7.85495 3.30463 7.94532L9.55463 14.1953C9.67409 14.3108 9.83376 14.3754 9.99994 14.3754C10.1661 14.3754 10.3258 14.3108 10.4453 14.1953L16.6953 7.94532C16.78 7.85495 16.8375 7.74242 16.861 7.62076C16.8845 7.49909 16.8731 7.37326 16.8281 7.25782V7.25782Z"
                        fill="#333333"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1548_1885">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <hr />
            <div className="row my-4">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label align-self-center"
              >
                Price <span className="require_mark">*</span>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="€729.95"
                />
              </div>
            </div>
            <hr />

            <div className="row my-4">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label align-self-center"
              >
                Product Type <span className="require_mark">*</span>
              </label>
              <div className="col-sm-10">
                <div class="row">
                  <div class="col-lg-4 col-sm-12 d-flex align-items-center gender_item_container">
                    <input
                      class=" black_input userRadiobtn mb-2"
                      type="radio"
                      value="option1"
                    />
                    <label class=" userRadioLabel" for="inlineRadio1">
                      EPOS
                    </label>
                  </div>
                  <div class="col-lg-4 col-sm-12 d-flex align-items-center gender_item_container">
                    <input
                      class="black_input  userRadiobtn  mb-2"
                      type="radio"
                      value="option2"
                    />
                    <label class="userRadioLabel" for="inlineRadio2">
                      Machine
                    </label>
                  </div>
                  <div class="col-lg-4 col-sm-12 d-flex align-items-center gender_item_container">
                    <input
                      class="black_input  userRadiobtn  mb-2"
                      type="radio"
                      value="option3"
                    />
                    <label class=" userRadioLabel" for="inlineRadio3">
                      Terminal
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="row my-4">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label align-self-center"
              >
                Description <span className="require_mark">*</span>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  as="textarea"
                  className="form-control"
                  id="inputPassword"
                  placeholder="write here"
                />
              </div>
            </div>
            <hr />
            <div class="col-12 col-lg-5">
              <h5 style={{ marginTtop: "30px" }}>Status</h5>
              <p style={{ color: "rgb(142, 142, 147)" }}>
                ( If the Category Option is available )
              </p>
              <div class="row mr-4 mt-3">
                <div
                  class=" d-flex align-items-center justify-content-between col-12 py-2"
                  style={{
                    backgroundColor: "rgb(242, 242, 247)",
                    borderRadius: "8px",
                  }}
                >
                  <div class="d-flex w-100  align-items-center">
                    <div
                      class="d-flex py-1 justify-content-center align-items-center"
                      style={{ width: "32px", borderRadius: "3px" }}
                    >
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="32" height="32" rx="4" fill="#1597E5" />
                        <path
                          d="M25.2565 14.962C25.7305 15.582 25.7305 16.419 25.2565 17.038C23.7635 18.987 20.1815 23 15.9995 23C11.8175 23 8.23552 18.987 6.74252 17.038C6.51191 16.7411 6.38672 16.3759 6.38672 16C6.38672 15.6241 6.51191 15.2589 6.74252 14.962C8.23552 13.013 11.8175 9 15.9995 9C20.1815 9 23.7635 13.013 25.2565 14.962V14.962Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <span class="mx-3" Style={{ color: "#1597E5" }}>
                      OFF
                    </span>
                  </div>
                  <div class="form-check form-switch ">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                      width="40"
                      height="40"
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </form>
        </div>
        {/* <Imageupload/> */}
      </div>

      <Imageupload />
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex justify-content-end gap-4">
            <div className=" my-5 ">
              <button className="cancel_btn">Cancel</button>
            </div>
            <div className="save_and_next_btn my-5">
              <button>Save </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPackage;
