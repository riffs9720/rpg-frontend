import React, { Component } from "react";
import { api } from "../../../config/api";
import { TextField, Button } from "@material-ui/core";
import { Form } from "react-bootstrap";
import BarraNavegacaoMestre from '../../../components/BarraNavegacao/BarraNavegacaoMestre'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import { Container } from "./styles";

class CadastroPlayer extends Component {
  state = {
    jogador: "",
    nome: "",
    raca: "",
    classe: "",
    arrombscoin: "",
    hp: "",
    mp: "",
    ataque: "",
    defesa: "",
    inteligencia: "",
    resistencia: "",
    previsao: "",
    velocidade: "",
    historia: "",
    senha: "",
  };

  handlePlayerSave = async e => {
    e.preventDefault();
    await api.post("/player", {
      jogador: this.state.jogador,
      nome: this.state.nome,
      raca: this.state.raca,
      classe: this.state.classe,
      password: this.state.senha,
      arrombscoin: this.state.arrombscoin,
      vidaAtual: this.state.hp,
      vidaTotal: this.state.hp,
      manaAtual: this.state.mp,
      manaTotal: this.state.mp,
      ataque: this.state.ataque,
      defesa: this.state.defesa,
      inteligencia: this.state.inteligencia,
      resistencia: this.state.resistencia,
      previsao: this.state.previsao,
      velocidade: this.state.velocidade,
      historia: this.state.historia,
    });
  };

