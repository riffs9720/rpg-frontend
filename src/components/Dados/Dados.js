import React from "react";
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

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleFechar = event => {
    document.getElementById("alerta").style.display = "none";
  };

  async function rolarD4(e) {
    e.preventDefault();

      var valorDado = document.getElementById("d4");
      var valorDadoAtri = document.getElementById("d4Atri")
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
          valorDadoAtri.value = ataque + numeroAleatorio;
        } else {
          document.getElementById("d4Atri").value = Math.round(
            (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
              ataque
          );
        }
      } else if (somarAtributo === "Defesa") {
        if (somaPorcentagem === 0) {
          valorDadoAtri.value = defesa + numeroAleatorio;
        } else {
          valorDadoAtri.value = Math.round(
            (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
              numeroAleatorio +
              defesa
          );
        }
      } else if (somarAtributo === "Inteligencia") {
        if (somaPorcentagem === 0) {
          valorDadoAtri.value =
            inteligencia + numeroAleatorio;
        } else {
          valorDadoAtri.value = Math.round(
            (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
              numeroAleatorio +
              inteligencia
          );
        }
      } else if (somarAtributo === "Resistencia") {
        if (somaPorcentagem === 0) {
          valorDadoAtri.value =
            resistencia + numeroAleatorio;
        } else {
          valorDadoAtri.value = Math.round(
            (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
              numeroAleatorio +
              resistencia
          );
        }
      } else if (somarAtributo === "Previsao") {
        if (somaPorcentagem === 0) {
          valorDadoAtri.value = previsao + numeroAleatorio;
        } else { 
          valorDadoAtri.value = Math.round(
            (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
              numeroAleatorio +
              previsao
          );
        }
      } else if (somarAtributo === "Velocidade") {
        if (somaPorcentagem === 0) {
          valorDadoAtri.value =
            velocidade + numeroAleatorio;
        } else {
          valorDadoAtri.value = Math.round(
            (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
              numeroAleatorio +
              velocidade
          );
        }
      }else {
        valorDadoAtri = numeroAleatorio
      }

      if(valorDadoAtri < 0){
        valorDadoAtri = 0;
      }

      await api.put("/player/1", {
        valorD4: valorDadoAtri.value
      });

      valorDado.value = numeroAleatorio;
  }

  async function rolarD6(e) {
    e.preventDefault();

    var valorDado = document.getElementById("d6");
    var valorDadoAtri = document.getElementById("d6Atri");
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
        valorDadoAtri.value = ataque + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = defesa + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value =
          inteligencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = resistencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = previsao + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = velocidade + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade
        );
      }
    }else {
      valorDadoAtri = numeroAleatorio
    }

    if(valorDadoAtri < 0){
      valorDadoAtri = 0;
    }

    await api.put("/player/1", {
      valorD6: valorDadoAtri.value
    });

    valorDado.value = numeroAleatorio;
  }

  async function rolarD8(e) {
    e.preventDefault();

    var valorDado = document.getElementById("d8");
    var valorDadoAtri = document.getElementById("d8Atri");
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
        valorDadoAtri.value = ataque + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = defesa + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value =
          inteligencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = resistencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = previsao + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = velocidade + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade
        );
      }
    }else {
      valorDadoAtri = numeroAleatorio
    }

    if(valorDadoAtri < 0){
      valorDadoAtri = 0;
    }
    
    await api.put("/player/1", {
      valorD8: valorDadoAtri.value
    });
    
    valorDado.value = numeroAleatorio;
  }

  async function rolarD10(e) {
    e.preventDefault();
    
    var valorDado = document.getElementById("d10");
    var valorDadoAtri = document.getElementById("d10Atri");
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
        valorDadoAtri.value = ataque + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = defesa + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value =
          inteligencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value =
          resistencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = previsao + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = velocidade + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade
        );
      }
    }else {
      valorDadoAtri = numeroAleatorio
    }
    
    if(valorDadoAtri < 0){
      valorDadoAtri = 0;
    }
    
    await api.put("/player/1", {
      valorD10: valorDadoAtri.value
    });
    valorDado.value = numeroAleatorio;
  }

  async function rolarD12(e) {
    e.preventDefault();
    
    var valorDado = document.getElementById("d12");
    var valorDadoAtri = document.getElementById("d12Atri");
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
        valorDadoAtri.value = ataque + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = defesa + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value =
          inteligencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value =
          resistencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = previsao + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = velocidade + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade
        );
      }
    }else {
      valorDadoAtri = numeroAleatorio
    }
    
    if(valorDadoAtri < 0){
      valorDadoAtri = 0;
    }
    
    await api.put("/player/1", {
      valorD12: valorDadoAtri.value
    });
    
    valorDado.value = numeroAleatorio;
  }

  async function rolarD20(e) {
    e.preventDefault();

    var valorDado = document.getElementById("d20");
    var valorDadoAtri = document.getElementById("d20Atri");
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
        valorDadoAtri.value = ataque + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (ataque + numeroAleatorio)) / 100 +
            numeroAleatorio +
            ataque
        );
      }
    } else if (somarAtributo === "Defesa") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = defesa + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (defesa + numeroAleatorio)) / 100 +
            numeroAleatorio +
            defesa
        );
      }
    } else if (somarAtributo === "Inteligencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value =
          inteligencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (inteligencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            inteligencia
        );
      }
    } else if (somarAtributo === "Resistencia") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value =
          resistencia + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (resistencia + numeroAleatorio)) / 100 +
            numeroAleatorio +
            resistencia
        );
      }
    } else if (somarAtributo === "Previsao") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = previsao + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (previsao + numeroAleatorio)) / 100 +
            numeroAleatorio +
            previsao
        );
      }
    } else if (somarAtributo === "Velocidade") {
      if (somaPorcentagem === 0) {
        valorDadoAtri.value = velocidade + numeroAleatorio;
      } else {
        valorDadoAtri.value = Math.round(
          (somaPorcentagem * (velocidade + numeroAleatorio)) / 100 +
            numeroAleatorio +
            velocidade
        );
      }
    }else {
      valorDadoAtri = numeroAleatorio
    }

    console.log(valorDadoAtri)

    if(valorDadoAtri < 0){
      valorDadoAtri = 0;
    }

    await api.put("/player/1", {
      valorD20: valorDadoAtri.value
    });

    valorDado.value = numeroAleatorio;
  }

  const handleOpen = () => {
    setOpen(true);
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
                    value="100"
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
                    value="2"
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
                    value="3"
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
                    value="4"
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
                    value="5"
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
                    value="6"
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
                    value=""
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
