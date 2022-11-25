import React from "react";

import { useHistory } from "react-router-dom";

const BillingList = () => {
  const history = useHistory();

  const userDetail = [
    {
      id: "1",

      Price: "€284.01",
      date: "July 4, 2022, 04:07 PM",

      payment: "Master Card",
      description: "Discount a 5% limit..",

      link: "invoice_acgtech4e58.pdf",
    },
    {
      id: "2",

      Price: "€284.01",
      date: "July 4, 2022, 04:07 PM",

      payment: "Master Card",
      description: "Discount a 5% limit..",

      link: "invoice_acgtech4e58.pdf",
    },
    {
      id: "3",

      Price: "€284.01",
      date: "July 4, 2022, 04:07 PM",

      payment: "Master Card",
      description: "Discount a 5% limit..",

      link: "invoice_acgtech4e58.pdf",
    },
    {
      id: "1",

      Price: "€284.01",
      date: "July 4, 2022, 04:07 PM",

      payment: "Master Card",
      description: "Discount a 5% limit..",

      link: "invoice_acgtech4e58.pdf",
    },
  ];
  return (
    <>
      <div className="categorey-parent" style={{ height: "100%" }}>
        <div className="cotagorey-head mb-4">
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
                    <p className="ms-3 mt-3">Date</p>
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Price
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Payment by
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Description
                  </th>

                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Download
                  </th>
                </tr>
              </thead>
              <tbody className="tb">
                {userDetail.map((user) => (
                  <tr key={user.id} className="table-row ">
                    <td style={{ textAlign: "center" }}>{user.date}</td>
                    <td style={{ textAlign: "center" }}>{user.Price}</td>
                    <td style={{ textAlign: "center" }}>{user.payment}</td>
                    <td className="" style={{ textAlign: "center" }}>
                     {user.description}
                    </td>
                    <td style={{ textAlign: "center" }}> <p style={{textDecoration:"underline", color:"#2F80ED"}}>{user.link}</p></td>

                    

                   
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

export default BillingList;
