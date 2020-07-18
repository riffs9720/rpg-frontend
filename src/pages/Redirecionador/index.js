import React from 'react'

import { Redirect } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import Loading from '../../components/Loading/index';


const Redirecionador = () => {

  const { loading } = useAuth();

  const nivelAcesso = localStorage.getItem('@authApp: nivel');

  let nivel;

  if(nivelAcesso === '"Mestre"') {
    nivel = true;
  }else {
    nivel = false;
  }
   
    if (loading) {
        return (
            <div className='loading'>
                <Loading/>
            </div>
        )    
    }
    
  return (
    <div>
      { nivel ? (    
        <Redirect to='/Mestre-Dashboard' />
      ) : (
        <Redirect to='/Player-Ficha' />
      )}
    </div>
  )
}

export default Redirecionador;