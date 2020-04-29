import React, { useState, useEffect } from "react";

import BarraNavegacaoMestre from "../../../components/BarraNavegacao/BarraNavegacaoMestre";
import { Form } from "react-bootstrap";
import { TextField, Button } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import { api } from "../../../config/api";

import "./CadastroEquipamento.css";

export default function CadastroEquipamentos() {

  const defaultProps = {
    m: 1,
    border: 5,
    style: { width: "95%", height: "100%" }
  };

  useEffect(() => {
    api
      .get("/player/")
      .then(res => {
        setPlayer(
          res.data.map(data => (
            <MenuItem key={data.id} value={data.id} className="estiloItemForja">
                {data.nome}
            </MenuItem>
          ))
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
    const [nomeEquipamento, setNomeEquipamento] = useState(0);
    const [tipo_id, setTipo_id] = useState(null);
    const [player_id, setPlayer_id] = useState(null);
    const [descSomaAtri1, setDescSomaAtri1] = useState(null);
    const [valSomaAtri1, setValSomaAtri1] = useState(null);
    const [descSomaAtri2, setDescSomaAtri2] = useState(null);
    const [valSomaAtri2, setValSomaAtri2] = useState(null);
    const [descSubAtri1, setDescSubAtri1] = useState(null);
    const [valSubAtri1, setValSubAtri1] = useState(null);
    const [descSubAtri2, setDescSubAtri2] = useState(null);
    const [valSubAtri2, setValSubAtri2] = useState(null);
    const [player, setPlayer] = useState([]);
  
  const handleEquipamentoCriar = async e => {
    e.preventDefault();
    await api.post("/equipamento", {
      nomeEquipamento: nomeEquipamento,
      tipo_id: tipo_id,
      player_id: player_id,
      descSomaAtri1: descSomaAtri1,
      valSomaAtri1: valSomaAtri1,
      descSomaAtri2: descSomaAtri2,
      valSomaAtri2: valSomaAtri2,
      descSubAtri1: descSubAtri1,
      valSubAtri1: valSubAtri1,
      descSubAtri2: descSubAtri2,
      valSubAtri2:  valSubAtri2,
    });
    console.log(nomeEquipamento, tipo_id, player_id, descSomaAtri1, valSomaAtri1)
  };

    return (
      <>
        <BarraNavegacaoMestre />
        <div className="cadastroEquipamento-container">
          <h1 className="Forja">Bem Vindo a forja!</h1>
          <hr />
          <Form>
            <div className="divisorForja">
              <Box borderColor="#fab95f" borderRadius={16} {...defaultProps}>
                <div className="infoEquipamento">
                  <TextField
                    required
                    id="standard-required"
                    label="Nome do Equipamento"
                    placeholder="Nome do Equipamento"
                    onChange={e => setNomeEquipamento(e.target.value)}
                    fullWidth
                    InputLabelProps={{ className: "estiloLabelForja" }}
                    InputProps={{ className: "estiloInputForja" }}
                  />
                  <div className="espacadorForja" />
                  <FormControl variant="outlined" className="maoDir">
                    <InputLabel className="estiloLabelForja">
                      Tipo de Equipamento
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Tipo de Equipamento"
                      className="estiloInputForja"
                      onChange={e => setTipo_id(e.target.value)}
                      InputLabelProps={{ className: "estiloLabelForja" }}
                      InputProps={{ className: "estiloInputForja" }}
                    >
                      <MenuItem
                        key=""
                        value="1"
                        className="estiloItemForja"
                      >
                        Helmo
                      </MenuItem>
                      <MenuItem
                        key=""
                        value="2"
                        className="estiloItemForja"
                      >
                        Armadura
                      </MenuItem>
                      <MenuItem
                        key=""
                        value="3"
                        className="estiloItemForja"
                      >
                        Mao Direita
                      </MenuItem>
                      <MenuItem
                        key=""
                        value="4"
                        className="estiloItemForja"
                      >
                        Mao Esquerda
                      </MenuItem>
                      <MenuItem key="" value="5" className="estiloItemForja">
                        Bota
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <div className="espacadorForja" />
                  <FormControl variant="outlined" className="maoDir">
                    <InputLabel className="estiloLabelForja">
                      Encomenda feita por:
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Tipo de Equipamento"
                      className="estiloInputForja"
                      onChange={e => setPlayer_id(e.target.value)}
                      InputLabelProps={{ className: "estiloLabelForja" }}
                      InputProps={{ className: "estiloInputForja" }}
                    >
                      {player}
                    </Select>
                  </FormControl>
                </div>
              </Box>
              <Box borderRadius={16} {...defaultProps}>
                <div className="atributosSoma">
                  <h4>Atributos de Soma</h4>
                  <div className="divisorAtributos">
                    <div>
                      <div>
                        <FormControl variant="outlined" className="maoDir">
                          <InputLabel className="estiloLabelForja">
                            1º Atributo
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Tipo de Equipamento"
                            className="estiloInputForjaAtributos"
                            onChange={e => setDescSomaAtri1(e.target.value)}
                            InputLabelProps={{ className: "estiloLabelForja" }}
                            InputProps={{
                              className: "estiloInputForjaAtributos"
                            }}
                          >
                            <MenuItem
                              key=""
                              value="nenhum"
                              className="estiloItemForjaAtributo"
                            >
                              Nenhum
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Ata"
                              className="estiloItemForjaAtributo"
                            >
                              Ataque
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Def"
                              className="estiloItemForjaAtributo"
                            >
                              Defesa
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Int"
                              className="estiloItemForjaAtributo"
                            >
                              Inteligencia
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Res"
                              className="estiloItemForjaAtributo"
                            >
                              Resistencia
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Pre"
                              className="estiloItemForjaAtributo"
                            >
                              Previsao
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Vel"
                              className="estiloItemForjaAtributo"
                            >
                              Velocidade
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="espacadorForja" />
                      <div>
                        <FormControl variant="outlined" className="maoDir">
                          <InputLabel className="estiloLabelForja">
                            2º Atributo
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Tipo de Equipamento"
                            className="estiloInputForjaAtributos"
                            onChange={e => setDescSomaAtri2(e.target.value)}
                            InputLabelProps={{ className: "estiloLabelForja" }}
                            InputProps={{
                              className: "estiloInputForjaAtributos"
                            }}
                          >
                            <MenuItem
                              key=""
                              value="nenhum"
                              className="estiloItemForjaAtributo"
                            >
                              Nenhum
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Ata"
                              className="estiloItemForjaAtributo"
                            >
                              Ataque
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Def"
                              className="estiloItemForjaAtributo"
                            >
                              Defesa
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Int"
                              className="estiloItemForjaAtributo"
                            >
                              Inteligencia
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Res"
                              className="estiloItemForjaAtributo"
                            >
                              Resistencia
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Pre"
                              className="estiloItemForjaAtributo"
                            >
                              Previsao
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Vel"
                              className="estiloItemForjaAtributo"
                            >
                              Velocidade
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div>
                      <div>
                        <TextField
                          id="atri1Valor"
                          label="Valor 1º Atributo"
                          variant="outlined"
                          type="number"
                          onChange={e => setValSomaAtri1(e.target.value)}
                          InputLabelProps={{ className: "estiloLabelForja" }}
                          InputProps={{
                            className: "estiloInputForjaValorItem"
                          }}
                        />
                      </div>
                      <div className="espacadorForja" />
                      <TextField
                        id="atri2Valor"
                        label="Valor 2º Atributo"
                        variant="outlined"
                        type="number"
                        onChange={e => setValSomaAtri2(e.target.value)}
                        InputLabelProps={{ className: "estiloLabelForja" }}
                        InputProps={{ className: "estiloInputForjaValorItem" }}
                      />
                    </div>
                  </div>
                </div>
              </Box>
              <Box borderRadius={16} {...defaultProps}>
                <div className="subtrairAtributos">
                  <h4>Atributos de Soma</h4>
                  <div className="divisorAtributos">
                    <div>
                      <div>
                        <FormControl variant="outlined" className="maoDir">
                          <InputLabel className="estiloLabelForja">
                            1º Atributo
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Tipo de Equipamento"
                            className="estiloInputForjaAtributos"
                            onChange={e => setDescSubAtri1(e.target.value)}
                            InputLabelProps={{ className: "estiloLabelForja" }}
                            InputProps={{
                              className: "estiloInputForjaAtributos"
                            }}
                          >
                            <MenuItem
                              key=""
                              value="nenhum"
                              className="estiloItemForjaAtributo"
                            >
                              Nenhum
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Ata"
                              className="estiloItemForjaAtributo"
                            >
                              Ataque
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Def"
                              className="estiloItemForjaAtributo"
                            >
                              Defesa
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Int"
                              className="estiloItemForjaAtributo"
                            >
                              Inteligencia
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Res"
                              className="estiloItemForjaAtributo"
                            >
                              Resistencia
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Pre"
                              className="estiloItemForjaAtributo"
                            >
                              Previsao
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Vel"
                              className="estiloItemForjaAtributo"
                            >
                              Velocidade
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className="espacadorForja" />
                      <div>
                        <FormControl variant="outlined" className="maoDir">
                          <InputLabel className="estiloLabelForja">
                            2º Atributo
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Tipo de Equipamento"
                            className="estiloInputForjaAtributos"
                            onChange={e => setDescSubAtri2(e.target.value)}
                            InputLabelProps={{ className: "estiloLabelForja" }}
                            InputProps={{
                              className: "estiloInputForjaAtributos"
                            }}
                          >
                            <MenuItem
                              key=""
                              value="nenhum"
                              className="estiloItemForjaAtributo"
                            >
                              Nenhum
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Ata"
                              className="estiloItemForjaAtributo"
                            >
                              Ataque
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Def"
                              className="estiloItemForjaAtributo"
                            >
                              Defesa
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Int"
                              className="estiloItemForjaAtributo"
                            >
                              Inteligencia
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Res"
                              className="estiloItemForjaAtributo"
                            >
                              Resistencia
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Pre"
                              className="estiloItemForjaAtributo"
                            >
                              Previsao
                            </MenuItem>
                            <MenuItem
                              key=""
                              value="Vel"
                              className="estiloItemForjaAtributo"
                            >
                              Velocidade
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </div>
                    <div>
                      <div>
                        <TextField
                          id="atri2Valor"
                          label="Valor 2º Atributo"
                          variant="outlined"
                          type="number"
                          onChange={e => setValSubAtri1(e.target.value)}
                          InputLabelProps={{ className: "estiloLabelForja" }}
                          InputProps={{
                            className: "estiloInputForjaValorItem"
                          }}
                        />
                      </div>
                      <div className="espacadorForja" />
                      <TextField
                        id="atri2Valor"
                        label="Valor 2º Atributo"
                        variant="outlined"
                        type="number"
                        onChange={e => setValSubAtri2(e.target.value)}
                        InputLabelProps={{ className: "estiloLabelForja" }}
                        InputProps={{ className: "estiloInputForjaValorItem" }}
                      />
                    </div>
                  </div>
                </div>
              </Box>
            </div>
            <div className="linhaBortaoForja">
              <div />
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="botaoCadastrarEquipamento" onClick={handleEquipamentoCriar}
                >
                  Forjar Equipamento
                </Button>
              </div>
              <div />
            </div>
          </Form>
        </div>
      </>
    );
}
