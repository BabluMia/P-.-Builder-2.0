import React from "react"; //Needed for nodejs v.16

import "./App.css";
import { useState } from "react";
// import Login from "./modules/authentication/components/login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./modules/navbar/component/Header";
import ForgatePassword from "./modules/authentication/components/forgetpass/ForgatePassword";
import ResetPassword from "./modules/authentication/components/resetpass/ResetPassword";

// import UserContainer from "./modules/user/component/UserContainer";
import Login from "./modules/authentication/components/login/Login";
import UserContainer from "./modules/user/component/allUser/UserContainer";

import PackageContainer from "./modules/package/component/PackageContainer/PackageContainer";
import UserReportContainer from "./modules/report/component/userReport/component/UserReportContainer";
import SalesReportContainers from "./modules/report/component/salesReport/SalesReportContainers";
import TicketContainer from "./modules/report/component/Ticketreport/TicketContainer";
import OrderContainer from "./modules/report/component/orderReport/OrderContainer";
import TicketListContainer from "./modules/ticket/component/allTicket/TicketListContainer";
import UserDetailsContainer from "./modules/user/component/allUser/userDetails/UserDetailsContainer";
// import AddUser from "./modules/user/component/add_user/AddUser";
import BusinessInformation from "./modules/user/component/add_user/BusinessInformation";
import Document from "./modules/user/component/add_user/Document";
import Package from "./modules/user/component/add_user/Package";
// import Duration from "./modules/user/component/add_user/Duration";
// import AddProductType from "./modules/user/component/add_user/AddProductType";
import AddPackage from "./modules/package/component/AddPackage";
import Duration from "./modules/package/component/addDuration/Duration";
import AddProductType from "./modules/package/component/addPackageType/AddProductType";
// import AddProductType from "./modules/package/component/AddProductType";
import PackageView from "./modules/package/component/PackageContainer/PackageView";
import AddTicket from "./modules/ticket/component/addticket/AddTicket";
import Ticketdetails from "./modules/ticket/component/allTicket/Ticketdetails";
import Dashboard from "./modules/dashboard/component/Dashboard";
import AddUserContainer from "./modules/user/component/add_user/AddUserContainer";
import NotificationList from "./modules/notification/component/NotificationList";
import ViewUser from "./modules/navbar/component/ViewUser";
import BannerContainer from "./modules/Banner/BannerContainer";
import LandingPage from "./modules/LandingPage/LandingPage";

function App() {
  const [bodyWidth, setBodyWidth] = useState(false);
  const [hideToolbar, setHideToolbar] = useState(false);
  return (
    <div>
      <Router>
        <div
          className={` ${
            !bodyWidth && !hideToolbar
              ? "main-content"
              : !hideToolbar
              ? "main-content-collapsed"
              : ""
          }`}
        >
          {!hideToolbar && <Header setBodyWidth={setBodyWidth} />}
          <div>
            <Switch>
              <Route exact path="/">
                <LandingPage setHideToolbar={setHideToolbar} />
              </Route>
              <Route exact path="/login">
                <Login setHideToolbar={setHideToolbar} />
              </Route>
              <Route exact path="/alluser">
                <UserContainer />
              </Route>
              <Route exact path="/forgate_pass">
                <ForgatePassword setHideToolbar={setHideToolbar} />
              </Route>
              <Route exact path="/reset_pass">
                <ResetPassword setHideToolbar={setHideToolbar} />
              </Route>
              {/* portfolio builder */}
              <Route exact path="/add-banner">
                <BannerContainer/>
              </Route>
              {/* portfolio builder */}
              <Route exact path="/userDetails">
                <UserDetailsContainer />
              </Route>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
              <Route exact path="/allpackage">
                <PackageContainer />
              </Route>
              <Route exact path="/addpackage">
                <AddPackage />
              </Route>
              <Route exact path="/packageDetails">
                <PackageView />
              </Route>
              {/* -----report--------- */}
              <Route exact path="/userReport">
                <UserReportContainer />
              </Route>
              <Route exact path="/salesReport">
                <SalesReportContainers />
              </Route>
              <Route exact path="/ticketReport">
                <TicketContainer />
              </Route>
              <Route exact path="/orderReport">
                <OrderContainer />
              </Route>
              {/* ----ticket----------- */}
              <Route exact path="/allticket">
                <TicketListContainer />
              </Route>
              <Route exact path="/addticket">
                <AddTicket />
              </Route>
              <Route exact path="/ticketDetails">
                <Ticketdetails />
              </Route>
              {/* --------------add user------- */}
              <Route exact path="/adduser">
                <AddUserContainer  />
              </Route>
              <Route exact path="/business_info">
                <BusinessInformation  />
              </Route>
              <Route exact path="/document">
                <Document />
              </Route>
              <Route exact path="/package">
                <Package  />
              </Route>
              
              <Route exact path="/add_duration">
                <Duration  />
              </Route>
              <Route exact path="/add_package_type">
                <AddProductType />
              </Route>

              <Route exact path="/notification">
                <NotificationList />
              </Route>
              <Route exact path="/view_user">
                <ViewUser />
              </Route>
        
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
