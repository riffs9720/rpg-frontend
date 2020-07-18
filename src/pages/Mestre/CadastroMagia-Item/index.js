import React from "react";
import { TextField, Button } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import BarraNavegacaoMestre from "../../../components/BarraNavegacao/BarraNavegacaoMestre";


import { Container } from "./styles";

const defaultProps = {
  m: 1,
  border: 5,
  style: { width: "98%", height: "55vh" }
};

export default function CadastroEquipamentos() {
  return (
    <>
    <Container>
    <BarraNavegacaoMestre />
    <h1 className="fontesAlquimista">Bem vindo Mestre alquimista</h1>
    <div className="Magia-Item">
      <div className="magia">
      <Box borderColor="#fab95f" borderRadius={16} {...defaultProps}>
        <h3 className="fontesAlquimista">Magia</h3>
        <div className="linha1Magia">
        <TextField
          required
                    id="standard-required"
                    label="Nome da Magia"
                    placeholder="Nome da Magia"
                    fullWidth
                    InputLabelProps={{ className: "estiloLabelMagia" }}
                    InputProps={{ className: "estiloInputMagia"}}
                  />
                  <TextField
                    id="outlined-number"
                    label="Gasto de Mp"
                    type="number"
                    variant="outlined"
                    InputLabelProps={{ className: "estiloLabelMagia" }}
                    InputProps={{ className: "estiloInputAtributoMagia", shrink: true }}
                  />
        </div>
        <div className="linha2Magia">
<div />
<div>
<FormControl variant="outlined" className="maoDir">
                    <InputLabel className="estiloLabelMagia">
                      Conjurador:
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Tipo de Equipamento"
                      className="estiloInputMagia"
                      InputLabelProps={{ className: "estiloLabelMagia" }}
                      InputProps={{ className: "estiloInputMagia" }}
                    >
                    </Select>
                  </FormControl>
</div>
<div />
        </div>
        <div className="linha3Magia">
        <div />
        <div><Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="botaoCadastrarEquipamento"
                >
                  Conceber Magia
                </Button></div>
        <div />
        </div>
      </Box>
      </div>
      <div className="iten">
        <Box borderColor="#fab95f" borderRadius={16} {...defaultProps}>
        <h3 className="fontesAlquimista">Item</h3>
        <div className="linha1Item">
        <TextField
          required
                    id="standard-required"
                    label="Nome do Item"
                    placeholder="Nome do Item"
                    fullWidth
                    InputLabelProps={{ className: "estiloLabelMagia" }}
                    InputProps={{ className: "estiloInputItem"}}
                  />
        </div>
        <div className="linha2Item">
<div />
<div>
<FormControl variant="outlined" className="maoDir">
                    <InputLabel className="estiloLabelMagia">
                      Pertencente a:
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Tipo de Equipamento"
                      className="estiloInputMagia"
                      InputLabelProps={{ className: "estiloLabelMagia" }}
                      InputProps={{ className: "estiloInputMagia" }}
                    >
                    </Select>
                  </FormControl>
</div>
<div />
        </div>
        <div className="linha3Item">
        <div />
        <div><Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="botaoCadastrarEquipamento"
                >
                  Transmutar Item
                </Button></div>
        <div />
        </div>
      </Box>
      </div>
    </div>
    </Container>
    </>
  )
}