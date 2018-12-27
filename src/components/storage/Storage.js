import React from "react";

class Storage extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h4>STORAGE</h4>
        <select name="storage" multiple="" className="ui fluid dropdown">
          <option value="">Storage</option>
          <option value="8gb">1 TB Fusion Drive</option>
          <option value="16gb">2 TB Fusion Drive + 2 200,00 kr</option>
          <option value="32gb">3 TB Fusion Drive</option>
          <option value="64gb">256 GB ssd - 2 200,00 kr</option>
          <option value="64gb">512 GB ssd</option>
          <option value="64gb">1 TB ssd + 4 400,00 kr</option>
        </select>
      </div>
    );
  }
}

export default Storage;
