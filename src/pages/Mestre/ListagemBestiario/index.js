import React from 'react'

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import BarraNavegacaoMestre from "../../../components/BarraNavegacao/BarraNavegacaoMestre";

import { Container, Select } from './styles'

const ListagemBestiario = () => {

  const img = 'goblin.png'

  const completo = require('../../../assets/Images/teste/'+ img)

  return(
    <>
    <BarraNavegacaoMestre />
    <Container>
      <h1>Listagem Bestiario</h1>
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Criatura</InputLabel>
        <Select>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <br/><br/>
      <img src={completo} width="350" height="400"/>      
    </Container>
    </>
    
  )

}

export default ListagemBestiario;