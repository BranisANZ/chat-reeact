import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import ChatContainer from "./ChatContainer";
import Settings from "./Settings";

const Routes = () => (
  <Router>
    <div>
      <Link to="/chat">
        <FormattedMessage id="menu.chat" />
      </Link>
      <br />
      <Link to="/">
        <FormattedMessage id="menu.settings" />
      </Link>
      <hr />
      <Route exact path="/" component={Settings} />
      <Route path="/chat" component={ChatContainer} />
    </div>
  </Router>
);

export default Routes;
