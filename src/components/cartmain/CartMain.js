import React from "react";

import "./CartMain.css";
import CartList from "../cartlist/CartList";

class CartMain extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <CartList />
        </div>
      </div>
    );
  }
}

export default CartMain;
