import React, { Component } from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Main from "./Main.jsx";

console.log("app.jsx");

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route component={Login} exact path='/' />
          <Route component={Main} path='/Main' />
        </Switch>
      </div>
    );
  }
}

export default App;
