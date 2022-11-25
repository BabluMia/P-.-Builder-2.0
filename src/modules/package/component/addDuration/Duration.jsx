import React from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import DurationList from "./DurationList";

export default function Duration() {
const history = useHistory();
return (
<>
  <div className="box-wrapper">
    <div className="row">
      <div className="col-md-12 mb-5">
        <form>
          <div className="add_duration  p-4">
            <div className="duration_top d-flex gap-2">
              <button className="d-flex justify-content-center align-items-center">
                <AddIcon />
              </button>
              <span>Add New Duration</span>
            </div>

            <div className="persional_info_form mt-5">
              <div className="row my-4">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label align-self-center">
                  Package Type <span className="require_mark">*</span>
                </label>
                <div className="col-sm-10 " style={{ position: "relative" }}>
                  <select id="inputState" className="form-control">
                    <option selected>--Select--</option>
                    <option>.....</option>
                  </select>
                  <div className="arrow-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1548_1885)">
                        <path
                          d="M16.8281 7.25782C16.7803 7.14406 16.6998 7.04701 16.597 6.97889C16.4941 6.91076 16.3733 6.87462 16.2499 6.875H3.74994C3.62655 6.87462 3.5058 6.91076 3.40292 6.97889C3.30004 7.04701 3.21963 7.14406 3.17181 7.25782C3.12679 7.37326 3.11536 7.49909 3.13887 7.62076C3.16237 7.74242 3.21984 7.85495 3.30463 7.94532L9.55463 14.1953C9.67409 14.3108 9.83376 14.3754 9.99994 14.3754C10.1661 14.3754 10.3258 14.3108 10.4453 14.1953L16.6953 7.94532C16.78 7.85495 16.8375 7.74242 16.861 7.62076C16.8845 7.49909 16.8731 7.37326 16.8281 7.25782V7.25782Z"
                          fill="#333333" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1548_1885">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-4">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label align-self-center">
                  Product Type <span className="require_mark">*</span>
                </label>
                <div className="col-sm-10">
                  <div className="row">
                    <div className="col-lg-4 col-sm-12 d-flex align-items-center gender_item_container">
                      <input className=" black_input userRadiobtn" type="radio" value="option1" />
                      <label className="userRadioLabel" for="inlineRadio1">
                        Days
                      </label>
                    </div>
                    <div className="col-lg-4 col-sm-12 d-flex align-items-center gender_item_container">
                      <input className="black_input userRadiobtn" type="radio" value="option2" />
                      <label className="userRadioLabel" for="inlineRadio2">
                        Month
                      </label>
                    </div>
                    <div className="col-lg-4 col-sm-12 d-flex align-items-center gender_item_container">
                      <input className="black_input userRadiobtn" type="radio" value="option3" />
                      <label className=" userRadioLabel" for="inlineRadio3">
                        Year
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row my-4">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label align-self-center">
                  Duration <span className="require_mark">*</span>
                </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="inputPassword" placeholder="7" />
                </div>
              </div>
              <hr />
              <div className="col-md-12">
                <button className="duration_submit_btn mt-4" onClick={()=> history.push(`/add_product`)}
                  >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="col-12">
        <DurationList />
      </div>
    </div>
  </div>
</>
);
}