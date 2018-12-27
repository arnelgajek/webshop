import React from "react";

import "./DeleteCartItem.css";
import { WebshopConsumer } from "../../webshop.context";

class DeleteCartItem extends React.Component {
  render() {
    return (
      <WebshopConsumer>
        {({ fakeDeleteCartItem }) => (
          <div className="ui negative basic button" onClick={fakeDeleteCartItem}>
            Delete
          </div>
        )}
      </WebshopConsumer>
    );
  }
}

export default DeleteCartItem;
