import React from "react";

import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { useState } from "react";
import { TbTrash } from "react-icons/tb";
const PackageTypeList = () => {
  const history = useHistory();

  const userDetail = [
    {
      id: "1",

      duration: "7 days",
      date: "July 4, 2022, 04:07 PM",
      img: 1,
      type: "Master Card",
    },
    {
      id: "2",
      img: 1,
      duration: "7 days",
      date: "July 4, 2022, 04:07 PM",

      type: "Master Card",
    },
  
  ];

  const [userData, setUserData] = useState(userDetail);
  const deleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const filtered = userData.filter((user) => user.id !== id);
        setUserData(filtered);
        swal(" Your data has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your data is safe!");
      }
    });
  };
  return (
    <div className="summary-card">
      <div className="categorey-parent" style={{ height: "100%" }}>
        <div className="cotagorey-head mb-4 pt-0">
          <h3>Package type Table</h3>
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
                    <p className="ms-3 ">S/N</p>
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Duration
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Package type
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Create On
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
                    <td style={{ textAlign: "center" }}>{user.id}</td>
                    <td style={{ textAlign: "center" }}>{user.duration}</td>
                    <td style={{ textAlign: "center" }}>{user.type}</td>
                    <td style={{ textAlign: "center" }}>{user.date}</td>

                    <td style={{ textAlign: "center" , cursor:"pointer"}}  onClick={() => deleteUser(user.id)}>
                     
                       <div className="edit-del red"  onClick={() => deleteUser(user.id)} style={{display:"inline-block"}}>
                          <TbTrash className="icon" />

                        </div>
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

export default PackageTypeList;
