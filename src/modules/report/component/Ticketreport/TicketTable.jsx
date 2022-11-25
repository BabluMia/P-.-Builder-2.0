import React from "react";

import { useHistory } from "react-router-dom";

const TicketTable = () => {
  const history = useHistory();

  const userDetail = [
    {
      id: "1",
      name: "Please Verify my document..",
      ticket_no: "#2846745674",
      request: "Rental",
      priority: "High",
      date: "15 May 2020, 8:00 am",
      status: "Open",

      StatusBtnColour: "#2F80ED",

      package: "Monthly",
      duration: "6 month",
      replay: "284.01",
    },
    {
      id: "2",
      name: "Please Verify my document..",
      ticket_no: "#2846745674",
      request: "Rental",
      priority: "High",
      date: "15 May 2020, 8:00 am",
      status: "Open",

      StatusBtnColour: "#2F80ED",

      package: "Monthly",
      duration: "6 month",
      replay: "284.01",
    },
    {
      id: "3",
      name: "Please Verify my document..",
      ticket_no: "#2846745674",
      request: "Rental",
      priority: "High",
      date: "15 May 2020, 8:00 am",
      status: "Open",

      StatusBtnColour: "#2F80ED",

      package: "Monthly",
      duration: "6 month",
      replay: "284.01",
    },
    {
      id: "1",
      name: "Please Verify my document..",
      ticket_no: "#2846745674",
      request: "Rental",
      priority: "High",
      date: "15 May 2020, 8:00 am",
      status: "Open",

      StatusBtnColour: "#2F80ED",

      package: "Monthly",
      duration: "6 month",
      replay: "284.01",
    },
  ];
 
  return (
    <>
      <div className="categorey-parent" style={{ height: "100%" }}>
        <div className="cotagorey-head mb-4">
          <h3>Ticket Table</h3>
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
                    <p className="ms-3 ">Ticket No.</p>
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Requested By
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Requested By
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Priority
                  </th>

                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Created On
                  </th>

                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      borderTopRightRadius: "4px ",
                      textAlign: "center",
                    }}
                  >
                    Reply
                  </th>
                </tr>
              </thead>
              <tbody className="tb">
                {userDetail.map((user) => (
                  <tr key={user.id} className="table-row ">
                    <td style={{ textAlign: "center" }}>{user.ticket_no}</td>
                    <td style={{ textAlign: "center" }}>{user.request}</td>
                    <td style={{ textAlign: "center" }}>{user.name}</td>
                    <td className="" style={{ textAlign: "center" }}>
                      <button
                        className="status-open"
                        style={{
                          color: `${user.StatusBtnColour}`,
                          background: "`${user.requestBtnClor}` !important",
                          textAlign: "center",
                        }}
                      >
                        {user.priority}
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>{user.date}</td>

                    <td className="" style={{ textAlign: "center" }}>
                      <button
                        className="status-open"
                        style={{
                          color: `${user.StatusBtnColour}`,
                          background: "`${user.requestBtnClor}` !important",
                          textAlign: "center",
                        }}
                      >
                        {user.status}
                      </button>
                    </td>

                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className="d-flex replay-btn gap-2"
                          onClick={() => history.push(`/ticketDetails`)}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_1349_3066)">
                              <path
                                d="M18.008 14.8281C18.488 13.9321 18.7423 12.9325 18.7487 11.916C18.7551 10.8995 18.5135 9.89677 18.0448 8.99475C17.576 8.09273 16.8944 7.31865 16.0589 6.73962C15.2234 6.16059 14.2593 5.79409 13.2501 5.67189C12.9179 4.89692 12.4322 4.19719 11.8224 3.61484C11.2126 3.03248 10.4913 2.57954 9.70187 2.28327C8.91243 1.987 8.07121 1.85353 7.22884 1.89091C6.38647 1.92828 5.56037 2.13572 4.80027 2.50073C4.04018 2.86575 3.3618 3.3808 2.80597 4.01487C2.25015 4.64894 1.82838 5.38892 1.56604 6.19027C1.30371 6.99163 1.20623 7.83777 1.27949 8.67779C1.35275 9.5178 1.59523 10.3343 1.99233 11.0781L1.50795 12.7656C1.45181 12.9534 1.4475 13.1528 1.49548 13.3427C1.54346 13.5327 1.64194 13.7061 1.78048 13.8447C1.91902 13.9832 2.09247 14.0817 2.28243 14.1297C2.47239 14.1776 2.6718 14.1733 2.85951 14.1172L4.54701 13.6328C5.23236 13.9981 5.97924 14.2339 6.75014 14.3281C7.09065 15.1262 7.59359 15.8446 8.22693 16.4376C8.86027 17.0306 9.61015 17.4852 10.4288 17.7726C11.2475 18.0599 12.117 18.1737 12.9821 18.1066C13.8471 18.0395 14.6887 17.793 15.4533 17.3828L17.1408 17.8672C17.3285 17.9233 17.5279 17.9277 17.7178 17.8797C17.9078 17.8317 18.0813 17.7332 18.2198 17.5947C18.3583 17.4561 18.4568 17.2827 18.5048 17.0927C18.5528 16.9028 18.5485 16.7034 18.4923 16.5156L18.008 14.8281ZM16.8048 14.4297C16.7594 14.5008 16.7296 14.5808 16.7174 14.6643C16.7053 14.7478 16.7111 14.833 16.7345 14.9141L17.2189 16.5938L15.5392 16.1094C15.4581 16.086 15.373 16.0802 15.2894 16.0923C15.2059 16.1044 15.1259 16.1342 15.0548 16.1797C14.4821 16.5176 13.8479 16.7383 13.1891 16.8289C12.5303 16.9194 11.8601 16.8781 11.2174 16.7072C10.5748 16.5364 9.97249 16.2395 9.44564 15.8337C8.91879 15.428 8.47788 14.9215 8.14858 14.3438C9.68465 14.18 11.1061 13.4546 12.14 12.3068C13.1739 11.1591 13.7473 9.66979 13.7501 8.12501C13.7484 7.75039 13.7144 7.37662 13.6486 7.00783C14.745 7.26658 15.7219 7.88803 16.421 8.77144C17.1201 9.65485 17.5003 10.7485 17.5001 11.875C17.4991 12.7732 17.2591 13.6549 16.8048 14.4297Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1349_3066">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          Replay
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketTable;
