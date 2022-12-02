import React, { useEffect, useState } from "react";
import "./style.css";
import loginImg from "./img/right.svg";
import devsLogo from "./img/devss_logo.svg";
import { useHistory } from "react-router-dom";
export default function Login({ setHideToolbar }) {
  const history = useHistory();
  const [eye, setEye] = useState(false);
  useEffect(() => {
    setHideToolbar(true);
    return () => {
      setHideToolbar(false);
    };
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="login_content">
                <img src={devsLogo} alt="" className="my-lg-5 img_one" />
                <img
                  src={loginImg}
                  alt=""
                  className="img-fluid d-md-none d-block mt-5"
                />
                <h2 className="mb-5 mt-5 mt-lg-0">
                  Hey! <br /> Welcome Back
                </h2>

                <form className="signin_form">
                  <div className="">
                    <label htmlFor="email" className="form-label mt-0 mt-lg-5">
                      Email or User name
                    </label>
                    <div className="input-group mb-3 border-bottom border-dark">
                      <input
                        // required
                        // pattern="@"
                        id="email"
                        type="email"
                        name="email"
                        className="form-control border-0"
                        placeholder="test@gmail.com"
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
                  <div className="">
                    <label htmlFor="email" className="form-label mt-4">
                      Password
                    </label>
                    <div className="input-group mb-3 border-bottom border-dark">
                      <input
                        id="password"
                        type={eye ? "text" : "password"}
                        name="password"
                        className="form-control border-0"
                        placeholder="1234"
                      />

                      <span onClick={() => setEye(!eye)}>
                        {!eye && (
                          <svg
                            width="22"
                            height="18"
                            viewBox="0 0 22 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14 8.35 13.94 8.69 13.83 9L10 5.17C10.31 5.06 10.65 5 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.18 10.08 19.79 11.88 18 13.19L16.58 11.76C17.94 10.82 19.06 9.54 19.82 8C18.17 4.64 14.76 2.5 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C3.83 11.36 7.24 13.5 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C9.29 10.85 8.15 9.71 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z"
                              fill="#1C1C1C"
                            />
                          </svg>
                        )}
                        {eye && (
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              xmlns="http://www.w3.org/2000/svg"
                              d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                              fill="#1C1C1C"
                            ></path>
                            <path
                              xmlns="http://www.w3.org/2000/svg"
                              d="M21.8944 11.5528C19.7362 7.23635 15.9031 5 12 5C8.09687 5 4.26379 7.23635 2.10557 11.5528C1.96481 11.8343 1.96481 12.1657 2.10557 12.4472C4.26379 16.7637 8.09687 19 12 19C15.9031 19 19.7362 16.7637 21.8944 12.4472C22.0352 12.1657 22.0352 11.8343 21.8944 11.5528ZM12 17C9.03121 17 5.99806 15.3792 4.12966 12C5.99806 8.62078 9.03121 7 12 7C14.9688 7 18.0019 8.62078 19.8703 12C18.0019 15.3792 14.9688 17 12 17Z"
                              fill="#1C1C1C"
                            ></path>
                          </svg>
                        )}
                      </span>

                      <span id="basic-addon2"></span>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col-md-12">
                      <div className="d-flex justify-content-between">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label remember_me"
                            htmlFor="flexCheckDefault"
                          >
                            Remember me
                          </label>
                        </div>
                        <div>
                          <a
                            href=""
                            className="forget_pass"
                            onClick={() => history.push(`/forgate_pass`)}
                          >
                            Forget password?
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="signin_btn mb-5 text-center">
                    <button onClick={() => history.push(`/dashboard`)}>Sign In</button>
                  </div>
                  <div className="sign_up_contnet text-center">
                    <p>
                      Don’t have an Account?{" "}
                      <span>
                        <a href="">Sign Up</a>
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right_img d-md-block d-none">
                <img src={loginImg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
