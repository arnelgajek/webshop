import React from "react";

class Hardware extends React.Component {
  render() {
    return (
      <div className="ui container">
        <h4>HARDWARE</h4>
        <select name="hardware" multiple="" className="ui fluid dropdown">
          <option value="">Hardware installed</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
      </div>
    );
  }
}

export default Hardware;
