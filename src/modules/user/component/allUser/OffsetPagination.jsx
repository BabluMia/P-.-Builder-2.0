import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Divider } from "@mui/material";
import React from "react"
import { Link } from "react-router-dom";
import './pagination.css'
const OffsetPagination = () => {
  return (
    <>
      <div className="row lead_pagination bg-transparent">
        <div className="col-12 d-flex justify-content-end align-items-center pagination_text gap-4">
            <div className="d-flex gap-3 align-items-center">
            <span style={{color:"#AEAEB2", fontsize:"14px"}}>Row per page:  </span>
          <select value={10} style={{border:"none", height:"19px"}}>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
            </div>
          
          {/* <span>  1-10 of 40</span> */}
          <div className=" pagination_container">
          <nav aria-label="...">
            <ul className="pagination pagination-sm align-items-center mb-0">
            <li className="page-item">
                <div className="" to="#">
                 <ArrowBackIos style={{fontSize:"15px", color:"#333333"}}/>
                </div>
              </li>
             
              <li className="page-item">
                <Link className="page-link lead_page_link lead_page_link1 font_size_for_small pagination_texts" to="#">
                  1
                </Link>
              </li>
              <li className="page-item ">
                <Link className="page-link lead_page_link font_size_for_small pagination_texts" to="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link lead_page_link font_size_for_small pagination_texts" to="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link lead_page_link font_size_for_small pagination_texts" to="#">
                  4..
                </Link>
              </li>
              <li className="page-item">
                <div className="" to="#">
                 <ArrowForwardIos style={{fontSize:"15px", color:"#333333"}}/>
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

export default OffsetPagination;
