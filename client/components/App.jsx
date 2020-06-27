import React, { Component } from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Main from "./Main.jsx";
import testLogin from "./testLogin.jsx";
import Testpage from "./testpage.jsx";


console.log("app.jsx");

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route component={testLogin}  path='/' exact={true} />
          <Route path='/app/myapp' component={Testpage} />
        </Switch>
      </div>
    );
  }
}

export default App;
