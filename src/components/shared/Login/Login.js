import React from "react";

import "./Login.css";
import { WebshopConsumer } from "../../../webshop.context";

class Login extends React.Component {
  render() {
    return (
      <WebshopConsumer>
        {({ openLoginModal }) => (
          <i
            onClick={openLoginModal}
            className="large user outline icon"
          />
        )}
      </WebshopConsumer>
    );
  }
}

export default Login;
