import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import HomePage from "./pages/homapage/Homepage";
import JobPage from "./pages/jobpage/JobPage";

class HashLinks extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/job/:id' component={JobPage} />
        </Switch>
      </div>
    );
  }
}
export default HashLinks;
