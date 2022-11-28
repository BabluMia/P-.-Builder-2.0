import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import {
  GetPaginationData,
  paginationChangeCurrent,
  paginationLimit,
  PaginationLoading,
  paginationNext,
  paginationPrevious,
  setLoadLeads,
  setpaginationName,
} from "../Pagination/_redux/action/PaginationAction";
import './Loader.css'

import { BASE_URL } from "./Url";

const NewOfsetPaggination = ({ URL_MID, PaginationName, URL_Last, date }) => {
  const dispatch = useDispatch();
  const limit = useSelector((state) => state.Pagination.limit[PaginationName]);
  const total_item = useSelector((state) =>
    state.Pagination.data[PaginationName]?.count != null
      ? state.Pagination.data[PaginationName]?.count
      : 0
  );
  const items_data = useSelector((state) =>
    state.Pagination.data[PaginationName] != null
      ? state.Pagination.data[PaginationName]
      : {}
  );
  const pageNumber = useSelector(
    (state) => state.Pagination.pageNumber[PaginationName]
  );

  const item_limit = pageNumber * limit;
  const this_page_items_show =
    item_limit > total_item ? total_item : item_limit;
  const page_show_start = item_limit - limit + 1;
  const pageCount = Math.ceil(total_item / limit);
  const indexOfLastPost = pageCount < pageNumber ? limit : pageNumber * limit;
  const offset = pageCount < pageNumber ? 0 : indexOfLastPost - limit;
  useEffect(() => {
    dispatch(setpaginationName(PaginationName));
    if (!URL_Last || date === "undefined/undefined/" || date === null) {
      dispatch(
        GetPaginationData(
          `${BASE_URL}${URL_MID}?limit=${limit}&offset=${offset}`
        )
      );
    } else if (URL_Last) {
      dispatch(
        GetPaginationData(
          `${BASE_URL}${URL_MID}${URL_Last}&limit=${limit}&offset=${offset}`
        )
      );
    } else {
      dispatch(
        GetPaginationData(
          `${BASE_URL}${URL_MID}?limit=${limit}&offset=${offset}`
        )
      );
    }
  }, [URL_Last, date]);

  const onLimitChange = (e) => {
    let limitVal = parseInt(e.target.value);
    dispatch(setLoadLeads(0));
    dispatch(PaginationLoading(1));
    dispatch(paginationLimit(limitVal));
  };

  const handlePaginationPrevious = () => {
    dispatch(setLoadLeads(0));
    dispatch(PaginationLoading(1));
    dispatch(paginationPrevious());
    dispatch(GetPaginationData(items_data.previous));
  };

  const handlePaginationNext = () => {
    dispatch(setLoadLeads(0));
    dispatch(PaginationLoading(1));
    dispatch(paginationNext());
    dispatch(GetPaginationData(items_data.next));
  };

  const handleChangeCurrentPage = (val) => {
    dispatch(setLoadLeads(0));
    dispatch(PaginationLoading(1));
    dispatch(paginationChangeCurrent(val));
  };

  useEffect(() => {
    if (pageCount !== 0) {
      if (pageCount < pageNumber) {
        dispatch(paginationChangeCurrent(pageCount));
      }
    }
  }, [pageCount]);

  useEffect(() => {
    dispatch(
      GetPaginationData(`${BASE_URL}${URL_MID}?limit=${limit}&offset=${offset}`)
    );
  }, [limit, offset]);

  return (
    <>
      <div className="row mt-3 d-flex  justify-content-end lead_pagination bg-transparent">
        <div className="col-12 col-lg-6 d-flex justify-content-lg-end justify-content-md-end  col-md-6 col-sm-6  col-xs-12 pagination_container">
          <div className=" pagination_text mt-1 me-2">
            <span>Row Per Page: </span>
            <select
              style={{ border: "1px solid gray" }}
              value={limit}
              onChange={onLimitChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </div>
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              <li className="page-item ">
                <Link
                  onClick={handlePaginationPrevious}
                  className={` ${
                    items_data.previous === null ? "disabled" : ""
                  } page-link pagination_texts pagination_btn font_size_for_small me-2`}
                  to="#"
                  tabindex="-1"
                >
                  <ArrowBackIos
                    style={{ fontSize: "15px", color: "#333333" }}
                  />
                </Link>
              </li>

              {[...Array(pageCount === null ? 1 : pageCount)].map(
                (elem, index) => (
                  <li className="page-item">
                    <Link
                      onClick={() => handleChangeCurrentPage(index + 1)}
                      className={`${
                        index + 1 == pageNumber ? "is_active_page" : ""
                      } page-link lead_page_link lead_page_link1 font_size_for_small pagination_texts`}
                      to="#"
                    >
                      <span>{index + 1}</span>
                    </Link>
                  </li>
                )
              )}

              <li className="page-item">
                <Link
                  onClick={handlePaginationNext}
                  className={`${
                    items_data.next === null ? "disabled" : ""
                  } page-link pagination_btn font_size_for_small pagination_texts ms-3`}
                  to="#"
                >
                  <ArrowForwardIos
                    style={{ fontSize: "15px", color: "#333333" }}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NewOfsetPaggination;
