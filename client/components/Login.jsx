import React, { Component } from "react";
import { render } from "react-dom";
import { Switch, Route, Link } from "react-router-dom";
import Main from './Main.jsx';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      data: [],
    }
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword= this.onChangePassword.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  
  onChangeUsername (e) {
    this.setState({
      username: e.target.value,
    })
  }
  onChangePassword (e) {
    this.setState({
      password: e.target.value,
    })
  }

  login() {
    fetch('http://localhost:3000/login', 
    {
          method: "POST",
          body: JSON.stringify({username: this.state.username, password: this.state.password}),
          headers: { "Content-Type": "application/json" },
        })
      .then(res => {
        return res.json();
      })
      .then(data => {
        // { column: 'todo', text: 'yerrrr'}
        console.log(`data ${data}`);
        return this.setState({ 
          data: [{column: data.col, text: data.text}]
        });
      })
      .catch(err => console.log(`fetch error ${err}`));
  }

  signup() {
    fetch(`/signup`, 
    {
          method: "POST",
          body: JSON.stringify({username: this.state.username, password: this.state.password}),
          headers: { "Content-Type": "application/json" },
        })
      // .then(res => {
      //   return res.json();
      // })
      // .then(data => {
      //   // { column: 'todo', text: 'yerrrr'}
      //   console.log(`data ${data}`);
      //   return this.setState({ 
      //     data: [{column: data.col, text: data.text}]
      //   });
      // })
      .catch(err => console.log(`fetch error ${err}`));
  }

  render() {       
    return (
      <div>
        <input type='text' onChange={this.onChangeUsername} />
        <input type='text' onChange={this.onChangePassword} />
        <button onClick={this.login}> </button>
        <button onClick={this.signup}></button> 
        <Link to='/Main'>      
          <button>TEST MAIN</button>
        </Link>
        
  
        {/* <input type='text' />
        <input type='text' />
        <button> sign up</button>
        <Link to='/Main'>
          <button> login</button>
        </Link>
        <h1>yer</h1> */}

{/* // const cards=[];
    
    // for (let i = 0; i < this.state.data.length; i++) {
      
    //   console.log(this.state.data[i]);
    //   cards.push(this.state.data[i])      
    // } */}

      </div>
    );
  }
}

export default Login;