import React from "react";

import { useHistory } from "react-router-dom";
import document from "../../../../../assets/icon/document.svg";
const UserDocument = () => {
  const history = useHistory();

  const userDetail = [
    {
      id: "1",

      name: "sharefile.png",
      date: "July 4, 2022, 04:07 PM",
      img: document,
      type: "Master Card",
    },
    {
      id: "2",
      img: document,
      name: "sharefile.png",
      date: "July 4, 2022, 04:07 PM",

      type: "Master Card",
    },
    {
      id: "3",
      img: document,
      name: "sharefile.png",
      date: "July 4, 2022, 04:07 PM",

      type: "Master Card",
    },
    {
      id: "1",
      img: document,
      name: "sharefile.png",
      date: "July 4, 2022, 04:07 PM",

      type: "Master Card",
    },
  ];
  return (
    <div className="summary-card">
      <div className="categorey-parent" style={{ height: "100%" }}>
        <div className="cotagorey-head mb-4 pt-0">
          <h3>Billing History</h3>
        </div>
        {/* ----------user table -----------*/}

        <div style={{ overflowX: "auto" }} className="table-responsive">
          <div>
            {/* <div style={{ minHeight: "100vw" }}> */}
            <table className="table_my">
              <thead
                className="bg-dark text-white head-row"
                style={{ height: "50px" }}
              >
                <tr className="">
                  <th
                    // className="ms-4"
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      borderTopLeftRadius: "4px ",
                      textAlign: "center",
                      // margin: "0px 20px",
                    }}
                  >
                    <p className="ms-3 mt-3">Document</p>
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Document Type
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Last Update
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                   Action
                  </th>
                </tr>
              </thead>
              <tbody className="tb">
                {userDetail.map((user) => (
                  <tr key={user.id} className="table-row ">
                    <td style={{ textAlign: "center" }}>
                      <div className="d-flex ms-3 justify-content-center align-items-center gap-3">
                        <img src={user.img} alt="" />
                        <div
                        // className="ms-3"
                        >
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                              marginTop: "10px !important",
                            }}
                          >
                            {user.name}
                          </span>{" "}
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>{user.type}</td>
                    <td style={{ textAlign: "center" }}>{user.date}</td>
                   
                    <td style={{ textAlign: "center" }}>
                      {" "}
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1384_710)">
                          <path
                            d="M8.0625 10.3125L12 14.25L15.9375 10.3125"
                            stroke="#333333"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 3.75V14.25"
                            stroke="#333333"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.25 14.25V19.5C20.25 19.6989 20.171 19.8897 20.0303 20.0303C19.8897 20.171 19.6989 20.25 19.5 20.25H4.5C4.30109 20.25 4.11032 20.171 3.96967 20.0303C3.82902 19.8897 3.75 19.6989 3.75 19.5V14.25"
                            stroke="#333333"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1384_710">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDocument;
