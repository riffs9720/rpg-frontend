/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Form, Tabs, Tab } from "react-bootstrap";
import { api } from "../../config/api";

import './style.css';

export default function Cartao5() {
  const [nome, setNome] = useState("Nenhum player carregado");
  const [raca, setRaca] = useState("Raça");
  const [classe, setClasse] = useState("Classe");
  const [arrombscoin, setArrombscoin] = useState("Arrombscoin");
  const [experienciaAtual, setExperienciaAtual] = useState("0");
  const [experienciaTotal, setExperienciaTotal] = useState("0");
  const [vidaAtual, setVidaAtual] = useState("0");
  const [vidaTotal, setVidaTotal] = useState("0");
  const [manaAtual, setManaAtual] = useState("0");
  const [manaTotal, setManaTotal] = useState("0");
  const [jogador, setJogador] = useState("Nenhum dado carregado");
  const [ataque, setAtaque] = useState("Ataque");
  const [defesa, setDefesa] = useState("defesa");
  const [inteligencia, setInteligencia] = useState("Inteligencia");
  const [resistencia, setResistencia] = useState("Resistencia");
  const [previsao, setPrevisao] = useState("Previsao");
  const [velocidade, setVelocidade] = useState("Velocidade");
  const [d4, setD4] = useState("0");
  const [d6, setD6] = useState("0");
  const [d8, setD8] = useState("0");
  const [d10, setD10] = useState("0");
  const [d12, setD12] = useState("0");
  const [d20, setD20] = useState("0");
  const [historia, setHistoria] = useState("Carregue o player para que a historia fique disponivel");
  const [qtdPocaoHp25, setQtdPocaoHp25] = useState(0);
  const [qtdPocaoHp50, setQtdPocaoHp50] = useState(0);
  const [qtdPocaoHp100, setQtdPocaoHp100] = useState(0);
  const [qtdPocaoMp25, setQtdPocaoMp25] = useState(0);
  const [qtdPocaoMp50, setQtdPocaoMp50] = useState(0);
  const [qtdPocaoMp100, setQtdPocaoMp100] = useState(0);

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: "#d6b88f"
    }
  });

  const handlePocaoHp25 = async e => {
    e.preventDefault();
    if(arrombscoin >= 50){
      await api.put("/player/6", {
      qtdPocaoHp25: qtdPocaoHp25 + 1,
      arrombscoin: arrombscoin - 50
      });
      handlePlayerCarregar(e);
    }
  };

  const handlePocaoHp50 = async e => {
    e.preventDefault();
    if(arrombscoin >= 100){
      await api.put("/player/6", {
      qtdPocaoHp50: qtdPocaoHp50 + 1,
      arrombscoin: arrombscoin - 100
      });
      handlePlayerCarregar(e);
    }
  };

  const handlePocaoHp100 = async e => {
    e.preventDefault();
    if(arrombscoin >= 150){
      await api.put("/player/6", {
        qtdPocaoHp100: qtdPocaoHp100 + 1,
      arrombscoin: arrombscoin - 15
      });
      handlePlayerCarregar(e);
    }
  };

  const handlePocaoMp25 = async e => {
    e.preventDefault();
    if(arrombscoin >= 50){
      await api.put("/player/6", {
      qtdPocaoMp25: qtdPocaoMp25 + 1,
      arrombscoin: arrombscoin - 50
      });
      handlePlayerCarregar(e);
    }
  };

  const handlePocaoMp50 = async e => {
    e.preventDefault();
    if(arrombscoin >= 100){
      await api.put("/player/6", {
      qtdPocaoMp50: qtdPocaoMp50 + 1,
      arrombscoin: arrombscoin - 100
      });
      handlePlayerCarregar(e);
    }
  };

  const handlePocaoMp100 = async e => {
    e.preventDefault();
    if(arrombscoin >= 150){
      await api.put("/player/6", {
        qtdPocaoMp100: qtdPocaoMp100 + 1,
      arrombscoin: arrombscoin - 15
      });
      handlePlayerCarregar(e);
    }
  };

  const classes = useStyles();

  function handlePlayerCarregar(e) {
    e.preventDefault();
    api
      .get("/player/6")
      .then(res => {
        document.getElementById("Nome5").value = res.data.nome;
        document.getElementById("Raca5").value = res.data.raca;
        document.getElementById("Classe5").value = res.data.classe;
        document.getElementById("Arrombscoin5").value = res.data.arrombscoin;
        document.getElementById("ExperienciaAtual5").value =
          res.data.experienciaAtual;
        document.getElementById("ExperienciaProximoNivel5").value =
          res.data.experienciaProximoNivel;
        document.getElementById("HpAtual5").value = res.data.vidaAtual;
        document.getElementById("HpTotal5").value = res.data.vidaTotal;
        document.getElementById("MpAtual5").value = res.data.manaAtual;
        document.getElementById("MpTotal5").value = res.data.manaTotal;
        document.getElementById("Ataque5").value = res.data.ataque;
        document.getElementById("Defesa5").value = res.data.defesa;
        document.getElementById("Inteligencia5").value = res.data.inteligencia;
        document.getElementById("Resistencia5").value = res.data.resistencia;
        document.getElementById("Previsao5").value = res.data.previsao;
        document.getElementById("Velocidade5").value = res.data.velocidade;
        setNome(res.data.nome);
        setRaca(res.data.raca);
        setClasse(res.data.classe);
        setArrombscoin(res.data.arrombscoin);
        setExperienciaAtual(res.data.experienciaAtual);
        setExperienciaTotal(res.data.experienciaProximoNivel);
        setVidaAtual(res.data.vidaAtual);
        setVidaTotal(res.data.vidaTotal);
        setManaAtual(res.data.manaAtual);
        setManaTotal(res.data.manaTotal);
        setAtaque(res.data.ataque);
        setDefesa(res.data.defesa);
        setInteligencia(res.data.inteligencia);
        setResistencia(res.data.resistencia);
        setPrevisao(res.data.resistencia);
        setVelocidade(res.data.velocidade);
        setD4(res.data.valorD4);
        setD6(res.data.valorD6);
        setD8(res.data.valorD8);
        setD10(res.data.valorD10);
        setD12(res.data.valorD12);
        setD20(res.data.valorD20);
        setHistoria(res.data.historia);
        setQtdPocaoHp25(res.data.qtdPocaoHp25);
        setQtdPocaoHp50(res.data.qtdPocaoHp50);
        setQtdPocaoHp100(res.data.qtdPocaoHp100);
        setQtdPocaoMp25(res.data.qtdPocaoMp25);
        setQtdPocaoMp50(res.data.qtdPocaoMp50);
        setQtdPocaoMp100(res.data.qtdPocaoMp100);
        setJogador(res.data.jogador)

      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleZerarDado = async e => {
    e.preventDefault();
    await api.put("/player/6", {
      valorD4: 0,
      valorD6: 0,
      valorD8: 0,
      valorD10: 0,
      valorD12: 0,
      valorD20: 0
    });
  };

  const handlePlayerUpdate = async e => {
    e.preventDefault();
    await api.put("/player/6", {
      nome: nome,
      raca: raca,
      classe: classe,
      arrombscoin: arrombscoin,
      experienciaAtual: experienciaAtual,
      experienciaProximoNivel: experienciaTotal,
      vidaAtual: vidaAtual,
      vidaTotal: vidaTotal,
      manaAtual: manaAtual,
      manaTotal: manaTotal,
      ataque: ataque,
      defesa: defesa,
      inteligencia: inteligencia,
      resistencia: resistencia,
      previsao: previsao,
      velocidade: velocidade
    });
    window.location.reload();
  };

  return (
    <Card className={classes.root} variant="outlined">
      <Form onSubmit={handlePlayerUpdate}>
        <CardContent>
          <h2>Jogador: {jogador}</h2>
          <Tabs defaultActiveKey="Info do Player" id="uncontrolled-tab-example">
            <Tab eventKey="Info do Player" title="Info do Player">
              <div className="linha1">
                <TextField
                  id="Nome5"
                  label="Nome"
                  variant="filled"
                  name="Nome"
                  InputProps={{ className: "estiloInfoPlayer" }}
                  InputLabelProps={{
                    className: "estiloInfoPlayer",
                    shrink: true
                  }}
                  onChange={e => setNome(e.target.value)}
                />
                <div className="espacamento" />
                <TextField
                  id="Raca5"
                  label="Raca"
                  variant="filled"
                  InputProps={{ className: "estiloInfoPlayer" }}
                  InputLabelProps={{
                    className: "estiloInfoPlayer",
                    shrink: true
                  }}
                  onChange={e => setRaca(e.target.value)}
                />
              </div>
              <div className="linha2">
                <TextField
                  id="Classe5"
                  label="Classe"
                  variant="filled"
                  InputProps={{ className: "estiloInfoPlayer" }}
                  InputLabelProps={{
                    className: "estiloInfoPlayer",
                    shrink: true
                  }}
                  onChange={e => setClasse(e.target.value)}
                />
                <div className="espacamento" />
                <TextField
                  id="Arrombscoin5"
                  label="Arrombscoin"
                  variant="filled"
                  type="number"
                  InputProps={{ className: "estiloInfoPlayer" }}
                  InputLabelProps={{
                    className: "estiloInfoPlayer",
                    shrink: true
                  }}
                  onChange={e => setArrombscoin(e.target.value)}
                />
              </div>
              <div className="linha3">
                <div className="xp">
                  <TextField
                    id="ExperienciaAtual5"
                    label="XP Atual"
                    variant="filled"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setExperienciaAtual(e.target.value)}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="ExperienciaProximoNivel5"
                    label="XP Upar"
                    variant="filled"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setExperienciaTotal(e.target.value)}
                  />
                </div>
                <div className="espacamento" />
                <div className="hp">
                  <TextField
                    id="HpAtual5"
                    label="HP Atual"
                    variant="filled"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setVidaAtual(e.target.value)}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="HpTotal5"
                    label="HP Total"
                    variant="filled"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setVidaTotal(e.target.value)}
                  />
                </div>
              </div>
              <div className="linha4">
                <div className="espacamentoLinha4" />
                <TextField
                  id="MpAtual5"
                  label="MP Atual"
                  variant="filled"
                  type="number"
                  InputProps={{ className: "estiloInfoPlayer" }}
                  InputLabelProps={{
                    className: "estiloInfoPlayer",
                    shrink: true
                  }}
                  onChange={e => setManaAtual(e.target.value)}
                />
                <div className="espacamento" />
                <TextField
                  id="MpTotal5"
                  label="MP Total"
                  variant="filled"
                  type="number"
                  InputProps={{ className: "estiloInfoPlayer" }}
                  InputLabelProps={{
                    className: "estiloInfoPlayer",
                    shrink: true
                  }}
                  onChange={e => setManaTotal(e.target.value)}
                />
                <div className="espacamentoLinha4" />
              </div>
              <CardActions>
          <Button type="submit" className="atualizarPlayer">
            Atualizar Player
          </Button>
          <Button
            type="button"
            className="carregarPlayer"
            onClick={handlePlayerCarregar}
          >
            Carregar Player
          </Button>
        </CardActions>
            </Tab>
            <Tab eventKey="Info Atributos" title="Info Atributos">
              <p>Atributos Padrões</p>
              <div className="linha1">
                <div className="atributosLinha1">
                  <TextField
                    id="Ataque"
                    label="Ataque"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setAtaque(e.target.value)}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="Defesa"
                    label="Defesa"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setDefesa(e.target.value)}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="Inteligencia"
                    label="Inteligencia"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setInteligencia(e.target.value)}
                  />
                </div>
                <div className="espacamento" />
              </div>
              <div className="linha2">
                <div className="atributosLinha2">
                  <TextField
                    id="Resistencia"
                    label="Resistencia"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setResistencia(e.target.value)}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="Previsao"
                    label="Previsao"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setPrevisao(e.target.value)}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="Velocidade"
                    label="Velocidade"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{ className: "estiloInfoPlayer" }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                    onChange={e => setVelocidade(e.target.value)}
                  />
                </div>
                <div className="espacamento" />
              </div>
              <hr />
              <p>Atributos + Equipamentos</p>
              <div className="linha1">
                <div className="atributosLinha1">
                  <TextField
                    id="Ataque"
                    label="Ataque"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="Defesa"
                    label="Defesa"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="Inteligencia"
                    label="Inteligencia"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                </div>
                <div className="espacamento" />
              </div>
              <div className="linha2">
                <div className="atributosLinha2">
                  <TextField
                    id="Resistencia"
                    label="Resistencia"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="Previsao"
                    label="Previsao"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="Velocidade"
                    label="Velocidade"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                </div>
                <div className="espacamento" />
              </div>
            </Tab>
            <Tab eventKey="Historia Personagem" title="Historia Personagem">
              <div className="HistoriaPersonagem">
              <h5>Historia de: {nome}</h5>
              {historia}
              </div>
            </Tab>
            <Tab eventKey="Mercado de Poções" title="Mercado de Poções">
            <div className="mercadoPocoes">
            <div className="linhaHp">
            <div className="hp25" onClick={handlePocaoHp25}/>
            <div className="espacamentoPocoes" />
            <div className="hp50" onClick={handlePocaoHp50} />
            <div className="espacamentoPocoes" />
            <div className="hp100" onClick={handlePocaoHp100} />
          </div>
          <div className="linhaMp">
            <div className="mp25" onClick={handlePocaoMp25} />
            <div className="espacamentoPocoes" />
            <div className="mp50" onClick={handlePocaoMp50} />
            <div className="espacamentoPocoes" />
            <div className="mp100" onClick={handlePocaoMp100} />
          </div>
            </div>
            </Tab>
            <Tab eventKey="Rolagem de Dados" title="Rolagem de Dados">
              <div className="dadosPlayer">
                <div>
                  <TextField
                    id="d4"
                    label="D4"
                    value={d4}
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="d10"
                    label="D10"
                    value={d10}
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                </div>
                <div className="espacamento" />
                <div>
                  <TextField
                    id="d6"
                    label="D6"
                    value={d6}
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="d12"
                    label="D12"
                    value={d12}
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                </div>
                <div className="espacamento" />
                <div>
                  <TextField
                    id="d8"
                    label="D8"
                    value={d8}
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                  <div className="espacamento" />
                  <TextField
                    id="d20"
                    label="D20"
                    value={d20}
                    variant="outlined"
                    type="number"
                    InputProps={{
                      readOnly: true,
                      className: "estiloInfoPlayer"
                    }}
                    InputLabelProps={{
                      className: "estiloInfoPlayer",
                      shrink: true
                    }}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="zerarDados"
                onClick={handleZerarDado}
              >
                Zerar Dados
              </Button>
            </Tab>
          </Tabs>
        </CardContent>
      </Form>
    </Card>
  );
}
