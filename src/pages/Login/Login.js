import React, { useCallback } from 'react'
import Som from '../../components/Musica/Introducao'

import { TextField, Button } from '@material-ui/core'
import { Form } from 'react-bootstrap';

import { Redirect } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import SomeSpinner from '../../components/SomeSpinner';

import './Login.css'

const Login = () => {

  const { signed, signIn, loading } = useAuth();

    const handleSignIn = useCallback( () => {
        signIn();
    }, [signIn]);

    
    if (loading) {
        return (
            <div className='loading'>
                <h1>SignIn Page</h1>
                <SomeSpinner/>
            </div>
        )    
    }

  
    return (
      <>
    <Som />
    <div className="BackGround">
      <div className="Titulo">Adventures of the Arrombs</div>
      <div className="container">
        <div />
        <div className="Form">
        <Form >
          <TextField
            id="email"
            onChange={e => this.email = e.target.value}
            label="Login"
            placeholder="exemple: MestreDosMagos"
            fullWidth
            margin="normal"
            InputLabelProps={{
              className: 'FieldText'
            }}
          />
          <div className="espaco" />
          <TextField
            id="password"
            label="Senha"
            onChange={e => this.password = e.target.value}
            placeholder="●●●●●●●●●●"
            type="password"
            fullWidth
            margin="normal"
            InputLabelProps={{
              className: 'FieldText'
            }}
          />
          <div className="botao">
            <div />
            { signed ? (
                <Redirect to='./user' />
            ) : (
                  <Button type="button" className="botaoLogin" variant="contained" onClick={handleSignIn} color="primary">Logar</Button>
                  )}
            <div />
          </div>
          </Form>
        </div>
      </div>
    </div>
  </>
    )
}

export default Login;