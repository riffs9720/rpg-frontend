import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, TextField } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Alert from "react-bootstrap/Alert";

import { api } from "../../config/api";

import "./Dados.css";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "#d6b88f",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "700px"
  }
}));



export default function Dados() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("none");

  const userId = localStorage.getItem('@authApp: id');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleFechar = event => {
    document.getElementById("alerta").style.display = "none";
  };

  async function rolarD4(e) {
    e.preventDefault();

      var numeroAleatorio = Math.floor(Math.random() * 4 + 1);

      var ataque = parseInt(document.getElementById("ataque").value);
      var defesa = parseInt(document.getElementById("defesa").value);
      var inteligencia = parseInt(
        document.getElementById("inteligencia").value
      );
      var resistencia = parseInt(document.getElementById("resistencia").value);
      var previsao = parseInt(document.getElementById("previsao").value);
      var velocidade = parseInt(document.getElementById("velocidade").value);
      var somaPorcentagem = parseInt(document.getElementById("%").value);

      var somarAtributo = document.getElementById("somarAtributos").value;

      if (somarAtributo === "Ataque") {
        if (somaPorcentagem === 0) {
          setD4Atri(ataque + numeroAleatorio);
        } else {
          setD4Atri(Math.round(
            (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
              ataque)
          );
        }
      } else if (somarAtributo === "Defesa") {
        if (somaPorcentagem === 0) {
          setD4Atri(defesa + numeroAleatorio);
        } else {
          setD4Atri( Math.round(
            (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
              numeroAleatorio +
              defesa)
          );
        }
      } else if (somarAtributo === "Inteligencia") {
        if (somaPorcentagem === 0) {
          setD4Atri(inteligencia + numeroAleatorio);
        } else {
          setD4Atri( Math.round(
            (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
              numeroAleatorio +
              inteligencia)
          );
        }
      } else if (somarAtributo === "Resistencia") {
        if (somaPorcentagem === 0) {
          setD4Atri(resistencia + numeroAleatorio);
        } else {
          setD4Atri(Math.round(
            (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
              numeroAleatorio +
              resistencia)
          );
        }
      } else if (somarAtributo === "Previsao") {
        if (somaPorcentagem === 0) {
          setD4Atri( previsao + numeroAleatorio);
        } else { 
          setD4Atri( Math.round(
            (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
              numeroAleatorio +
              previsao)
          );
        }
      } else if (somarAtributo === "Velocidade") {
        if (somaPorcentagem === 0) {
          setD4Atri(velocidade + numeroAleatorio);
        } else {
          setD4Atri( Math.round(
            (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
              numeroAleatorio +
              velocidade)
          );
        }
      }else {
        setD4(numeroAleatorio)
      }

      await api.put("/player/1", {
        valorD4: d4
      });

      setD4(numeroAleatorio)
  }

  async function rolarD6(e) {
    e.preventDefault();

    var numeroAleatorio = Math.floor(Math.random() * 6 + 1);

    var ataque = parseInt(document.getElementById("ataque").value);
    var defesa = parseInt(document.getElementById("defesa").value);
    var inteligencia = parseInt(document.getElementById("inteligencia").value);
    var resistencia = parseInt(document.getElementById("resistencia").value);
    var previsao = parseInt(document.getElementById("previsao").value);
    var velocidade = parseInt(document.getElementById("velocidade").value);
    var somaPorcentagem = parseInt(document.getElementById("%").value);

    var somarAtributo = document.getElementById("somarAtributos").value;

    if (somarAtributo === "Ataque") {
      if (somaPorcentagem === 0) {
        setD6Atri(ataque + numeroAleatorio);
      } else {
        setD6Atri(  Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque)
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        setD6Atri(  defesa + numeroAleatorio);
      } else {
        setD6Atri(  Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa)
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        setD6Atri(inteligencia + numeroAleatorio);
      } else {
        setD6Atri(  Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia)
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        setD6Atri(  resistencia + numeroAleatorio);
      } else {
        setD6Atri(  Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia)
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        setD6Atri(  previsao + numeroAleatorio);
      } else {
        setD6Atri(  Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao)
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        setD6Atri(  velocidade + numeroAleatorio);
      } else {
        setD6Atri( Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade)
        );
      }
    }else {
      setD6(numeroAleatorio)
    }
    await api.put("/player/1", {
      valorD6: d6
    });

    setD6(numeroAleatorio)
  }

  async function rolarD8(e) {
    e.preventDefault();
    var numeroAleatorio = Math.floor(Math.random() * 8 + 1);

    var ataque = parseInt(document.getElementById("ataque").value);
    var defesa = parseInt(document.getElementById("defesa").value);
    var inteligencia = parseInt(document.getElementById("inteligencia").value);
    var resistencia = parseInt(document.getElementById("resistencia").value);
    var previsao = parseInt(document.getElementById("previsao").value);
    var velocidade = parseInt(document.getElementById("velocidade").value);
    var somaPorcentagem = parseInt(document.getElementById("%").value);

    var somarAtributo = document.getElementById("somarAtributos").value;

    if (somarAtributo === "Ataque") {
      if (somaPorcentagem === 0) {
        setD8Atri(ataque + numeroAleatorio);
      } else {
        setD8Atri( Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque)
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        setD8Atri( defesa + numeroAleatorio);
      } else {
        setD8Atri( Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa)
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        setD8Atri(inteligencia + numeroAleatorio);
      } else {
        setD8Atri( Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia)
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        setD8Atri( resistencia + numeroAleatorio);
      } else {
        setD8Atri( Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia)
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        setD8Atri( previsao + numeroAleatorio);
      } else {
        setD8Atri( Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao)
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        setD8Atri( velocidade + numeroAleatorio);
      } else {
        setD8Atri(Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade)
        );
      }
    }else {
      setD8(numeroAleatorio)
    }
    await api.put("/player/1", {
      valorD8: d8
    });
    
    setD8(numeroAleatorio);
  }

  async function rolarD10(e) {
    e.preventDefault();
    
    var numeroAleatorio = Math.floor(Math.random() * 10 + 1);

    var ataque = parseInt(document.getElementById("ataque").value);
    var defesa = parseInt(document.getElementById("defesa").value);
    var inteligencia = parseInt(document.getElementById("inteligencia").value);
    var resistencia = parseInt(document.getElementById("resistencia").value);
    var previsao = parseInt(document.getElementById("previsao").value);
    var velocidade = parseInt(document.getElementById("velocidade").value);
    var somaPorcentagem = parseInt(document.getElementById("%").value);

    var somarAtributo = document.getElementById("somarAtributos").value;

    if (somarAtributo === "Ataque") {
      if (somaPorcentagem === 0) {
        setD10Atri(ataque + numeroAleatorio )
      } else {
        setD10Atri( Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque)
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        setD10Atri( defesa + numeroAleatorio);
      } else {
        setD10Atri( Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa)
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        setD10Atri(
          inteligencia + numeroAleatorio);
      } else {
        setD10Atri( Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia)
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        setD10Atri(
          resistencia + numeroAleatorio);
      } else {
        setD10Atri( Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia)
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        setD10Atri( previsao + numeroAleatorio);
      } else {
        setD10Atri( Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao)
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        setD10Atri( velocidade + numeroAleatorio);
      } else {
        setD10Atri( Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade)
        );
      }
    }else {
      setD10(numeroAleatorio) 
    }
    await api.put("/player/1", {
      valorD10: d10
    });
    setD10(numeroAleatorio) 
  }

  async function rolarD12(e) {
    e.preventDefault();
    
    var numeroAleatorio = Math.floor(Math.random() * 12 + 1);

    var ataque = parseInt(document.getElementById("ataque").value);
    var defesa = parseInt(document.getElementById("defesa").value);
    var inteligencia = parseInt(document.getElementById("inteligencia").value);
    var resistencia = parseInt(document.getElementById("resistencia").value);
    var previsao = parseInt(document.getElementById("previsao").value);
    var velocidade = parseInt(document.getElementById("velocidade").value);
    var somaPorcentagem = parseInt(document.getElementById("%").value);

    var somarAtributo = document.getElementById("somarAtributos").value;

    if (somarAtributo === "Ataque") {
      if (somaPorcentagem === 0) {
        setD12Atri( ataque + numeroAleatorio);
      } else {
        setD12Atri( Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque)
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        setD12Atri( defesa + numeroAleatorio);
      } else {
        setD12Atri( Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa)
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        setD12Atri(
          inteligencia + numeroAleatorio);
      } else {
        setD12Atri( Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia)
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        setD12Atri(
          resistencia + numeroAleatorio);
      } else {
        setD12Atri( Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia)
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        setD12Atri( previsao + numeroAleatorio);
      } else {
        setD12Atri( Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao)
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        setD12Atri( velocidade + numeroAleatorio);
      } else {
        setD12Atri( Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade)
        );
      }
    }else {
      setD12(numeroAleatorio)
    }

    await api.put("/player/1", {
      valorD12: d12
    });
    
    setD12(numeroAleatorio)
  }

  async function rolarD20(e) {
    e.preventDefault();

    var numeroAleatorio = Math.floor(Math.random() * 20 + 1);

    var ataque = parseInt(document.getElementById("ataque").value);
    var defesa = parseInt(document.getElementById("defesa").value);
    var inteligencia = parseInt(document.getElementById("inteligencia").value);
    var resistencia = parseInt(document.getElementById("resistencia").value);
    var previsao = parseInt(document.getElementById("previsao").value);
    var velocidade = parseInt(document.getElementById("velocidade").value);
    var somaPorcentagem = parseInt(document.getElementById("%").value);

    var somarAtributo = document.getElementById("somarAtributos").value;

    if (somarAtributo === "Ataque") {
      if (somaPorcentagem === 0) {
        setD20Atri(ataque + numeroAleatorio);
      } else {
        setD20Atri( Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque)
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        setD20Atri( defesa + numeroAleatorio);
      } else {
        setD20Atri( Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa)
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        setD20Atri(
          inteligencia + numeroAleatorio);
      } else {
        setD20Atri( Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia)
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        setD20Atri(
          resistencia + numeroAleatorio);
      } else {
        setD20Atri( Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia)
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        setD20Atri( previsao + numeroAleatorio);
      } else {
        setD20Atri( Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao)
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        setD20Atri( velocidade + numeroAleatorio);
      } else {
        setD20Atri( Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade)
        );
      }
    }else {
      setD20(numeroAleatorio)
    
    await api.put("/player/1", {
      valorD20: d20
    });

    setD20(numeroAleatorio)
  }
}

  const [ataque, setAtaque] = useState("");
  const [defesa, setDefesa] = useState("");
  const [inteligencia, setInteligencia] = useState("");
  const [resistencia, setResistencia] = useState("");
  const [previsao, setPrevisao] = useState("");
  const [velocidade, setVelocidade] = useState("");

  const [d4, setD4] = useState();
  const [d6, setD6] = useState();
  const [d8, setD8] = useState();
  const [d10, setD10] = useState();
  const [d12, setD12] = useState();
  const [d20, setD20] = useState();

  const [d4Atri, setD4Atri] = useState();
  const [d6Atri, setD6Atri] = useState();
  const [d8Atri, setD8Atri] = useState();
  const [d10Atri, setD10Atri] = useState();
  const [d12Atri, setD12Atri] = useState();
  const [d20Atri, setD20Atri] = useState();


  const handleOpen = () => {
    setOpen(true);
    api
    .get("/player/" + userId)
    .then(res => {
      setAtaque(res.data.ataqueAtri)
      setDefesa(res.data.defesaAtri)
      setInteligencia(res.data.inteligenciaAtri)
      setResistencia(res.data.resistenciaAtri)
      setPrevisao(res.data.previsaoAtri)
      setVelocidade(res.data.velocidadeAtri)
    })
    .catch(error => {
      console.log(error);
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        className="Button-Roller"
      >
        Rolar Dados
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        F
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="alerta" id="alerta">
              <Alert variant="danger" onClose={handleFechar} dismissible>
                <Alert.Heading>
                  Aguarde o Mestre liberar a rolagem!!
                </Alert.Heading>
              </Alert>
            </div>
            <h2 id="transition-modal-title">Escolha o dado para Rolar</h2>
            <div>
              <h5>Somar Atributo</h5>
              <div className="Atributo">
                <div className="espaco2">
                  <TextField
                    id="ataque"
                    label="Atq"
                    value={ataque}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      className: "estiloLabelAtributosDado"
                    }}
                    InputLabelProps={{ className: "estiloLabelAtributosDado" }}
                  />
                </div>
                <div className="espaco2">
                  <TextField
                    id="defesa"
                    label="Def"
                    value={defesa}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      className: "estiloLabelAtributosDado"
                    }}
                    InputLabelProps={{ className: "estiloLabelAtributosDado" }}
                  />
                </div>
                <div className="espaco2">
                  <TextField
                    id="inteligencia"
                    label="Int"
                    value={inteligencia}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      className: "estiloLabelAtributosDado"
                    }}
                    InputLabelProps={{ className: "estiloLabelAtributosDado" }}
                  />
                </div>
                <div className="espaco2">
                  <TextField
                    id="resistencia"
                    label="Res"
                    value={resistencia}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      className: "estiloLabelAtributosDado"
                    }}
                    InputLabelProps={{ className: "estiloLabelAtributosDado" }}
                  />
                </div>
                <div className="espaco2">
                  <TextField
                    id="previsao"
                    label="Pre"
                    value={previsao}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      className: "estiloLabelAtributosDado"
                    }}
                    InputLabelProps={{ className: "estiloLabelAtributosDado" }}
                  />
                </div>
                <div className="espaco2">
                  <TextField
                    id="velocidade"
                    label="Vel"
                    value={velocidade}
                    variant="outlined"
                    InputProps={{
                      readOnly: true,
                      className: "estiloLabelAtributosDado"
                    }}
                    InputLabelProps={{ className: "estiloLabelAtributosDado" }}
                  />
                </div>
                <div className="espaco2">
                  <TextField
                    id="%"
                    label="%"
                    defaultValue="0"
                    variant="outlined"
                    type="number"
                    InputProps={{ className: "estiloLabelAtributosDado" }}
                    InputLabelProps={{
                      className: "estiloLabelAtributosDado",
                      shrink: true
                    }}
                  />
                </div>
              </div>
              <FormControl component="fieldset">
                <RadioGroup aria-label="gender" onChange={handleChange}>
                  <div className="alinhar">
                    <div className="espaco3">
                      <FormControlLabel
                        value="Ataque"
                        control={<Radio color="default" />}
                      />
                    </div>
                    <div className="espaco3">
                      <FormControlLabel
                        value="Defesa"
                        control={<Radio color="default" />}
                      />
                    </div>
                    <div className="espaco3">
                      <FormControlLabel
                        value="Inteligencia"
                        control={<Radio color="default" />}
                      />
                    </div>
                    <div className="espaco3">
                      <FormControlLabel
                        value="Resistencia"
                        control={<Radio color="default" />}
                      />
                    </div>
                    <div className="espaco3">
                      <FormControlLabel
                        value="Previsao"
                        control={<Radio color="default" />}
                      />
                    </div>
                    <div className="espaco3">
                      <FormControlLabel
                        value="Velocidade"
                        control={<Radio color="default" />}
                      />
                    </div>
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
            <div className="dados">
              <div className="dadosCol1">
                <div className="d4">
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
                    id="d4Atri"
                    label="D4+Atr"
                    value={d4Atri}
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
                  <Button className="botaoD4" onClick={rolarD4} />
                </div>
                <div className="espacamento" />
                <div className="d8">
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
                    id="d8Atri"
                    label="D8+Atr"
                    value={d8Atri}
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
                  <Button className="botaoD8" onClick={rolarD8} />
                </div>
                <div className="espacamento" />
                <div className="d12">
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
                  <div className="espacamento" />
                  <TextField
                    id="d12Atri"
                    label="D12+Atr"
                    value={d12Atri}
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
                  <Button className="botaoD12" onClick={rolarD12} />
                </div>
              </div>
              <div className="espacamentoDados" />
              <div className="dadosCol2">
                <div className="d6">
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
                    id="d6Atri"
                    label="D6+Atr"
                    value={d6Atri}
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
                  <Button className="botaoD6" onClick={rolarD6} />
                </div>
                <div className="espacamento" />
                <div className="d10">
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
                  <div className="espacamento" />
                  <TextField
                    id="d10Atri"
                    label="D10+Atr"
                    value={d10Atri}
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
                  <Button className="botaoD10" onClick={rolarD10} />
                </div>
                <div className="espacamento" />
                <div className="d20">
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
                  <div className="espacamento" />
                  <TextField
                    id="d20Atri"
                    label="D20+Atr"
                    value={d20Atri}
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
                  <Button className="botaoD20" onClick={rolarD20} />
                </div>
              </div>
              <input id="somarAtributos" value={value} />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
