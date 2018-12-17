import React from "react";

import ProductDetail from "../productdetail/ProductDetail";

class ProductList extends React.Component {
  render() {
    return (
      <div className="productList">
        <ProductDetail />
      </div>
    );
  }
}

export default ProductList;
