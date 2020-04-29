import React from 'react';
import { Router, Switch, Route } from 'react-router';

import { history } from '../history';
import Login from '../pages/login/Login';
import Ficha from '../pages/Player/Ficha/Ficha'
import CadastroPlayer from '../pages/Mestre/CadastroPlayer'


const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/Login" />
      <Route component={Login} exact path="/" />
      <Route component={Ficha} exact path="/Player-Ficha" />
      <Route component={CadastroPlayer} exact path="/Mestre-CadastroDePlayer" />
    </Switch>
  </Router>
);

export default Routes;
