import React from "react";

import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
        <div className="searchBar ui large search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Search..." />
              <i className="search icon" />
          </div>
        </div>
    );
  }
}

export default SearchBar;
