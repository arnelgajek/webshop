import React from "react";

import "./ProductAddToCart.css";

class ProductAddToCart extends React.Component {
  render() {
    return (
      <div className="productAddToCartIcon">
        <a href="/cart">
          <i className="big green cart plus icon" /><strong>BUY</strong>
        </a>
      </div>
    );
  }
}
export default ProductAddToCart;
