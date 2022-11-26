import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

import React from "react";
import { Link } from "react-router-dom";

const OfsetPaggination = ({setItemPerPage}) => {
  return (
    <>
      <div className="row lead_pagination bg-transparent mt-3">
        <div className="col-12 d-flex justify-content-end align-items-center pagination_text gap-4">
          <div className="d-flex gap-3 align-items-center">
            <span style={{ color: "#AEAEB2", fontsize: "14px" }}>
              Row per page:{" "}
            </span>
            <select onChange={(e)=>setItemPerPage(e.target.value)} style={{ border: "none", height: "19px" }}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
            </select>
          </div>

          {/* <span>  1-10 of 40</span> */}
          <div className=" pagination_container">
            <nav aria-label="...">
              <ul className="pagination pagination-sm align-items-center mb-0">
                <li className="page-item">
                  <div className="" to="#">
                    <ArrowBackIos
                      style={{ fontSize: "15px", color: "#333333" }}
                    />
                  </div>
                </li>

                <li className="page-item">
                  <Link
                    className="page-link lead_page_link lead_page_link1 font_size_for_small pagination_texts"
                    to="#"
                  >
                    1
                  </Link>
                </li>
                <li className="page-item ">
                  <Link
                    className="page-link lead_page_link font_size_for_small pagination_texts"
                    to="#"
                  >
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link lead_page_link font_size_for_small pagination_texts"
                    to="#"
                  >
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link
                    className="page-link lead_page_link font_size_for_small pagination_texts"
                    to="#"
                  >
                    4..
                  </Link>
                </li>
                <li className="page-item">
                  <div className="" to="#">
                    <ArrowForwardIos
                      style={{ fontSize: "15px", color: "#333333" }}
                    />
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfsetPaggination;
