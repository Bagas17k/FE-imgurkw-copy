import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/index";
import Home from "../page/Home";
import Signin from "../page/SignIn";
import Signup from "../page/SignUp";
import UploadImage from "../page/UploadImage";

const MainRoute = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/upload/image" component={UploadImage} />
          <Route exact path="/tags/:id" component={Home} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoute;
