import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      //where the board will render with all the sticky notes
      <div className='container'>
        <div className='header'></div>

        <div className='BoardBody'></div>

        <div className='footerNewSticky&logoutbutton'></div>
      </div>
    );
  }
}

export default Main;
