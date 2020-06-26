import React from 'react';
// import React, { Component } from "react";

export default class Login extends React.Component {
    constructor(props){
        super(props)

        // this.usernameInput = React.createRef();
        // this.passwordInput = React.createRef();
        // this.onSubmit = this.onSubmit.bind(this)
    }

    // onSubmit(e){
    //     e.preventDefault();
    //     const username = this.usernameInput.current.value
    //     const password = this.passwordInput.current.value
    //     console.log(username, password)
    // }


    render(){
        return (
            <div>
            <form method="post" action='/login'>
                <input name="username" type="text" placeholder="username"></input>
                <input name="password" type="password" placeholder="password"></input>
                <input type='submit' value="login"></input>
            </form>
        </div>
        )
    }
}

