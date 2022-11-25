import React from "react";
import { Add } from "@material-ui/icons";
import { CalendarMonth, ExpandMore } from "@mui/icons-material";
import whitearrow from "../../../../assets/icon/whiteArrow.svg";

import TicketList from "./TicketList";
import TicketPagination from "./TicketPagination";
import { useHistory } from "react-router-dom";
const TicketListContainer = () => {
  const history = useHistory();
  return (
    <div className="box-wrapper">
      <div className=" row top-box">
        <div className="  col-md-8 mb-3">
          <div className="row ">
            <div className="col-md-6">
            <div
              className="search-bar mb-3"
              style={{ border: "0.5px solid #AEAEB2" }}
            >
              <input
                id="search-input"
                title="Search here anything.."
                aria-label="Search for an icon"
                type="text"
                autocapitalize="none"
                autocomplete="off"
                placeholder="Search by any order parameter.."
              />
              <div className="search_icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.2031 21.8484L18.0422 16.6875C19.5 14.9203 20.2922 12.7219 20.2922 10.4062C20.2922 7.7625 19.2656 5.28281 17.3953 3.4125C15.5297 1.54219 13.0453 0.515625 10.4062 0.515625C7.76719 0.515625 5.28281 1.54219 3.4125 3.4125C1.54219 5.27813 0.515625 7.7625 0.515625 10.4062C0.515625 13.0453 1.54219 15.5297 3.4125 17.4C5.27813 19.2656 7.7625 20.2969 10.4062 20.2969C12.7266 20.2969 14.925 19.5047 16.6875 18.0469L21.8484 23.2031C22.2234 23.5781 22.8281 23.5781 23.2031 23.2031C23.5781 22.8281 23.5781 22.2234 23.2031 21.8484ZM4.76719 16.0406C3.25781 14.5359 2.42812 12.5344 2.42812 10.4062C2.42812 8.27812 3.25781 6.27187 4.7625 4.76719C6.26719 3.2625 8.26875 2.43281 10.4016 2.43281C12.5297 2.43281 14.5359 3.2625 16.0406 4.76719C17.5453 6.27187 18.375 8.27344 18.375 10.4062C18.375 12.5344 17.5453 14.5406 16.0406 16.0453C14.5359 17.55 12.5297 18.3797 10.4016 18.3797C8.27344 18.3797 6.27187 17.55 4.76719 16.0406Z"
                    fill="#AEAEB2"
                  />
                </svg>
              </div>
            </div>
            </div>
          <div className="col-md-6">

          <div className=" date_box">
              <label className="input-group-text date_select">
                <CalendarMonth />
              </label>
              <input
                type="date"
                placeholder="Create Date"
                className="date_select user_date"
              />
              {/* <label className="input-group-text date_select">
                <ExpandMore />
              </label> */}

              <img src={whitearrow} alt="" className="arrow" />
            </div>
          </div>

          </div>
        </div>
        <div className="col-md-4  d-flex justify-content-md-end mb-3">
          <button
            className="add-btn"
            onClick={() => history.push(`./addticket`)}
          >
            <Add /> Add Ticket
          </button>
        </div>
      </div>

      <div className="mt-4 row">
        <div className="col-12">
          <TicketList />
          <TicketPagination />
        </div>
      </div>
    </div>
  );
};

export default TicketListContainer;
