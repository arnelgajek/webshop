import React from "react";

import "./Login.css";
import { WebshopConsumer } from "../../../webshop.context";

class Login extends React.Component {
  render() {
    return (
      <WebshopConsumer>
        {({ openLoginModal }) => (
          <div className="account-login-icon">
          <i onClick={openLoginModal} className="large user outline icon" /> Account
          </div>
        )}
      </WebshopConsumer>
    );
  }
}

export default Login;
