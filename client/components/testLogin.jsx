import React, { Component } from "react";

class Login extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)

        this.usernameInput = React.createRef();
        this.passwordInput = React.createRef();
    }

    onSubmit (e){

        e.preventDefault()

        const user = this.usernameInput.current.value
        const pass = this.passwordInput.current.value

        // console.log(user, pass)

    
        const data = { username: user, password: pass}


        fetch(`http://localhost:3000/${user}`, {
        method: 'GET', // or 'PUT'
        //   mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        }).then((data) => {if (data.status === 201) {console.log(data, 'working!')}}) //redirect
        .catch((error) => {
        console.error('Error:', error);
        });
    }

    render(){
        return (
            <div>
                <form className='instagram-login' onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="username"></label>
                        <input type="text" name="username" ref={this.usernameInput} className="username" placeholder='Phone number, username or email' />
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="password" name="password" ref={this.passwordInput} className="password" placeholder='Password' />
                    </div>
                    <button type="submit">Log In</button>    
                </form>
            </div>
        )
    }
}

export default Login;