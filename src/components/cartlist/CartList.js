import React from "react";

import "./CartList.css";
import CartItem from "../cartitem/CartItem";
import CartTitel from "../carttitel/CartTitel";
import { WebshopConsumer } from "../../webshop.context";
import { Link } from 'react-router-dom';

class CartList extends React.Component {
  render() {
    return (
      <WebshopConsumer>
        {({ deleteButtonProp }) => {
          return (
            <div className="cartList">
              <CartTitel />
              {!deleteButtonProp ? <CartItem /> : ""}
              <CartItem />
              <div className="ui grid">
                <div className="ui divider" style={{ width: "100%" }} />
                <div className="fake-total-price ui sixteen wide column">
                  <h1 className="fake-total-price-h1">46 990,00 kr</h1>
                </div>
                <div className="checkout-button ui sixteen wide column">
                  <button className="continueshopping-button ui basic button">
                    <Link to="/products" className="item">
                      Continue Shopping
                    </Link>
                  </button>
                  <button className="ui positive basic button">Checkout</button>
                </div>
              </div>
            </div>
          );
        }}
      </WebshopConsumer>
    );
  }
}

export default CartList;
