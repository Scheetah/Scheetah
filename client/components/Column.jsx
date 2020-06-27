import React, { Component } from "react";
import { render } from "react-dom";
import Sticky from "./Sticky.jsx";

class Column extends Component {
  render() {
    return (
      <div className= "column">
        <h1>{this.props.name}</h1>
        <Sticky />
        {/* have to figure out how to get all the sticky notes for the exact column using the data key: column. the value is the column name */}
      </div>
    );
  }
}
export default Column;
