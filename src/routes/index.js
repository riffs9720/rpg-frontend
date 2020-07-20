import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from '../routes/PrivateRoute';
import MestreRoute from '../routes/MestreRoute';

import Login from '../pages/Login/';
import Dashboard from '../pages/Mestre/Dashboard/';
import Ficha from '../pages/Player/Ficha/'
import CadastroPlayer from '../pages/Mestre/CadastroPlayer/'
import CadastroEquipamento from '../pages/Mestre/CadastroEquipamentos/'
import CadastroBestiario from '../pages/Mestre/CadastroBestiario/'
import CadastroMagia_Item from '../pages/Mestre/CadastroMagia-Item/'
import NotFound from '../pages/NotFound/'
import Redirecionador from '../pages/Redirecionador/'
import ListagemBestiario from '../pages/Mestre/ListagemBestiario'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Login} exact path="/Login"/>
            <Route component={Login} exact path="/"/>
            <Route component={NotFound} exact path="/404" />
            <Route component={ListagemBestiario} exact path="/ListagemBestiario" />
            <PrivateRoute component={NotFound} exact path="/404" />
            <MestreRoute component={Dashboard} exact path="/Mestre-Dashboard" />
            <PrivateRoute component={Ficha} exact path="/Player-Ficha" />
            <PrivateRoute component={Redirecionador} exct path="/Redirecionador" />
            <MestreRoute component={CadastroPlayer} exact path="/Mestre-CadastroDePlayer" />
            <MestreRoute component={CadastroEquipamento} exact path="/Mestre-CadastroDeEquipamento" />
            <MestreRoute component={CadastroBestiario} exact path="/Mestre-CadastroBestiario" />
            <MestreRoute component={CadastroMagia_Item} exact path="/Mestre-CadastroMagia_Item" />
            <Redirect to="/404" />
        </Switch>
    </BrowserRouter>    
);

export default Routes;