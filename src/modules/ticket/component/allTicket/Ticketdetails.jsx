import React, { useState } from "react";
import "../Ticket.css";
import user6 from "../../../../assets/icon/user6.svg";
import user3 from "../../../../assets/icon/user3.svg";
import { GrAttachment } from "react-icons/gr";
import Form from "react-bootstrap/Form";
import { Add } from "@material-ui/icons";
import { MdOutlineDangerous } from "react-icons/md";
const Ticketdetails = () => {

  const [files, setFiles] = useState([]);

  const handleFile = (e) => {
    const newFiles = [];
    for (let i = 0; i < e.target.files.length; i++) {
      newFiles.push(e.target.files[i]);
    }
    setFiles(newFiles);
    // setFiles(e.target.files[1].name);
    console.log("files", files);
  };
  function deleteHandler(file) {
    setFiles(files.filter((e) => e !== file));
    // window.URL.revokeObjectURL(file);
  }

  return (
    <div className="box-wrapper">
      <div className="row">
        <div className="col-md-8">
          <div className="personal_info p-4 mb-4">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#E5F9FD" />
                  <path
                    d="M11 8.4503V23.3114C11 23.5591 11.2026 23.7617 11.4503 23.7617H13.9272C14.1525 23.7617 14.3551 23.5815 14.3775 23.3565C14.4451 22.5234 15.1431 21.9154 15.9763 21.9154C16.8094 21.9154 17.5074 22.5459 17.5751 23.3565C17.5975 23.5817 17.8003 23.7617 18.0254 23.7617H20.9075C21.1552 23.7617 21.3578 23.5591 21.3578 23.3114V8.4503C21.3578 8.2026 21.1552 8 20.9075 8H18.2054C17.9802 8 17.8002 8.15769 17.7551 8.36031C17.62 9.10336 16.9445 9.66628 16.179 9.66628C15.4134 9.66628 14.7379 9.12584 14.6028 8.36031C14.5577 8.15769 14.3776 8 14.1525 8H11.4504C11.2027 8 11.0001 8.20261 11.0001 8.4503H11ZM18.6557 19.2584H13.4769C13.2292 19.2584 13.0266 19.0557 13.0266 18.8081C13.0266 18.5604 13.2292 18.3578 13.4769 18.3578H18.6557C18.9034 18.3578 19.106 18.5604 19.106 18.8081C19.106 19.0558 18.9034 19.2584 18.6557 19.2584ZM14.3775 16.5564C14.3775 16.3087 14.5801 16.1061 14.8278 16.1061H17.5298C17.7775 16.1061 17.9801 16.3087 17.9801 16.5564C17.9801 16.8041 17.7775 17.0067 17.5298 17.0067H14.8278C14.5801 17.0067 14.3775 16.8041 14.3775 16.5564ZM11.9008 8.90067H13.8148C14.1525 9.89145 15.0983 10.567 16.1791 10.567C17.2598 10.567 18.2055 9.89141 18.5434 8.90067H20.4571V12.9537H11.9007L11.9008 8.90067Z"
                    fill="#45CCFE"
                  />
                </svg>
                <p>Ticket#2020-5434</p>
              </div>
              <p>10:35 AM March 19, 2021</p>
            </div>
            <div className="p-4 replay" style={{ marginLeft: "25px" }}>
              <h6>How to get speciale management E-pos</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of typeand scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="d-flex  align-items-center">
              <div className="d-flex gap-3 align-items-center">
                <img src={user6} alt="" />
                <p style={{ fontSize: "19px" }}>Zakariya Rahman</p>
              </div>
              {/* <p>10:35 AM March 19, 2021</p> */}
            </div>
          </div>
          {/* 2nd */}
          
 {/* --------------chatting------------------ */}
          <div className="personal_info">
            <div
              className=" chatting"
              style={{ overflowY: "scroll", height: "420px" }}
            >
              <div className="p-4 ">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex gap-3 align-items-center">
                    <img src={user6} alt="" />
                    <p style={{ fontSize: "16px", fontWeight: "400" }}>
                      Zakariya Rahman
                    </p>
                  </div>
                  <p style={{ fontWeight: "400" }}>10:35 AM March 19, 2021</p>
                </div>
                <div className="py-2 replay" style={{ marginLeft: "47px" }}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>

              <hr />
              <div className=" p-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3 align-items-center">
                    <img src={user3} alt="" style={{ height: "30px" }} />
                    <p style={{ fontSize: "16px", fontWeight: "400" }}>
                      Courtney Henry
                    </p>
                  </div>
                  <p style={{ fontWeight: "400" }}>10:35 AM March 19, 2021</p>
                </div>
                <div className="py-2 " style={{ marginLeft: "47px" }}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="d-flex gap-2 mt-3">
                    <div className="status-open d-flex gap-2 align-items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1344_2700)">
                          <path
                            d="M20.0344 7.71564L14.7844 2.46564C14.6415 2.32635 14.4495 2.24889 14.25 2.25001H5.25C4.85218 2.25001 4.47064 2.40805 4.18934 2.68935C3.90804 2.97066 3.75 3.35219 3.75 3.75001V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V8.25001C20.2511 8.05048 20.1737 7.85851 20.0344 7.71564ZM14.25 8.25001V4.12501L18.375 8.25001H14.25Z"
                            fill="#2D9CDB"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1344_2700">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p style={{ color: "#2D9CDB" }}>am347457.pdf</p>
                    </div>
                    <div className="status-open d-flex gap-2 align-items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1344_2700)">
                          <path
                            d="M20.0344 7.71564L14.7844 2.46564C14.6415 2.32635 14.4495 2.24889 14.25 2.25001H5.25C4.85218 2.25001 4.47064 2.40805 4.18934 2.68935C3.90804 2.97066 3.75 3.35219 3.75 3.75001V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V8.25001C20.2511 8.05048 20.1737 7.85851 20.0344 7.71564ZM14.25 8.25001V4.12501L18.375 8.25001H14.25Z"
                            fill="#2D9CDB"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1344_2700">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>

                      <p style={{ color: "#2D9CDB" }}>am347457.pdf</p>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="p-4 ">
                <div className="d-flex justify-content-between align-items-center ">
                  <div className="d-flex gap-3 align-items-center">
                    <img src={user6} alt="" />
                    <p style={{ fontSize: "16px", fontWeight: "400" }}>
                      Zakariya Rahman
                    </p>
                  </div>
                  <p style={{ fontWeight: "400" }}>10:35 AM March 19, 2021</p>
                </div>
                <div className="py-2 replay" style={{ marginLeft: "47px" }}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
{/* -----attachment--------- */}
          <div className="row mt-3">
            {files.map((file, index) => (
              <div key={index} className=" col-md-4">
                <div className="file_name">
                <p> {file.name} </p>
                <button
                  className="delet-btn"
                  onClick={() => deleteHandler(file)}
                >
                  <MdOutlineDangerous size={14} />
                </button>
                </div>
              
              </div>
            ))}
          </div>

          <div className="send_message ">
            <div className="row">
              <div className="col-6 col-xxl-10 col-xl-8 col-md-8 text-box">
                <input type="text" placeholder="Type your message" />
              </div>
              <div
                className="col-xxl-1 col-3 col-xl-2 col-sm-2 box-icon"
                style={{ borderRight: " 1px solid #BDBDBD" }}
              >
                {" "}
                <input
                  type="file"
                  name=""
                  multiple
                  onChange={handleFile}
                  className="attactment_input"
                />
                <GrAttachment className="attachment_icon" />
              </div>
              <div className="col-sm-2 col-3 col-md-2 col-xxl-1 col-xl-2">
                <button className="send-btn">send</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="personal_info p-3">
            <div className=" my-4">
              <label
                htmlFor="inputPassword"
                className=" col-form-label align-self-center"
                style={{ color: "#333333", fontWeight: "500" }}
              >
                Status
              </label>
              <Form.Select aria-label="Default select example" size="md">
                <option>Pending</option>
                <option value="1">Pending</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className=" my-4">
              <label
                htmlFor="inputPassword"
                className=" col-form-label align-self-center"
                style={{ color: "#333333", fontWeight: "500" }}
              >
                Type
              </label>
              <Form.Select aria-label="Default select example" size="md">
                <option>Select type</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className=" my-4">
              <label
                htmlFor="inputPassword"
                className=" col-form-label align-self-center"
                style={{ color: "#333333", fontWeight: "500" }}
              >
                Priority
              </label>
              <Form.Select aria-label="Default select example" size="md">
                <option>Low</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="d-flex justify-content-center ">
              <div className="save_and_next_btn my-3">
                <button>Save </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex justify-content-end ">
            <div className="save_and_next_btn my-3 gap-2">
              <button>
                {" "}
                <Add /> New Ticket{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticketdetails;
