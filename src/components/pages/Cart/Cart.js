import React from "react";

import "./Cart.css";
import CartList from "../../cartlist/CartList";

class Cart extends React.Component {
  render() {
    return (
      <div className="ui container">
        <CartList />
      </div>
    );
  }
}

export default Cart;
