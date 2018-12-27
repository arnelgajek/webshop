import React from "react";

import "./Processor.css";

class Processor extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h4>PROCESSOR</h4>
        <select name="processor" multiple="" className="ui fluid dropdown">
          <option value="">Processor</option>
          <option value="3,5">
            3,5 GHz fyrkärnig sjunde generationen Intel Core i5, Turbo Boost upp
            till 4,1 GHz
          </option>
          <option value="4,2">
            4,2 GHz fyrkärnig sjunde generationen Intel Core i7, Turbo Boost upp
            till 4,5 GHz
          </option>
        </select>
      </div>
    );
  }
}

export default Processor;
