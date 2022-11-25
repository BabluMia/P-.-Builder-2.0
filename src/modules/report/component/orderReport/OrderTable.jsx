import React from "react";
import user1 from "../../../../assets/icon/user1.svg";
import user2 from "../../../../assets/icon/user2.svg";
import user3 from "../../../../assets/icon/user3.svg";
import user4 from "../../../../assets/icon/user4.svg";
import { Link, useHistory } from "react-router-dom";
import {
  DeleteOutline,
  EditOutlined,
  RemoveRedEyeOutlined,
} from "@material-ui/icons";
import { DeleteForeverOutlined } from "@mui/icons-material";
import {TbTrash} from 'react-icons/tb'
import {RiEdit2Line} from 'react-icons/ri'
import swal from "sweetalert";
import { useState } from "react";
import DeleteIcon from "../DeleteIcon";
const OrderTable = () => {
  const history = useHistory();

  const userDetail = [
    {
      id: "1",
      name:"Toth Kamilla",
      packName: "Package 1",
      email: "sur990@email.com",
      equipment: "Pos Mechine",
      amount: "€454.78",
      date: "15 May 2020 8:30 am",
      status: "Review",
      img: user1,
      StatusBtnColour: "#219653",
      equipmentBtnClor: "#F2994A",
      package: "Monthly",
    },
    {
      id: "2",
      name:"Toth Kamilla",
      packName: "Toth Kamilla",
      email: "kam12@email.com",
      equipment: "Pos Mechine",
      amount: "€454.78",
      date: "15 May 2020 8:30 am",
      status: "Review",
      img: user2,
      StatusBtnColour: "#219653",
      equipmentBtnClor: "#FFCDD2",
      package: "Monthly",
    },
    {
      id: "3",
      packName: "Package 1",
     name:"Toth Kamilla",
      email: "sur990@email.com",
      equipment: "Pos Mechine",
      amount: "€454.78",
      date: "15 May 2020 8:30 am",
      status: "Review",
      img: user3,
      StatusBtnColour: "#219653",
      equipmentBtnClor: "#FFE0B2",
      package: "Monthly",
    },
    {
      id: "1",
      name:"Toth Kamilla",
      packName: "Package 1",
      email: "sur990@email.com",
      equipment: "Pos Mechine",
      amount: "€454.78",
      date: "15 May 2020 8:30 am",
      status: "Review",
      img: user4,
      StatusBtnColour: "#219653",
      equipmentBtnClor: "#C8E6C9",
      package: "Monthly",
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
    <>
      <div className="categorey-parent" style={{ height: "100%" }}>
        <div className="cotagorey-head mb-4">
          <h3>Order Table</h3>
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
                      textAlign:"center"
                      // margin: "0px 20px",
                    }}
                  >
                    <p className="ms-3 ">Client Name</p>
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    package type
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Package Name
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Equipment
                  </th>

                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                Amount
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                 Date & Time
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="tb">
                {userDetail.map((user) => (
                  <tr key={user.id} className="table-row ">
                    <td style={{ textAlign: "left" }}>
                      <div className="d-flex ms-3 justify-content-center gap-2">
                        <img src={user.img} alt="" style={{borderRadius:"50%", height:"48px", border:"0.5px solid #f1f1f1"}}/>
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
                          <br />
                          <span
                            style={{
                              fontSize: "12px",
                              marginTop: "-10px",
                              textAlign: "center",
                            }}
                          >
                            {user.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: "center" }}>{user.package}</td>
                    <td style={{ textAlign: "center" }}>{user.packName}</td>
                    <td style={{ textAlign: "center" }}>{user.equipment}</td>
                    <td style={{ textAlign: "center" }}>{user.amount}</td>
                    <td className="" style={{ textAlign: "center" }}>
                      <button
                        className="status"
                        style={{
                          color: `${user.StatusBtnColour}`,
                          background:"`${user.equipmentBtnClor}` !important",
                          textAlign: "center",
                        }}
                      >
                        {user.status}
                      </button>
                    </td>
                    <td style={{ textAlign: "center" }}>{user.date}</td>

                    <td>
                      <div className="d-flex justify-content-center gap-2">
                      
                        <div
                          className="edit-del blue"
                          onClick={() => history.push(`/userDetails`)}
                        >
                          <RemoveRedEyeOutlined className="icon" />
                        </div>
                    
                        <div className="edit-del red" onClick={() => deleteUser(user.id)}>
                         <TbTrash className="icon"/>
                     
                        
                        </div>
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

export default OrderTable;
