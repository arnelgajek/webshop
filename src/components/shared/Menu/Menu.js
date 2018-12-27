import React from "react";
import { Link } from "react-router-dom";

import './Menu.css';
import RightMenu from "../Rightmenu/Rightmenu";
import { WebshopConsumer } from "../../../webshop.context";

class Menu extends React.Component {

  render() {
    return (
      <div className="ui container">
        <Link to="/" className="item">
          <i className="large chess king icon" />KingPim
        </Link>
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/products" className="item">
          Products
        </Link>
        <Link to="/about" className="item">
          About
        </Link>
        <div className="right menu">
        <WebshopConsumer>
        {({ openLoginModal }) => (
        <Link to="" className="item" onClick={openLoginModal} >
        <RightMenu />
        </Link>
        )}
        </WebshopConsumer>
        </div>
      </div>
    );
  }
}

export default Menu;
