import React from "react";

import "./ProductParagraph.css";

class ProductParagraph extends React.Component {
  render() {
    return (
      <div className="ui container">
        <p className="product-paragraph">
          3,5 GHz fyrkärnig sjunde generationen Intel Core i5-processor Turbo
          Boost upp till 4,1 GHz 8 GB 2400 MHz minne, kan konfigureras med upp
          till 64 GB 1 TB Fusion Drive1 Radeon Pro 575 med 4 GB grafikminne Två
          Thunderbolt 3-portar Retina 5K-skärm med 5120 × 2880 pixlar (P3)
        </p>
      </div>
    );
  }
}

export default ProductParagraph;
