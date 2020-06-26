import { BrowserRouter, Route, Switch, Link,NavLink } from 'react-router-dom';
import React, { Component } from "react";
import Login from './login.js'

// Routes the Home Page to the Feed Page
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/'> <Login/> </Route> 
                {/* <Route path='/trello' component={trello} /> */}
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
