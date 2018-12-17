import React from 'react';

import './Header.css';
import Menu from "../../shared/Menu/Menu";

class Header extends React.Component {
    render() {
        return (
            <div className="ui fixed inverted menu">
            <Menu />
            </div>
        );
    }
}

export default Header;