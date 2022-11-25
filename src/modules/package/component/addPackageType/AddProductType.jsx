import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {useHistory} from "react-router-dom";
import PackageTypeList from "./PackageTypeList";

export default function AddProductType() {
  const history = useHistory();
  return (
      <>
        <div className="box-wrapper">
          <div className="row">
            <div className="col-md-12 mb-5">
              <form>
                <div className="add_product  p-4">
                  <div className="duration_top d-flex gap-2">
                    <button className="d-flex justify-content-center align-items-center"><AddIcon/>
                    </button>
                    <span>Add New Package type</span>
                  </div>

                  <div className="persional_info_form mt-5">
                    <div className="row my-4">
                      <label htmlFor="inputPassword"
                             className="col-sm-2 col-form-label align-self-center">Package Type <span
                          className="require_mark">*</span></label>
                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword"
                               placeholder="Antu"/>
                      </div>
                    </div>
                    <hr/>
                    <div className="col-md-12 text-end">
                      <button className="duration_submit_btn mt-4">
                        Submit
                      </button>
                    </div>

                  </div>
                </div>
              </form>
            </div>
            <div className="col-12">
              <PackageTypeList/>
            </div>
          </div>
        </div>
      </>
  );
}
