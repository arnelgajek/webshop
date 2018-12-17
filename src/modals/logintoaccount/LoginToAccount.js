import React from "react";
import Modal from "react-modal";

import "./LoginToAccount.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

class LoginToAccount extends React.Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} style={customStyles}>
        <div className="modal">
          <div className="ui placeholder segment">
            <i
              className="close icon"
              onClick={this.props.onClose}
              onRequestClose={this.props.onClose}
            />
            <div className="ui two column very relaxed stackable grid">
              <div className="left-column column">
                <h1 className="login-h1">Sign in</h1>
                <div className="ui form">
                  <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                      <input type="text" placeholder="Username" />
                      <i className="user icon" />
                    </div>
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                      <input type="password" placeholder="Password" />
                      <i className="lock icon" />
                    </div>
                  </div>
                  <div className="ui green submit button">Login</div>
                </div>
              </div>
              <div className="right-column column">
                <h1 className="signup-h1">Sign up</h1>
                <div className="ui middle aligned small blue button">
                  <i className="facebook f icon" />
                  With Facebook
                </div>
                <div className="ui middle aligned small red button">
                  <i className="google plus g icon" />
                  With Gmail
                </div>
              </div>
            </div>
            <div className="ui vertical divider">Or</div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default LoginToAccount;