  render() {
    return (
      <>
      <BarraNavegacaoMestre />
      <Container>
        <Form onSubmit={this.handlePlayerSave}>
          <h1>Contrato de inicio de Jornada</h1>
          <div className="separador">
            <div className="infoPersonagem">
              <h4>Informações do Personagem</h4>
              <div className="jogador">
              <TextField
                required
                id="standard-required"
                label="Jogador"
                placeholder="Jogador"
                fullWidth
                onChange={e => this.setState({ jogador: e.target.value })}
                value={this.state.jogador}
                InputLabelProps={{ className: "estiloLabelContrato" }}
              />
              </div>
              <div className="nome">
              <TextField
                required
                id="standard-required"
                label="Nome"
                placeholder="Nome"
                fullWidth
                onChange={e => this.setState({ nome: e.target.value })}
                value={this.state.nome}
                InputLabelProps={{ className: "estiloLabelContrato" }}
              />
              </div>
              <div className="Raca">
              <FormControl variant="outlined" className="Raca">
                    <InputLabel className="estiloLabelContrato">
                      Raça:
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      label="Raça"
                      className="estiloLabelContrato"
                      onChange={e => this.setState({ raca: e.target.value })}
                      InputLabelProps={{ className: "estiloLabelContrato" }}
                      InputProps={{ className: "estiloLabelContrato" }}
                    >
                      <MenuItem
                        key=""
                        value="Humano"
                        className="estiloLabelContrato"
                      >
                        Humano
                      </MenuItem>
                      <MenuItem
                        key=""
                        value="Elfo"
                        className="estiloLabelContrato"
                      >
                        Elfo
                      </MenuItem>
                      <MenuItem
                        key=""
                        value="Anão"
                        className="estiloLabelContrato"
                      >
                        Anão
                      </MenuItem>
                      <MenuItem
                        key=""
                        value="Ananíaco"
                        className="estiloLabelContrato"
                      >
                        Ananíaco
                      </MenuItem>
                      <MenuItem
                        key=""
                        value="Oculto"
                        className="estiloLabelContrato"
                      >
                        Oculto
                      </MenuItem>
                    </Select>
                  </FormControl>
              </div>
              <div className="Classe">
                <TextField
                  required
                  id="standard-required"
                  label="Classe"
                  placeholder="Classe"
                  fullWidth
                  onChange={e => this.setState({ classe: e.target.value })}
                  value={this.state.classe}
                  InputLabelProps={{ className: "estiloLabelContrato" }}
                />
              </div>
            </div>
            <div className="infoAtributos">
              <h4>Atributos</h4>
              <div className="atributos">
                <div>
                  <TextField
                    id="outlined-number"
                    label="Ataque"
                    type="number"
                    variant="outlined"
                    onChange={e => this.setState({ ataque: e.target.value })}
                    InputLabelProps={{
                      className: "estiloLabelContrato",
                      shrink: true
                    }}
                  />
                  <div className="espaco" />
                  <TextField
                    id="outlined-number"
                    label="Inteligencia"
                    type="number"
                    variant="outlined"
                    onChange={e => this.setState({ inteligencia: e.target.value })}
                    InputLabelProps={{
                      className: "estiloLabelContrato",
                      shrink: true
                    }}
                  />
                  <div className="espaco" />
                  <TextField
                    id="outlined-number"
                    label="Previsao"
                    type="number"
                    variant="outlined"
                    onChange={e => this.setState({ previsao: e.target.value })}
                    InputLabelProps={{
                      className: "estiloLabelContrato",
                      shrink: true
                    }}
                  />
                </div>
                <div />
                <div>
                  <TextField
                    id="outlined-number"
                    label="Defesa"
                    type="number"
                    variant="outlined"
                    onChange={e => this.setState({ defesa: e.target.value })}
                    InputLabelProps={{
                      className: "estiloLabelContrato",
                      shrink: true
                    }}
                  />
                  <div className="espaco" />
                  <TextField
                    id="outlined-number"
                    label="Resistencia"
                    type="number"
                    variant="outlined"
                    onChange={e => this.setState({ resistencia: e.target.value })}
                    InputLabelProps={{
                      className: "estiloLabelContrato",
                      shrink: true
                    }}
                  />
                  <div className="espaco" />
                  <TextField
                    id="outlined-number"
                    label="Velocidade"
                    type="number"
                    variant="outlined"
                    onChange={e => this.setState({ velocidade: e.target.value })}
                    InputLabelProps={{
                      className: "estiloLabelContrato",
                      shrink: true
                    }}
                  />
                </div>
              </div>
              <div className="botao">
                <div />
                <div>
                  <Button type="submit" variant="contained" color="primary" className="botaoCadastrarPlayer">
                    Contratar
                  </Button>
                </div>
                <div />
              </div>
            </div>
            <div className="outrasInfos">
              <h4>Outras</h4>
              <div className="outras">
                <div className="outrosAtributos">
                  <div>
                  <TextField
  id="outlined-number"
  label="HP Inicial"
  type="number"
  variant="outlined"
  onChange={e => this.setState({ hp: e.target.value })}
  InputProps={{className: "inputContrato"}}
  InputLabelProps={{
    className: "estiloLabelContrato",
    shrink: true
  }}
/>
                  </div>
                  <div>
                  <TextField
  id="outlined-number"
  label="MP Inicial"
  type="number"
  variant="outlined"
  onChange={e => this.setState({ mp: e.target.value })}
  InputProps={{className: "inputContrato"}}
  InputLabelProps={{
    className: "estiloLabelContrato",
    shrink: true
  }}
/>
                  </div>
                  <div>
                  <TextField
    id="outlined-number"
    label="Moedas"
    type="number"
    variant="outlined"
    onChange={e => this.setState({ arrombscoin: e.target.value })}
    InputProps={{className: "inputContrato"}}
    InputLabelProps={{
      className: "estiloLabelContrato",
      shrink: true
    }}
  />
                  </div>
                </div>
              </div>
              <div className="historiaPersonagem">
                <label htmlFor="">Historia do Personagem</label>
              <TextareaAutosize
                  rowsMax={4}
                  fullWidth
                  className="histroria"
                  aria-label="maximum height"
                  placeholder="Maximum 10 rows"
                  onChange={e => this.setState({ historia: e.target.value })}
                />
              </div>
              <div className="senha">
              <TextField
            id="password"
            label="Senha"
            placeholder="●●●●●●●●●●"
            type="password"
            fullWidth
            margin="normal"
            onChange={e => this.setState({ senha: e.target.value })}
            InputLabelProps={{ className: "estiloLabelContrato" }}
          />
              </div>
            </div>
          </div>
        </Form>
      </Container>
      </>
    );
  }
}

export default CadastroPlayer;
