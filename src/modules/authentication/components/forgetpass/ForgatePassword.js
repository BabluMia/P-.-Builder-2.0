import React, { useEffect,useState } from "react";
import "./style.css";
import forgateImg from "../forgetpass/img/startup.svg";
import { useHistory } from "react-router-dom";
import VerificationCode from "./VerificationCode";

export default function ForgatePassword({ setHideToolbar }) {
    const history = useHistory();
    useEffect(() => {
        setHideToolbar(true);
        return () => {
            setHideToolbar(false);
        };
    }, []);

// For Modals 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-img">
                                <img src={forgateImg} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="forget_content">
                                <h2 className="mb-5">
                                    Forget Password?
                                </h2>
                                <p>Enter the email address <br /> associated with you account.</p>

                                <div className="forget_form">
                                    <div className="">
                                        <label htmlFor="email" className="form-label mt-4">
                                            Email
                                        </label>
                                        <div className="input-group mb-3 border-bottom border-secondary">
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                className="form-control border-0"
                                                placeholder="Enter Email Address"
                                            />

                                            <span id="basic-addon2">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M5.25 4H18.75C20.483 4 21.8992 5.35645 21.9949 7.06558L22 7.25V16.75C22 18.483 20.6435 19.8992 18.9344 19.9949L18.75 20H5.25C3.51697 20 2.10075 18.6435 2.00514 16.9344L2 16.75V7.25C2 5.51697 3.35645 4.10075 5.06558 4.00514L5.25 4H18.75H5.25ZM20.5 9.373L12.3493 13.6637C12.1619 13.7623 11.9431 13.7764 11.7468 13.706L11.6507 13.6637L3.5 9.374V16.75C3.5 17.6682 4.20711 18.4212 5.10647 18.4942L5.25 18.5H18.75C19.6682 18.5 20.4212 17.7929 20.4942 16.8935L20.5 16.75V9.373ZM18.75 5.5H5.25C4.33183 5.5 3.57881 6.20711 3.5058 7.10647L3.5 7.25V7.679L12 12.1525L20.5 7.678V7.25C20.5 6.33183 19.7929 5.57881 18.8935 5.5058L18.75 5.5Z"
                                                        fill="#1C1C1C"
                                                    />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="row mb-5">
                                        <div className="col-md-12">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="try_another_way">
                                                    <p>Try another way</p>
                                                </div>
                                                <div className="next_btn">
                                                    <button onClick={handleShow}>Next</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <VerificationCode
                    show={show}
                    onHide={() =>handleClose()}
                />
            </div>
        </>
    );
}
