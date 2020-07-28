import React from "react";
import { Route } from "react-router-dom";
import PaymentList from "./containers/PaymentListView";
import PaymentDetail from "./containers/PaymentDetail";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Store from "./containers/Store";
import Validate from "./containers/Validate";
import Notifications from "./containers/Notifications";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={PaymentList} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    <Route exact path="/store/" component={Store} />
    <Route exact path="/validate/" component={Validate} />
    <Route exact path="/notifications/" component={Notifications} />
    <Route exact path="/validate/:paymentid" component={PaymentDetail} />
  </div>
);

export default BaseRouter;
