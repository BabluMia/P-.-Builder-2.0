import React from "react";
import {useHistory} from "react-router-dom";

export default function Package({value}) {
const history = useHistory();
return (
<>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12">
                <form>
                    <div className="business_info mt-5 p-4">
                        <div className="personal_info_top mb-4">
                            <h3>Package Information</h3>
                            <p>Please check your personal details here</p>
                        </div>
                        <hr />
                        <div className="persional_info_form">
                            <h4 className="my-4">Choose Your Package</h4>

                            <div className="row">
                                <div className="col">
                                    <div className="d-flex flex-column align-items-center gap-3">
                                        <div className="package_box d-flex justify-content-center align-items-center">
                                            Only
                                            Epos
                                        </div>
                                        <p>Only Epos</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column align-items-center gap-3">
                                        <div
                                            className="package_box_two d-flex justify-content-center align-items-center">
                                        </div>
                                        <p>E-pos + Terminal</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column align-items-center gap-3">
                                        <div
                                            className="package_box_two d-flex justify-content-center align-items-center">
                                        </div>
                                        <p>E-pos With Machine</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column align-items-center gap-3">
                                        <div
                                            className="package_box_two d-flex justify-content-center align-items-center">
                                        </div>
                                        <p>E-pos + Terminal</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="d-flex flex-column align-items-center gap-3">
                                        <div
                                            className="package_box_two d-flex justify-content-center align-items-center">
                                        </div>
                                        <p>E-pos With Machine</p>
                                    </div>
                                </div>
                                <div className="details">
                                    <h4 className="my-4">Details</h4>
                                    <p>7 Business Seats, 12 mo. paid monthly, 14% discount Offered a 5% limited time
                                        discount increase, if he'd sign this week. Wants to commit to
                                        7 instead of 9 but plans to grow.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="business_info mt-5 p-4">
                        <div className="personal_info_top mb-4">
                            <h3>Package Details</h3>
                            <p>Please check your personal details here</p>
                        </div>
                        <hr />
                        <div className="persional_info_form">
                            <div className="row my-4">
                                <label htmlFor="inputPassword"
                                    className="col-sm-2 col-form-label align-self-center">Pacakge Code <span
                                        className="require_mark">*</span></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputPassword" placeholder="123" />
                                </div>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <div className="col-md-6">
                                    <div className="row">
                                        <label htmlFor="inputPassword"
                                            className="col-sm-4 col-form-label align-self-center">Package Type<span
                                                className="require_mark">*</span></label>
                                        <div className="col-sm-8 " style={{ position: "relative" }}>
                                            <select id="inputState" className="form-control">
                                                <option selected>Rental</option>
                                                <option>.....</option>
                                            </select>
                                            <div className="arrow-icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <label htmlFor="inputPassword"
                                            className="col-sm-4 col-form-label align-self-center">Duration <span
                                                className="require_mark">*</span></label>
                                        <div className="col-sm-8 " style={{ position: "relative" }}>
                                            <select id="inputState" className="form-control">
                                                <option selected>Rental</option>
                                                <option>.....</option>
                                            </select>
                                            <div className="arrow-icon">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
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
                                </div>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <label htmlFor="inputPassword"
                                    className="col-sm-2 col-form-label align-self-center">Price <span
                                        className="require_mark">*</span></label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputPassword" placeholder="€729.95" />
                                </div>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <div className="col-md-6">
                                    <div className="row">
                                        <label htmlFor="inputPassword"
                                            className="col-sm-4 col-form-label align-self-center">Star Date<span
                                                className="require_mark">*</span></label>
                                        <div className="col-sm-8">
                                            <input type="date" className="form-control" id="inputPassword"/>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <label htmlFor="inputPassword"
                                            className="col-sm-4 col-form-label align-self-center">End Date <span
                                                className="require_mark">*</span></label>
                                        <div className="col-sm-8">
                                            <input type="date" className="form-control" id="inputPassword"
                                                placeholder="Antu" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <div className="d-sm-flex justify-content-end gap-4">
                                <div className="previous_btn my-3">
                                    <button onClick={()=> value ('3')}>Previous</button>
                                </div>
                                <div className="save_and_next_btn my-3">
                                    <button>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</>
);
}