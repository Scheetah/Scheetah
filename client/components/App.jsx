import React, { Component } from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Login from "./Login.jsx";
import Main from "./Main.jsx";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';


console.log("app.jsx");

class App extends Component {
  render() {
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <Switch>
            <Route component={Login} exact path='/' />
            <Route component={Main} path='/Main' />
          </Switch>
        </DndProvider>
      </div>
    );
  }
}

export default App;
