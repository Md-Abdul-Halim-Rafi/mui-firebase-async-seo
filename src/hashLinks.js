import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homapage/Homepage";
import JobPage from "./pages/jobpage/JobPage";
import NotFoundPage from "./pages/404";

class HashLinks extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/job/:id' component={JobPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}
export default HashLinks;
