import React from "react";

import ChristmasBgImage from "../../shared/Images/christmas.jpg";

import "./Start2.css";

class Start2 extends React.Component {
  render() {
    return (
      <div className="ui container fluid">
      {/* <div className="ui container">
      <div className="big-selling-point sixteen wide column">
      <div className="ui raised card">
        <div className="big-selling-content content">
        <p className="big-selling-header header">FREE SHIPPING</p>
        <div className="big-selling-description description">
            Free shipping with deliveries and reclaims.
          </div>
        </div>
      </div>
    </div>
    </div> */}
      <div className="ui grid">
        <img
          className="start-page-image"
          src={ChristmasBgImage}
          alt="background_stuff"
        />
        <h1 className="start-banner ui">
          <i className="merry-christmas">Merry Christmas</i>
        </h1>
        <div className="selling-point-one five wide column">
          <div className="ui raised card">
            <i className="shipping-icon ui massive truck icon" />
            <div className="shipping-content content">
              <p className="shipping-header header">FREE SHIPPING</p>
              <div className="shipping-description description">
                Free shipping with deliveries and reclaims.
              </div>
            </div>
          </div>
        </div>
        <div className="selling-point-two five wide column">
          <div className="ui raised card">
            <i className="payment-icon ui massive cc mastercard icon" />
            <div className="payment-content content">
              <p className="payment-header header">PAYMENT METHODS</p>
              <div className="payment-description description">
                Multiple payment methods of your choice.
              </div>
            </div>
          </div>
        </div>
        <div className="selling-point-three five wide column">
          <div className="ui raised card">
            <i className="customer-service-icon ui massive thumbs up outline icon" />
            <div className="customer-service-content content">
              <p className="customer-service-header header">CUSTOMER SERVICE</p>
              <div className="customer-service-description description">
                Top of the line customer service 24/7.
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Start2;
