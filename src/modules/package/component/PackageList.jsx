import React from "react";
import package1 from "../../../assets/icon/package1.svg";
import pack2 from "../../../assets/icon/pack2.svg";
import pack3 from "../../../assets/icon/pack3.svg";
import pack4 from "../../../assets/icon/pack4.svg";
// import user5 from '../../../assets/icon/user5.svg'
import { useHistory } from "react-router-dom";
import { RemoveRedEyeOutlined } from "@material-ui/icons";
import { TbTrash } from "react-icons/tb";
import { RiEdit2Line } from "react-icons/ri";
import swal from "sweetalert";
import { useState } from "react";
const PackageList = () => {
  const history = useHistory();

  const userDetail = [
    {
      id: "1",
      name: "Only POS",

      type: "Rental",
      description: "Discount a 5% limit..",

      status: "Review",
      img: package1,
      StatusBtnColour: "#219653",

      package: "Monthly",
      duration: "6 month",
      price: "284.01",
    },
    {
      id: "2",
      name: "Only POS",

      type: "Rental",
      description: "Discount a 5% limit..",

      status: "Review",
      img: pack2,
      StatusBtnColour: "#219653",

      package: "Monthly",
      duration: "6 month",
      price: "284.01",
    },
    {
      id: "3",
      name: "Only POS",

      type: "Rental",
      description: "Discount a 5% limit..",

      status: "Review",
      img: pack4,
      StatusBtnColour: "#219653",

      package: "Monthly",
      duration: "6 month",
      price: "284.01",
    },
    {
      id: "1",
      name: "Only POS",

      type: "Rental",
      description: "Discount a 5% limit..",

      status: "Review",
      img: pack3,
      StatusBtnColour: "#219653",

      package: "Monthly",
      duration: "6 month",
      price: "284.01",
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
          <h3>Package List</h3>
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
                    <p className="ms-3 ">Package Name</p>
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Package Type
                  </th>
                  <th
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                    }}
                  >
                    Package Subscription
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
                    Price
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
                    <td style={{ textAlign: "center" }}>
                      <div className="d-flex ms-3 justify-content-center align-items-center gap-3">
                        <img src={user.img} alt="" style={{borderRadius:"4px", height:"64px", width:"64px", border:"0.5px solid #f1f1f1"}}/>
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
                    <td style={{ textAlign: "center" }}>{user.package}</td>
                    <td style={{ textAlign: "center" }}>{user.duration}</td>
                    <td style={{ textAlign: "center" }}>{user.price}</td>
                    <td style={{ textAlign: "center" }}>{user.description}</td>
                    <td className="" style={{ textAlign: "center" }}>
                      <button
                        className="status"
                        style={{
                          color: `${user.StatusBtnColour}`,
                          background: "`${user.typeBtnClor}` !important",
                          textAlign: "center",
                        }}
                      >
                        {user.status}
                      </button>
                    </td>

                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        {/* <Link to='user-view'> */}
                        <div
                          className="edit-del blue"
                          onClick={() => history.push(`/packageDetails`)}
                        >
                          <RemoveRedEyeOutlined className="icon" />
                        </div>
                        {/* </Link> */}
                        <div className="edit-del green" onClick={()=> history.push(`/addpackage`)}>
                          <RiEdit2Line className="icon" />
                        </div>
                        <div className="edit-del red"  onClick={() => deleteUser(user.id)}>
                          <TbTrash className="icon" />

                          {/* <DeleteOutline className="icon" /> */}
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

export default PackageList;
