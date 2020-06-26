import { BrowserRouter, Route, Switch, Link,NavLink } from 'react-router-dom';
import React, { Component } from "react";

// Routes the Home Page to the Feed Page
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
            
                <Route path='/'> </Route> 
               
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
