import React from "react";

import SearchBar from "../searchbar/SearchBar";
import ProductList from "../productlist/ProductList";
import Pagination from "../pagination/Pagination";
import "./ProductsMain.css";
// import BreadCrumbProducts from '../BreadCrumbProducts/BreadCrumbProducts';

class ProductMain extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="sixteen wide column" style={{ marginTop: "100px" }} />
          {/* <div className="breadcrumb-container ui fixed container">
          <BreadCrumbProducts />
          </div> */}
          <div className="sixteen wide column">
            <SearchBar />
          </div>
          <div className="sixteen wide column" style={{ marginTop: "100px" }} />
          <div className="checkboxes sixteen wide column">
            <div className="ui centered grid">
              <div className="computers-checkbox ui checkbox">
                <input type="checkbox" name="example" checked="checked" />
                <label>Computers</label>
              </div>
              <div className="phones-checkbox ui checkbox">
                <input type="checkbox" name="example" />
                <label>Phones</label>
              </div>
              <div className="tablets-checkbox ui checkbox">
                <input type="checkbox" name="example" />
                <label>Tablets</label>
              </div>
              <div className="accessories-checkbox ui checkbox">
                <input type="checkbox" name="example" />
                <label>Accessories</label>
              </div>
            </div>
          </div>
          <br />
          <div className="sixteen wide row">
            <div className="four wide column">
              <ProductList />
            </div>
            <div className="four wide column">
              <ProductList />
            </div>
            <div className="four wide column">
              <ProductList />
            </div>
            <div className="four wide column">
              <ProductList />
            </div>
          </div>
          <div className="sixteen wide row">
            <div className="four wide column">
              <ProductList />
            </div>
            <div className="four wide column">
              <ProductList />
            </div>
            <div className="four wide column">
              <ProductList />
            </div>
            <div className="four wide column">
              <ProductList />
            </div>
          </div>
          <br />
        </div>
        <div className="ui grid">
          <div className="sixteen wide row">
            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductMain;
