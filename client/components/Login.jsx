import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from "react-router-dom";


class Login extends Component {
  render() {
      {username, password, signup} = this.props;
      return(
          <div>
              <input type="text" onChange={username}/>
              <input type="text" onChange={password}/>
              <button onClick={login}> </button>
              <Link to='/Signup'>
              <button onClick={signup}> </button>
              </Link>
           </div>
      );
    }
}


export default Login;
