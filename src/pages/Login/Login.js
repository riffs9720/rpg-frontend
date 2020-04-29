import React, { Component } from 'react'
import Som from '../../components/Musica/Introducao'

import { TextField, Button } from '@material-ui/core'
import { Form } from 'react-bootstrap';

import './Login.css'

export default class Login extends Component {
  render(){
    return (
      <>
    <Som />
    <div className="BackGround">
      <div className="Titulo">Adventures of the Arrombs</div>
      <div className="container">
        <div></div>
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
              <Button type="submit" className="botaoLogin" variant="contained" color="primary">Logar</Button>
            <div />
          </div>
          </Form>
        </div>
      </div>
    </div>
  </>
    )
  }
}
