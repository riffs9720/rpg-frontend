import React from "react";
import { TextField, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import BarraNavegacaoMestre from "../../../components/BarraNavegacao/BarraNavegacaoMestre";


import { Container } from "./styles";

export default function CadastroEquipamentos() {

  const defaultProps = {
    m: 1,
    border: 5,
    style: { width: "98%", height: "55vh" }
  };

  const oneLinha = {
    m: 1,
    border: 5,
    style: { width: "98%", height: "70%" },
  };

  return (
    <>
      <BarraNavegacaoMestre />
      <Container>
        <h1 className="textoBestiario">Bestiario</h1>
        <div className="divisorBestiario">
        <Box borderColor="#fab95f" borderRadius={16} {...oneLinha}>
        <div className="espacadorBestiario">
          <div className="colBestiario1">
          <TextField
                    required
                    id="standard-required"
                    label="Nome do Equipamento"
                    placeholder="Nome do Equipamento"
                    fullWidth
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputBestiario"}}
                  />
          </div>
        </div>
        </Box>
          <div className="colBestiario2">
          <Box borderColor="#fab95f" borderRadius={16} {...defaultProps}>
          <div className="espacadorBestiario">
          <div className="atributosBestiario">
                <div>
                  <TextField
                    id="outlined-number"
                    label="Ataque"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputAtributoBestiario", shrink: true }}
                  />
                  <div className="espaco" />
                  <TextField
                    id="outlined-number"
                    label="Inteligencia"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputAtributoBestiario", shrink: true }}
                  />
                  <div className="espaco" />
                  <TextField
                    id="outlined-number"
                    label="Previsao"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputAtributoBestiario", shrink: true }}
                  />
                </div>
                <div />
                <div>
                  <TextField
                    id="outlined-number"
                    label="Defesa"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputAtributoBestiario", shrink: true }}
                  />
                  <div className="espaco" />
                  <TextField
                    id="outlined-number"
                    label="Resistencia"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputAtributoBestiario", shrink: true }}
                  />
                  <div className="espaco" />
                  <TextField
                    id="outlined-number"
                    label="Velocidade"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputAtributoBestiario", shrink: true }}
                  />
                </div>
              </div>
              </div>
              </Box>
          </div>
          <div className="colBestiario3">
          <Box borderColor="#fab95f" borderRadius={16} {...oneLinha}>
          <div className="espacadorBestiario">
          <div className="atributosBestiarioDrop">
                <div>
                  <TextField
                    id="outlined-number"
                    label="Experiencia"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputAtributoBestiario", shrink: true }}
                  />
                </div>
                <div className="espaco" />
                <div>
                <TextField
                    id="outlined-number"
                    label="Arrombscoin"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputAtributoBestiario", shrink: true }}
                  />
                </div>
                <div className="espaco" />
                <div>
                  <TextField
                    id="outlined-number"
                    label="Drop Rate"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelBestiario" }}
                    InputProps={{ className: "estiloInputAtributoBestiario", shrink: true }}
                  />
                  <div className="espaco" />
                </div>
              </div>
              <div className="linhaDrop">
                <div />
                <div>
                <FormControl variant="outlined" className="maoDir">
                          <InputLabel className="estiloLabelForja">
                            Drop
                          </InputLabel>
              <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Drop"
                      className="estiloInputBestiario"
                      InputLabelProps={{ className: "estiloLabelBestiario" }}
                      InputProps={{ className: "estiloInputBestiario" }}
                    >
                     <MenuItem> 
                      Item teste
                     </MenuItem>
                    </Select>
                    </FormControl>  
                </div>  
                <div />
              </div>    
              </div>
              </Box>
          </div>
        </div>
        <div className="linhaBortaoForja">
              <div />
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="botaoCadastrarEquipamento"
                >
                  Criar Besta
                </Button>
              </div>
              <div />
            </div>
      </Container>
    </>
  )
}