import React from 'react'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Ficha from '../pages/Player/Ficha/Ficha'
import CadastroPlayer from '../pages/Mestre/CadastroPlayer/CadastroPlayer'
import CadastroEquipamento from '../pages/Mestre/CadastroEquipamentos/CadastroEquipamento'
import CadastroBestiario from '../pages/Mestre/CadastroBestiario/CadastroBestiario'
import CadastroMagia_Item from '../pages/Mestre/CadastroMagia-Item/CadastroMagia-Item'
import NotFound from '../pages/NotFound/PageNotFound'
import Dashboard from '../pages/Mestre/Dashboard/Dashboard'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Login} exact path="/Login" />
      <Route component={Login} exact path="/" />
      <Route component={NotFound} exact path="/404" />
      <Route component={Dashboard} exact path="/Mestre-Dashboard" />
      <Route component={Ficha} exact path="/Player-Ficha" />
      <Route component={CadastroPlayer} exact path="/Mestre-CadastroDePlayer" />
      <Route component={CadastroEquipamento} exact path="/Mestre-CadastroDeEquipamento" />
      <Route component={CadastroBestiario} exact path="/Mestre-CadastroBestiario" />
      <Route component={CadastroMagia_Item} exact path="/Mestre-CadastroMagia_Item" />
      <Redirect to="/404" />
    </Switch>
  </BrowserRouter>
);

export default Routes;