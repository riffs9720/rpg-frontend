import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import Loading from '../components/Loading/index';


const PrivateRoute = ({ component: Component, ...props }) => {

    const { signed, loading } = useAuth();

    if (loading) {
        return <Loading />
    }

    return (

        <Route
            {...props}
            render={ () => signed
                ? <Component {...props} />
                : <Redirect to='/Login' /> 
            }
        />
    )
}

export default PrivateRoute;