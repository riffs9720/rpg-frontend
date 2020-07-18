import React, { useCallback, useState } from 'react'
import Som from '../../components/Musica/Introducao'

import { Form } from 'react-bootstrap';

import { Redirect } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

import Loading from '../../components/Loading/index';

import { Tittle, BackGround, Container, TextField, Button } from "./styles";

const Login = () => {

  const { signed, signIn, loading } = useAuth();
  const [ nome, setNome ] = useState("");
  const [ senha, setSenha ] = useState("");

    const handleSignIn = useCallback( () => {
				signIn(nome, senha);
    }, [nome, senha, signIn]);

    
    if (loading) {
        return (
          <Loading/>
        )    
    }

  return (
    <div>
      { signed ? (    
        <Redirect to='/Redirecionador' />
      ) : (
        <>        
          <Som />
          <BackGround>
            <Tittle>Adventures of the Arrombs</Tittle>
            <Container>
                  <div />
                  <Form >
                    <TextField
                      id="email"
                      onChange={e => setNome(e.target.value)}
                      label="Login"
                      placeholder="exemple: MestreDosMagos"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        className: 'LabelPropsLogin'
                      }}
                      InputProps={{
                        className: 'InputPropsLogin'
                      }}
                    />
                    <div className="espaco" />
                    <TextField
                      id="password"
                      label="Senha"
                      onChange={e => setSenha(e.target.value)}
                      placeholder="●●●●●●●●●●"
                      type="password"
                      fullWidth
                      margin="normal"
                      InputLabelProps={{
                        className: 'LabelPropsLogin'
                      }}
                      InputProps={{
                        className: 'InputPropsLogin'
                      }}
                    />
                    <div className="lineButton">
                      <div />
                      <Button 
                      type="button"  
                      ariant="contained" 
                      onClick={handleSignIn} 
                    >
                      Logar
                    </Button>  
                  <div />
                </div>
              </Form>
            </Container>
          </BackGround>
        </>
      )}
    </div>
  )
}

export default Login;