import React from "react";

class ProductSize extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h4>PRODUCTSIZE</h4>
        <div className="ui selection dropdown">
          <i className="dropdown icon" />
          <div className="default text">Size</div>
          <div className="ui menu">
            <div className="ui item">XS</div>
            <div className="ui item">S</div>
            <div className="ui item">M</div>
            <div className="ui item">L</div>
            <div className="ui item">XL</div>
            <div className="ui item">XXL</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSize;
