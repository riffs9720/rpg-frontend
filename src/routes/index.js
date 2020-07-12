import React from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";

import PrivateRoute from '../routes/PrivateRoute';

import Login from '../pages/Login/Login';
import Dashboard from '../pages/Mestre/Dashboard/Dashboard';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/Login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>    
);

export default Routes;