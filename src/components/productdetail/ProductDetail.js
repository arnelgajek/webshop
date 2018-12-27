import React from "react";

import './ProductDetail.css';
import ProductTitle from "../producttitle/ProductTitle";
import ProductPrice from "../productprice/ProductPrice";
import iMac from "../shared/Images/iMac.jpeg";
import ProductParagraph from "../productparagraph/ProductParagraph";

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="productDetail">
        <div className="ui raised card">
          <a className="image" href="/product">
            <img src={iMac} alt="iMac" />
          </a>
          <div className="ui content">
            <a href="/product" className="header">
              <ProductTitle />
            </a>
            <div className="description">
            <a href="/product">
              <ProductParagraph />
              </a>
            </div>
            <div className="meta">
              <span className="price">
              <a href="/product">
                <ProductPrice />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
