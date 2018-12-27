import React from "react";

class Memory extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h4>MEMORY</h4>
        <select name="memory" multiple="" className="ui fluid dropdown">
          <option value="">Memory</option>
          <option value="8gb">8 GB 2400 MHz ddr4</option>
          <option value="16gb">16 GB 2400 MHz ddr4 + 2 200,00 kr</option>
          <option value="32gb">32 GB 2400 MHz ddr4 + 6 600,00 kr</option>
          <option value="64gb">64 GB 2400 MHz ddr4 + 15 400,00 kr</option>
        </select>
      </div>
    );
  }
}

export default Memory;
