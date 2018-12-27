import React from 'react';

import './Product.css';
import ProductMain from '../../productmain/ProductMain';

class Product extends React.Component {
    render() {
        return (
            <div className="ui container">
                <ProductMain />
            </div>
        );
    }
}

export default Product;