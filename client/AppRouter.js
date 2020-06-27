import { BrowserRouter, Route, Switch, Link,NavLink } from 'react-router-dom';
import React, { Component } from "react";
import testLogin from "./components/testLogin";
import Testpage from "./components/testpage";

// Routes the Home Page to the Feed Page
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>

                <Route path='/' component={testLogin}> </Route> 
                <Route path='/app/myapp' component={Testpage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
