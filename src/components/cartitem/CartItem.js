import React from "react";

import "./CartItem.css";
import iMac from "../shared/Images/iMac.jpeg";
import ProductTitle from "../producttitle/ProductTitle";
import ProductParagraph from "../productparagraph/ProductParagraph";
import ProductPrice from "../productprice/ProductPrice";
import DeleteCartItem from "../deletecartitem/DeleteCartItem";

class CartItem extends React.Component {
  render() {
    return (
        <div className="cartItem ui grid">
          <div className="ui divider" style={{ width: "100%" }} />
          <div className="five wide column">
            <img className="cartImage ui medium image" src={iMac} alt="iMac" />
          </div>
          <div className="title-and-paragraph five wide column">
            <ProductTitle />
            <ProductParagraph />
          </div>
          <div className="delete-button two wide column">
            <DeleteCartItem />
          </div>
          <div className="product-price four wide column">
            <ProductPrice />
          </div>
        </div>
    );
  }
}

export default CartItem;
