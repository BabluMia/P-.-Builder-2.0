import React, { useState, useEffect } from "react";
import "./SideNav.css";

import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { useLocation } from "react-router-dom";
import small_logo from "../../../assets/logo/small_logo.png";
import small_logo2 from "../../../assets/logo/small_logo (2).png";
import big_logo from '../../../assets/logo/big_logo.png'

import {GrNotification} from 'react-icons/gr'

const SideNav = ({ menuCollapse }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const currentRoute = useHistory().location.pathname.toLowerCase();
  const [menu, setMenu] = useState(menuCollapse);
  const [activeNav, setActiveNave] = useState(location.pathname);
  const [visible, setVisible] = useState(false)
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  useEffect(() => {
    setMenu(menuCollapse);
  }, [menuCollapse]);

  useEffect(() => {
    setActiveNave(location.pathname);
  }, [location.pathname]);

  const shootid = localStorage.getItem("shootid");

  // ----------------logout-------------
  const handleLogOut = () => {
    let response = {
      status: false,
      message: "",
      isLoading: true,
    };

    try {
      localStorage.removeItem("is_logged_in");
      localStorage.removeItem("access_token");
      localStorage.removeItem("userData");

      // toast.success('Logged out successfully !');
      if (typeof window !== "undefined") {
        window.loction.href = "/";
      }
    } catch (error) {
      response.message = "Something Went Wrong !";
      // toast.error(error);
    }
    response.isLoading = false;
  };

  return (
    <>
      <div className="sidebar">
        <ProSidebar collapsed={menu}>
          <SidebarHeader>
            <div className="logo ">
              {menu ? (
                <img src={small_logo2} alt="" />
              ) : (
                <img src={big_logo} alt="" />
              )}
            </div>
          </SidebarHeader>
          <div className="sidebarWrapper">
            <div className="sidebarMenu">
              <Menu iconShape="square">
                <MenuItem
                  active={
                    activeNav === "/dashboard" || activeNav === `/preview`
                      ? true
                      : false
                  }
                  onClick={() => setActiveNave("/dashboard", `/preview`)}
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1315_577)">
                        <path
                          d="M20.25 4.5H3.75C3.33579 4.5 3 4.83579 3 5.25V16.5C3 16.9142 3.33579 17.25 3.75 17.25H20.25C20.6642 17.25 21 16.9142 21 16.5V5.25C21 4.83579 20.6642 4.5 20.25 4.5Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 17.25L18 21"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 17.25L6 21"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 11.25V13.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 9.75V13.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 8.25V13.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 4.5V2.25"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1315_577">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                >
                  {" "}
                  <NavLink exact to="/dashboard">
                    Dashboard
                  </NavLink>
                </MenuItem>
                <MenuItem
                  active={
                    activeNav === "/add-banner" || activeNav === `/preview`
                      ? true
                      : false
                  }
                  onClick={() => setActiveNave("/add-banner", `/preview`)}
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1315_577)">
                        <path
                          d="M20.25 4.5H3.75C3.33579 4.5 3 4.83579 3 5.25V16.5C3 16.9142 3.33579 17.25 3.75 17.25H20.25C20.6642 17.25 21 16.9142 21 16.5V5.25C21 4.83579 20.6642 4.5 20.25 4.5Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 17.25L18 21"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 17.25L6 21"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 11.25V13.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 9.75V13.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15 8.25V13.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 4.5V2.25"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1315_577">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                >
                  {" "}
                  <NavLink exact to="/add-banner">
                    Banner
                  </NavLink>
                </MenuItem>

                {/* ------------------------all user---------------------- */}

                <SubMenu 
                onClick={() => {
                setIsOpenDropdown(!isOpenDropdown)
              }}
                  active={activeNav === `/alluser` ? true : false}
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1315_595)">
                        <path
                          d="M8.25 15C10.9424 15 13.125 12.8174 13.125 10.125C13.125 7.43261 10.9424 5.25 8.25 5.25C5.55761 5.25 3.375 7.43261 3.375 10.125C3.375 12.8174 5.55761 15 8.25 15Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                        />
                        <path
                          d="M14.5684 5.42813C14.9993 5.31124 15.4437 5.25136 15.8902 5.25C17.1832 5.25 18.4231 5.76361 19.3374 6.67785C20.2516 7.59209 20.7652 8.83207 20.7652 10.125C20.7652 11.4179 20.2516 12.6579 19.3374 13.5721C18.4231 14.4864 17.1832 15 15.8902 15"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.5 18.5066C2.2612 17.4234 3.27191 16.5393 4.44676 15.9289C5.6216 15.3186 6.92608 15 8.25 15C9.57392 15 10.8784 15.3186 12.0532 15.9289C13.2281 16.5393 14.2388 17.4234 15 18.5066"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.8906 15C17.2147 14.9992 18.5194 15.3174 19.6944 15.9277C20.8693 16.5381 21.8799 17.4225 22.6406 18.5063"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1315_595">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title="User"
                  // open={isOpenDropdown} 
                >
                  <MenuItem
                    active={activeNav === `/alluser` ? true : false}
                    onClick={() => setActiveNave("/alluser")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/alluser">All User</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === "/adduser" ? true : false}
                    onClick={() => setActiveNave("/adduser")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/adduser">Add User</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === "/userrequest" ? true : false}
                    onClick={() => setActiveNave("/userrequest")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink className="listDecoration" to="/userrequest">
                      User Request
                    </NavLink>
                  </MenuItem>
                </SubMenu>

                {/* ------------------------Package---------------------- */}

                <SubMenu 
                // onClick={() => setVisible(!visible)}
                  active={activeNav === `/alluser` ? true : false}
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1315_607)">
                        <path
                          d="M21 16.621V7.37727C20.9993 7.24374 20.9634 7.11277 20.8959 6.99755C20.8284 6.88234 20.7317 6.78695 20.6156 6.72102L12.3656 2.08039C12.2545 2.01621 12.1284 1.98242 12 1.98242C11.8716 1.98242 11.7455 2.01621 11.6344 2.08039L3.38437 6.72102C3.26827 6.78695 3.1716 6.88234 3.10411 6.99755C3.03663 7.11277 3.00072 7.24374 3 7.37727V16.621C3.00072 16.7545 3.03663 16.8855 3.10411 17.0007C3.1716 17.1159 3.26827 17.2113 3.38437 17.2773L11.6344 21.9179C11.7455 21.9821 11.8716 22.0159 12 22.0159C12.1284 22.0159 12.2545 21.9821 12.3656 21.9179L20.6156 17.2773C20.7317 17.2113 20.8284 17.1159 20.8959 17.0007C20.9634 16.8855 20.9993 16.7545 21 16.621V16.621Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5938 14.2969V9.42188L7.5 4.40625"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20.8973 6.99414L12.0848 12.0004L3.10352 6.99414"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.0844 12L12 22.0125"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1315_607">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title="Package"
                  // {visible === true ? open : open ={false}}
                  // open={visible} 
                >
                  <MenuItem
                    active={activeNav === `/allpackage` ? true : false}
                    onClick={() => setActiveNave("/allpackage")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/allpackage">All Package</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === "/addpackage" ? true : false}
                    onClick={() => setActiveNave("/addpackage")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/addpackage">Add package</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/add_package_type` ? true : false}
                    onClick={() => setActiveNave("/add_package_type")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/add_package_type">Add Package Type</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === `/add_duration` ? true : false}
                    onClick={() => setActiveNave("/add_duration")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/add_duration">Add Duration</NavLink>
                  </MenuItem>
                </SubMenu>

                {/* -------------------------------------------Ticket---------------------------- */}
                <SubMenu
                  active={activeNav === `/alluser` ? true : false}
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1315_639)">
                        <path
                          d="M19.7167 3.36572L2.24166 8.28759C2.0929 8.32826 1.9603 8.4138 1.86191 8.53256C1.76353 8.65131 1.70414 8.79751 1.69184 8.95123C1.67954 9.10496 1.71493 9.25874 1.79319 9.39162C1.87144 9.52451 1.98876 9.63004 2.12916 9.69384L10.1542 13.4907C10.3114 13.5635 10.4376 13.6898 10.5104 13.847L14.3073 21.872C14.3711 22.0124 14.4766 22.1297 14.6095 22.2079C14.7424 22.2862 14.8962 22.3216 15.0499 22.3093C15.2036 22.297 15.3498 22.2376 15.4686 22.1392C15.5873 22.0408 15.6729 21.9082 15.7135 21.7595L20.6354 4.28447C20.6727 4.15695 20.675 4.02174 20.6421 3.89302C20.6092 3.7643 20.5422 3.64681 20.4483 3.55286C20.3543 3.45891 20.2368 3.39197 20.1081 3.35904C19.9794 3.32611 19.8442 3.32842 19.7167 3.36572V3.36572Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.3965 13.6027L14.634 9.36523"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1315_639">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title="Ticket"
                >
                  <MenuItem
                    active={activeNav === `/allticket` ? true : false}
                    onClick={() => setActiveNave("/allticket")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/allticket">All Ticket</NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === "/addticket" ? true : false}
                    onClick={() => setActiveNave("/addticket")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/addticket">Add Ticket</NavLink>
                  </MenuItem>
                </SubMenu>

                {/* -------------------report--------------------------------------- */}
                <SubMenu
                  active={activeNav === `/alluser` ? true : false}
                  icon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1315_628)">
                        <path
                          d="M21 19.5H3V4.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.5 6L12 13.5L9 10.5L3 16.5"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.5 9.75V6H15.75"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1315_628">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title="Report"
                >
                  <MenuItem
                    active={activeNav === `/userReport` ? true : false}
                    onClick={() => setActiveNave("/userReport")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/userReport">User Report </NavLink>
                  </MenuItem>
                  <MenuItem
                    active={activeNav === "/salesReport" ? true : false}
                    onClick={() => setActiveNave("/salesReport")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/salesReport">Sales Report </NavLink>
                  </MenuItem>

                  <MenuItem
                    active={activeNav === "/ticketReport" ? true : false}
                    onClick={() => setActiveNave("/ticketReport")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/ticketReport">Ticket Report </NavLink>
                  </MenuItem>

                  <MenuItem
                    active={activeNav === "/orderReport" ? true : false}
                    onClick={() => setActiveNave("/orderReport")}
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.74408 15.5893C7.41864 15.2639 7.41864 14.7362 7.74408 14.4108L12.1548 10L7.74408 5.58929C7.41864 5.26387 7.41864 4.73621 7.74408 4.41079C8.06952 4.08537 8.59717 4.08537 8.92258 4.41079L13.9226 9.41079C14.248 9.73621 14.248 10.2639 13.9226 10.5893L8.92258 15.5893C8.59717 15.9147 8.06952 15.9147 7.74408 15.5893Z"
                          fill="#212121"
                        />
                      </svg>
                    }
                  >
                    <NavLink to="/orderReport">Order Report </NavLink>
                  </MenuItem>
                </SubMenu>

                {/* ==notification======== */}
                <MenuItem
                  active={
                    activeNav === "/notification" || activeNav === `/preview`
                      ? true
                      : false
                  }
                  onClick={() => setActiveNave("/notification", `/preview`)}
                  icon={
                  <GrNotification style={{height:"20px",width:"20px", fontWeight:"500"}}/>
                  }
                >
                  {" "}
                  <NavLink exact to="/notification">
                    Notification
                  </NavLink>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideNav;
