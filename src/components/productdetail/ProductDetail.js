import React from "react";

import ProductTitle from "../producttitle/ProductTitle";
import ProductPrice from "../productprice/ProductPrice";
import ProductCheckOut from '../productcheckout/ProductCheckOut';
import iMac from "../shared/Images/iMac.png";
import ProductParagraph from "../productparagraph/ProductParagraph";

class ProductDetail extends React.Component {
  render() {
    return (
      <div className="productDetail">
        <div className="ui raised card">
          <div className="image">
            <img src={iMac} alt="iMac" />
          </div>
          <div className="ui content">
            <a href="/" className="header">
              <ProductTitle />
            </a>
            <div className="meta">
              <span className="price">
                <ProductPrice />
              </span>
            </div>
            <div className="description">
            <ProductParagraph />
            </div>
            <div className="checkout">
                <ProductCheckOut />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
