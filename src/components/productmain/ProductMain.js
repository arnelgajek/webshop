import React from "react";

import "./ProductMain.css";
import iMac from "../shared/Images/iMac.jpeg";
import ProductTitle from "../producttitle/ProductTitle";
import ProductParagraph from "../productparagraph/ProductParagraph";
import ProductPrize from "../productprice/ProductPrice";
import Processor from "../processor/Processor";
import Memory from "../memory/Memory";
import Storage from "../storage/Storage";
import Hardware from "../hardware/Hardware";
import ProductAddToCart from "../productaddtocart/ProductAddToCart";
import BreadCrumbProduct from "../shared/BreadCrumbProduct/BreadCrumbProduct";

class ProductMain extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide column" style={{ marginTop: "100px" }} />
          <div className="breadcrumb-container ui fixed container">
            <BreadCrumbProduct />
          </div>
          <div className="product-image-container six wide column">
            <img className="ui large image" src={iMac} alt="iMac" />
          </div>
          <div className="product-information ten wide column">
            <ProductTitle />
            <ProductParagraph />
          </div>
          <div className="product-alternative ui grid">
            <div className="four wide column">
              <Processor />
            </div>
            <div className="four wide column">
              <Memory />
            </div>
            <div className="four wide column">
              <Storage />
            </div>
            <div className="four wide column">
              <Hardware />
            </div>
          </div>
          <div className="sixteen wide column" />
          <div className="ui divider" style={{ width: "100%" }} />
          <br />
          <br />
          <br />
          <div className="price-and-addToCart ui grid">
            <div className="sixteen wide column">
              <ProductPrize />
              <ProductAddToCart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductMain;
