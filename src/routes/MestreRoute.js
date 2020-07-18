import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import Loading from '../components/Loading/index';


const PrivateRoute = ({ component: Component, ...props }) => {

    const { signed, loading } = useAuth();
    const nivelAcesso = localStorage.getItem('@authApp: nivel');

    let nivel;
  
    if(nivelAcesso === '"Mestre"') {
      nivel = true;
    }else {
      nivel = false;
    }

    if (loading) {
        return <Loading />
    }

    return (

        <Route
            {...props}
            render={ () => signed && nivel
                ? <Component {...props} />
                : <Redirect to='/Login' /> 
            }
        />
    )
}

export default PrivateRoute;