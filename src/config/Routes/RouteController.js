import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Course, Home, Login, NotFound, Register} from "../../pages/PagesIndex";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/course"} component={Course}/>
        <Route path={"/login"} component={Login}/>
        <Route path={"/register"} component={Register}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

export default Routes;
