import React, { useState, useEffect } from "react";

import { api } from "../../../config/api";

import { TextField, Button } from "@material-ui/core";

import BarraDeVida from "../../../components/StatusBar/BarraDeVida";
import BarraDeMana from "../../../components/StatusBar/BarraDeMana";
import BarraDeExperiencia from "../../../components/StatusBar/BarraDeExperiencia";
import Badge from '@material-ui/core/Badge';

import { withStyles, makeStyles } from "@material-ui/core/styles";

import Tooltip from "@material-ui/core/Tooltip";

import Dados from "../../../components/Dados/Dados";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import "./Ficha.css";

const useStyles = makeStyles(theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

export default function Ficha() {
  const [nome, setNome] = useState("Nome");
  const [raca, setRaca] = useState("Raça");
  const [classe, setClasse] = useState("Classe");
  const [arrombscoin, setArrombscoin] = useState("Arrombscoin");
  const [hpAtual, setHpAtual] = useState("0")
  const [hpTotal, setHpTotal] = useState("0")
  const [mpAtual, setMpAtual] = useState("0")
  const [mpTotal, setMpTotal] = useState("0")
  const [ataque, setAtaque] = useState("Ataque");
  const [defesa, setDefesa] = useState("defesa");
  const [inteligencia, setInteligencia] = useState("Inteligencia");
  const [resistencia, setResistencia] = useState("Resistencia");
  const [previsao, setPrevisao] = useState("Previsao");
  const [velocidade, setVelocidade] = useState("Velocidade");
  const [helmo, setHelmo] = useState([]);
  const [armadura, setArmadura] = useState([]);
  const [maoDireita, setMaoDireita] = useState([]);
  const [maoEsquerda, setMaoEsquerda] = useState([]);
  const [bota, setBota] = useState([]);
  const [valorHelmo, setValorHelmo] = useState("none");
  const [valorArmadura, setValorArmadura] = useState("none");
  const [valorMaoDireita, setValorMaoDireita] = useState("none");
  const [valorMaoEsquerda, setValorMaoEsquerda] = useState("none");
  const [valorBotas, setValorBotas] = useState("none");
  const idHelmo = valorHelmo;
  const idArmadura = valorArmadura;
  const idMaoDireita = valorMaoDireita;
  const idMaoEsquerda = valorMaoEsquerda;
  const idBotas = valorBotas;
  const [valorStatusTotalAta, setValorStatusTotalAta] = useState(0);
  const [valorStatusTotalDef, setValorStatusTotalDef] = useState(0);
  const [valorStatusTotalInt, setValorStatusTotalInt] = useState(0);
  const [valorStatusTotalRes, setValorStatusTotalRes] = useState(0);
  const [valorStatusTotalPre, setValorStatusTotalPre] = useState(0);
  const [valorStatusTotalVel, setValorStatusTotalVel] = useState(0);
  const [qtdPocaoHp25, setQtdPocaoHp25] = useState(0);
  const [qtdPocaoHp50, setQtdPocaoHp50] = useState(0);
  const [qtdPocaoHp100, setQtdPocaoHp100] = useState(0);
  const [qtdPocaoMp25, setQtdPocaoMp25] = useState(0);
  const [qtdPocaoMp50, setQtdPocaoMp50] = useState(0);
  const [qtdPocaoMp100, setQtdPocaoMp100] = useState(0);

  const classes = useStyles();

  const [somaAtaqueHelmo, setSomaAtaqueHelmo] = useState(0);
  const [somaAtaqueBota, setSomaAtaqueBota] = useState(0);
  const [somaAtaqueArmadura, setSomaAtaqueArmadura] = useState(0);
  const [somaAtaqueMaoEsquerda, setSomaAtaqueMaoEsquerda] = useState(0);
  const [somaAtaqueMaoDireita, setSomaAtaqueMaoDireita] = useState(0);

  const [somaDefesaHelmo, setSomaDefesaHelmo] = useState(0);
  const [somaDefesaBota, setSomaDefesaBota] = useState(0);
  const [somaDefesaArmadura, setSomaDefesaArmadura] = useState(0);
  const [somaDefesaMaoEsquerda, setSomaDefesaMaoEsquerda] = useState(0);
  const [somaDefesaMaoDireita, setSomaDefesaMaoDireita] = useState(0);

  const [somaInteligenciaHelmo, setSomaInteligenciaHelmo] = useState(0);
  const [somaInteligenciaBota, setSomaInteligenciaBota] = useState(0);
  const [somaInteligenciaArmadura, setSomaInteligenciaArmadura] = useState(0);
  const [
    somaInteligenciaMaoEsquerda,
    setSomaInteligenciaMaoEsquerda
  ] = useState(0);
  const [somaInteligenciaMaoDireita, setSomaInteligenciaMaoDireita] = useState(
    0
  );

  const [somaResistenciaHelmo, setSomaResistenciaHelmo] = useState(0);
  const [somaResistenciaBota, setSomaResistenciaBota] = useState(0);
  const [somaResistenciaArmadura, setSomaResistenciaArmadura] = useState(0);
  const [somaResistenciaMaoEsquerda, setSomaResistenciaMaoEsquerda] = useState(
    0
  );
  const [somaResistenciaMaoDireita, setSomaResistenciaMaoDireita] = useState(0);

  const [somaPrevisaoHelmo, setSomaPrevisaoHelmo] = useState(0);
  const [somaPrevisaoBota, setSomaPrevisaoBota] = useState(0);
  const [somaPrevisaoArmadura, setSomaPrevisaoArmadura] = useState(0);
  const [somaPrevisaoMaoEsquerda, setSomaPrevisaoMaoEsquerda] = useState(0);
  const [somaPrevisaoMaoDireita, setSomaPrevisaoMaoDireita] = useState(0);

  const [somaVelocidadeHelmo, setSomaVelocidadeHelmo] = useState(0);
  const [somaVelocidadeBota, setSomaVelocidadeBota] = useState(0);
  const [somaVelocidadeArmadura, setSomaVelocidadeArmadura] = useState(0);
  const [somaVelocidadeMaoEsquerda, setSomaVelocidadeMaoEsquerda] = useState(0);
  const [somaVelocidadeMaoDireita, setSomaVelocidadeMaoDireita] = useState(0);

  const [subAtaqueHelmo, setSubAtaqueHelmo] = useState(0);
  const [subAtaqueBota, setSubAtaqueBota] = useState(0);
  const [subAtaqueArmadura, setSubAtaqueArmadura] = useState(0);
  const [subAtaqueMaoEsquerda, setSubAtaqueMaoEsquerda] = useState(0);
  const [subAtaqueMaoDireita, setSubAtaqueMaoDireita] = useState(0);

  const [subDefesaHelmo, setSubDefesaHelmo] = useState(0);
  const [subDefesaBota, setSubDefesaBota] = useState(0);
  const [subDefesaArmadura, setSubDefesaArmadura] = useState(0);
  const [subDefesaMaoEsquerda, setSubDefesaMaoEsquerda] = useState(0);
  const [subDefesaMaoDireita, setSubDefesaMaoDireita] = useState(0);

  const [subInteligenciaHelmo, setSubInteligenciaHelmo] = useState(0);
  const [subInteligenciaBota, setSubInteligenciaBota] = useState(0);
  const [subInteligenciaArmadura, setSubInteligenciaArmadura] = useState(0);
  const [subInteligenciaMaoEsquerda, setSubInteligenciaMaoEsquerda] = useState(
    0
  );
  const [subInteligenciaMaoDireita, setSubInteligenciaMaoDireita] = useState(0);

  const [subResistenciaHelmo, setSubResistenciaHelmo] = useState(0);
  const [subResistenciaBota, setSubResistenciaBota] = useState(0);
  const [subResistenciaArmadura, setSubResistenciaArmadura] = useState(0);
  const [subResistenciaMaoEsquerda, setSubResistenciaMaoEsquerda] = useState(0);
  const [subResistenciaMaoDireita, setSubResistenciaMaoDireita] = useState(0);

  const [subPrevisaoHelmo, setSubPrevisaoHelmo] = useState(0);
  const [subPrevisaoBota, setSubPrevisaoBota] = useState(0);
  const [subPrevisaoArmadura, setSubPrevisaoArmadura] = useState(0);
  const [subPrevisaoMaoEsquerda, setSubPrevisaoMaoEsquerda] = useState(0);
  const [subPrevisaoMaoDireita, setSubPrevisaoMaoDireita] = useState(0);

  const [subVelocidadeHelmo, setSubVelocidadeHelmo] = useState(0);
  const [subVelocidadeBota, setSubVelocidadeBota] = useState(0);
  const [subVelocidadeArmadura, setSubVelocidadeArmadura] = useState(0);
  const [subVelocidadeMaoEsquerda, setSubVelocidadeMaoEsquerda] = useState(0);
  const [subVelocidadeMaoDireita, setSubVelocidadeMaoDireita] = useState(0);

  const handleChangeHelmo = event => {
    setValorHelmo(event.target.value);
  };

  const handleChangeArmadura = event => {
    setValorArmadura(event.target.value);
  };

  const handleChangeMaoDireita = event => {
    setValorMaoDireita(event.target.value);
  };

  const handleChangeMaoEsquerda = event => {
    setValorMaoEsquerda(event.target.value);
  };

  const handleChangeBota = event => {
    setValorBotas(event.target.value);
  };

  async function hp25(e) {
    e.preventDefault();
    if(hpAtual !== hpTotal){
      if(qtdPocaoHp25 > 0){
        let valor25 = hpTotal * (25 / 100)
      let soma25 = hpAtual + valor25
      if(soma25 > hpTotal){
        soma25 = hpTotal
      }
      
      await api.put("/player/1", {
        qtdPocaoHp25: qtdPocaoHp25 - 1,
        vidaAtual: soma25
        });
        document.location.reload(true);
      }else {
        alert("Voce não tem poção para usar")
      }
    }else {
      alert("Sua vida esta cheia não gaste suas poções")
    }
  }

  async function hp50(e) {
    e.preventDefault();
    if(hpAtual !== hpTotal){
      if(qtdPocaoHp50 > 0){
        let valor50 = hpTotal * (50 / 100)
      let soma50 = hpAtual + valor50
      if(soma50 > hpTotal){
        soma50 = hpTotal
      }
      
      await api.put("/player/1", {
        qtdPocaoHp50: qtdPocaoHp50 - 1,
        vidaAtual: soma50
        });
        document.location.reload(true);
      }else {
        alert("Voce não tem poção para usar")
      }
    }else {
      alert("Sua vida esta cheia não gaste suas poções")
    }
  }

  async function hp100(e) {
    e.preventDefault();
    if(hpAtual !== hpTotal){
      if(qtdPocaoHp100 > 0){
        let valor100 = hpTotal * (100 / 100)
      let soma100 = hpAtual + valor100
      if(soma100 > hpTotal){
        soma100 = hpTotal
      }
      
      await api.put("/player/1", {
        qtdPocaoHp100: qtdPocaoHp100 - 1,
        vidaAtual: soma100
        });
        document.location.reload(true);
      }else {
        alert("Voce não tem poção para usar")
      }
    }else {
      alert("Sua vida esta cheia não gaste suas poções")
    }
  }

  async function mp25(e) {
    e.preventDefault();
    if(mpAtual !== mpTotal){
      if(qtdPocaoMp25 > 0){
        let valor25 = mpTotal * (25 / 100)
      let soma25 = mpAtual + valor25
      if(soma25 > mpTotal){
        soma25 = mpTotal
      }
      
      await api.put("/player/1", {
        qtdPocaoMp25: qtdPocaoMp25 - 1,
        vidaAtual: soma25
        });
        document.location.reload(true);
      }else {
        alert("Voce não tem poção para usar")
      }
    }else {
      alert("Sua mana esta cheia não gaste suas poções")
    }
  }

  async function mp50(e) {
    e.preventDefault();
    if(mpAtual !== mpTotal){
      if(qtdPocaoMp50 > 0){
        let valor50 = mpTotal * (50 / 100)
      let soma50 = mpAtual + valor50
      if(soma50 > mpTotal){
        soma50 = mpTotal
      }
      
      await api.put("/player/1", {
        qtdPocaoMp50: qtdPocaoMp50 - 1,
        vidaAtual: soma50
        });
        document.location.reload(true);
      }else {
        alert("Voce não tem poção para usar")
      }
    }else {
      alert("Sua mana esta cheia não gaste suas poções")
    }
  }

  async function mp100(e) {
    e.preventDefault();
    if(mpAtual !== mpTotal){
      if(qtdPocaoMp100 > 0){
        let valor100 = mpTotal * (100 / 100)
      let soma100 = mpAtual + valor100
      if(soma100 > mpTotal){
        soma100 = mpTotal
      }
      
      await api.put("/player/1", {
        qtdPocaoMp100: qtdPocaoMp100 - 1,
        vidaAtual: soma100
        });
        document.location.reload(true);
      }else {
        alert("Voce não tem poção para usar")
      }
    }else {
      alert("Sua mana esta cheia não gaste suas poções")
    }
  }

  useEffect(() => {
    setValorStatusTotalAta(
      somaAtaqueBota +
        somaAtaqueHelmo +
        somaAtaqueArmadura +
        somaAtaqueMaoEsquerda +
        somaAtaqueMaoDireita +
        ataque -
        subAtaqueBota -
        subAtaqueHelmo -
        subAtaqueArmadura -
        subAtaqueMaoEsquerda -
        subAtaqueMaoDireita
    );
  }, [
    ataque,
    somaAtaqueArmadura,
    somaAtaqueBota,
    somaAtaqueHelmo,
    somaAtaqueMaoDireita,
    somaAtaqueMaoEsquerda,
    subAtaqueArmadura,
    subAtaqueBota,
    subAtaqueHelmo,
    subAtaqueMaoDireita,
    subAtaqueMaoEsquerda
  ]);

  useEffect(() => {
    setValorStatusTotalDef(
      somaDefesaBota +
        somaDefesaHelmo +
        somaDefesaArmadura +
        somaDefesaMaoEsquerda +
        somaDefesaMaoDireita +
        defesa -
        subDefesaBota -
        subDefesaHelmo -
        subDefesaArmadura -
        subDefesaMaoEsquerda -
        subDefesaMaoDireita
    );
  }, [
    defesa,
    somaDefesaArmadura,
    somaDefesaBota,
    somaDefesaHelmo,
    somaDefesaMaoDireita,
    somaDefesaMaoEsquerda,
    subDefesaArmadura,
    subDefesaBota,
    subDefesaHelmo,
    subDefesaMaoDireita,
    subDefesaMaoEsquerda
  ]);

  useEffect(() => {
    setValorStatusTotalInt(
      somaInteligenciaBota +
        somaInteligenciaHelmo +
        somaInteligenciaArmadura +
        somaInteligenciaMaoEsquerda +
        somaInteligenciaMaoDireita +
        inteligencia -
        subInteligenciaBota -
        subInteligenciaHelmo -
        subInteligenciaArmadura -
        subInteligenciaMaoEsquerda -
        subInteligenciaMaoDireita
    );
  }, [
    defesa,
    inteligencia,
    somaInteligenciaArmadura,
    somaInteligenciaBota,
    somaInteligenciaHelmo,
    somaInteligenciaMaoDireita,
    somaInteligenciaMaoEsquerda,
    subInteligenciaArmadura,
    subInteligenciaBota,
    subInteligenciaHelmo,
    subInteligenciaMaoDireita,
    subInteligenciaMaoEsquerda
  ]);

  useEffect(() => {
    setValorStatusTotalRes(
      somaResistenciaBota +
        somaResistenciaHelmo +
        somaResistenciaArmadura +
        somaResistenciaMaoEsquerda +
        somaResistenciaMaoDireita +
        resistencia -
        subResistenciaBota -
        subResistenciaHelmo -
        subResistenciaArmadura -
        subResistenciaMaoEsquerda -
        subResistenciaMaoDireita
    );
  }, [
    resistencia,
    somaResistenciaArmadura,
    somaResistenciaBota,
    somaResistenciaHelmo,
    somaResistenciaMaoDireita,
    somaResistenciaMaoEsquerda,
    subResistenciaArmadura,
    subResistenciaBota,
    subResistenciaHelmo,
    subResistenciaMaoDireita,
    subResistenciaMaoEsquerda
  ]);

  useEffect(() => {
    setValorStatusTotalPre(
      somaPrevisaoBota +
        somaPrevisaoHelmo +
        somaPrevisaoArmadura +
        somaPrevisaoMaoEsquerda +
        somaPrevisaoMaoDireita +
        previsao -
        subPrevisaoBota -
        subPrevisaoHelmo -
        subPrevisaoArmadura -
        subPrevisaoMaoEsquerda -
        subPrevisaoMaoDireita
    );
  }, [
    previsao,
    somaPrevisaoArmadura,
    somaPrevisaoBota,
    somaPrevisaoHelmo,
    somaPrevisaoMaoDireita,
    somaPrevisaoMaoEsquerda,
    subPrevisaoArmadura,
    subPrevisaoBota,
    subPrevisaoHelmo,
    subPrevisaoMaoDireita,
    subPrevisaoMaoEsquerda
  ]);

  useEffect(() => {
    setValorStatusTotalVel(
      somaVelocidadeBota +
        somaVelocidadeHelmo +
        somaVelocidadeArmadura +
        somaVelocidadeMaoEsquerda +
        somaVelocidadeMaoDireita +
        velocidade -
        subVelocidadeBota -
        subVelocidadeHelmo -
        subVelocidadeArmadura -
        subVelocidadeMaoEsquerda -
        subVelocidadeMaoDireita
    );
  }, [
    somaVelocidadeArmadura,
    somaVelocidadeBota,
    somaVelocidadeHelmo,
    somaVelocidadeMaoDireita,
    somaVelocidadeMaoEsquerda,
    subVelocidadeArmadura,
    subVelocidadeBota,
    subVelocidadeHelmo,
    subVelocidadeMaoDireita,
    subVelocidadeMaoEsquerda,
    velocidade
  ]);

  useEffect(() => {
    api
      .get("/player/" + 1)
      .then(res => {
        console.log(res);
        setNome(res.data.nome);
        setRaca(res.data.raca);
        setClasse(res.data.classe);
        setArrombscoin(res.data.arrombscoin);
        setHpAtual(res.data.vidaAtual)
        setHpTotal(res.data.vidaTotal)
        setMpAtual(res.data.manaAtual)
        setMpTotal(res.data.manaTotal)
        setAtaque(res.data.ataque);
        setDefesa(res.data.defesa);
        setInteligencia(res.data.inteligencia);
        setResistencia(res.data.resistencia);
        setPrevisao(res.data.resistencia);
        setVelocidade(res.data.velocidade);
        setQtdPocaoHp25(res.data.qtdPocaoHp25)
        setQtdPocaoHp50(res.data.qtdPocaoHp50)
        setQtdPocaoHp100(res.data.qtdPocaoHp100)
        setQtdPocaoMp25(res.data.qtdPocaoMp25)
        setQtdPocaoMp50(res.data.qtdPocaoMp50)
        setQtdPocaoMp100(res.data.qtdPocaoMp100)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(idHelmo);
    api
      .get("/equipamento/" + idHelmo)
      .then(res => {
        if (res.data.descSomaAtri1 === "Ata") {
          setSomaAtaqueHelmo(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Def") {
          setSomaDefesaHelmo(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Int") {
          setSomaInteligenciaHelmo(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Res") {
          setSomaResistenciaHelmo(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Pre") {
          setSomaPrevisaoHelmo(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Vel") {
          setSomaVelocidadeHelmo(res.data.valSomaAtri1);
        }

        if (res.data.descSomaAtri2 === "Ata") {
          setSomaAtaqueHelmo(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Def") {
          setSomaDefesaHelmo(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Int") {
          setSomaInteligenciaHelmo(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Res") {
          setSomaResistenciaHelmo(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Pre") {
          setSomaPrevisaoHelmo(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Vel") {
          setSomaVelocidadeHelmo(res.data.valSomaAtri2);
        }

        if (res.data.descSubAtri1 === "Ata") {
          setSubAtaqueHelmo(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Def") {
          setSubDefesaHelmo(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Int") {
          setSubInteligenciaHelmo(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Res") {
          setSubResistenciaHelmo(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Pre") {
          setSubPrevisaoHelmo(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Vel") {
          setSubVelocidadeHelmo(res.data.valSubAtri1);
        }

        if (res.data.descSubAtri2 === "Ata") {
          setSubAtaqueHelmo(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Def") {
          setSubDefesaHelmo(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Int") {
          setSubInteligenciaHelmo(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Res") {
          setSubResistenciaHelmo(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Pre") {
          setSubPrevisaoHelmo(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Vel") {
          setSubVelocidadeHelmo(res.data.valSubAtri2);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [idHelmo]);

  useEffect(() => {
    api
      .get("/equipamento/" + idArmadura)
      .then(res => {
        if (res.data.descSomaAtri1 === "Ata") {
          setSomaAtaqueArmadura(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Def") {
          setSomaDefesaArmadura(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Int") {
          setSomaInteligenciaArmadura(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Res") {
          setSomaResistenciaArmadura(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Pre") {
          setSomaPrevisaoArmadura(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Vel") {
          setSomaVelocidadeArmadura(res.data.valSomaAtri1);
        }

        if (res.data.descSomaAtri2 === "Ata") {
          setSomaAtaqueArmadura(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Def") {
          setSomaDefesaArmadura(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Int") {
          setSomaInteligenciaArmadura(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Res") {
          setSomaResistenciaArmadura(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Pre") {
          setSomaPrevisaoArmadura(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Vel") {
          setSomaVelocidadeArmadura(res.data.valSomaAtri2);
        }

        if (res.data.descSubAtri1 === "Ata") {
          setSubAtaqueArmadura(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Def") {
          setSubDefesaArmadura(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Int") {
          setSubInteligenciaArmadura(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Res") {
          setSubResistenciaArmadura(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Pre") {
          setSubPrevisaoArmadura(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Vel") {
          setSubVelocidadeArmadura(res.data.valSubAtri1);
        }

        if (res.data.descSubAtri2 === "Ata") {
          setSubAtaqueArmadura(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Def") {
          setSubDefesaArmadura(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Int") {
          setSubInteligenciaArmadura(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Res") {
          setSubResistenciaArmadura(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Pre") {
          setSubPrevisaoArmadura(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Vel") {
          setSubVelocidadeArmadura(res.data.valSubAtri2);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [idArmadura]);

  useEffect(() => {
    api
      .get("/equipamento/" + idMaoDireita)
      .then(res => {
        if (res.data.descSomaAtri1 === "Ata") {
          setSomaAtaqueMaoDireita(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Def") {
          setSomaDefesaMaoDireita(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Int") {
          setSomaInteligenciaMaoDireita(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Res") {
          setSomaResistenciaMaoDireita(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Pre") {
          setSomaPrevisaoMaoDireita(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Vel") {
          setSomaVelocidadeMaoDireita(res.data.valSomaAtri1);
        }

        if (res.data.descSomaAtri2 === "Ata") {
          setSomaAtaqueMaoDireita(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Def") {
          setSomaDefesaMaoDireita(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Int") {
          setSomaInteligenciaMaoDireita(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Res") {
          setSomaResistenciaMaoDireita(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Pre") {
          setSomaPrevisaoMaoDireita(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Vel") {
          setSomaVelocidadeMaoDireita(res.data.valSomaAtri2);
        }

        if (res.data.descSubAtri1 === "Ata") {
          setSubAtaqueMaoDireita(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Def") {
          setSubDefesaMaoDireita(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Int") {
          setSubInteligenciaMaoDireita(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Res") {
          setSubResistenciaMaoDireita(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Pre") {
          setSubPrevisaoMaoDireita(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Vel") {
          setSubVelocidadeMaoDireita(res.data.valSubAtri1);
        }

        if (res.data.descSubAtri2 === "Ata") {
          setSubAtaqueMaoDireita(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Def") {
          setSubDefesaMaoDireita(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Int") {
          setSubInteligenciaMaoDireita(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Res") {
          setSubResistenciaMaoDireita(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Pre") {
          setSubPrevisaoMaoDireita(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Vel") {
          setSubVelocidadeMaoDireita(res.data.valSubAtri2);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [idMaoDireita]);

  useEffect(() => {
    api
      .get("/equipamento/" + idMaoEsquerda)
      .then(res => {
        if (res.data.descSomaAtri1 === "Ata") {
          setSomaAtaqueMaoEsquerda(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Def") {
          setSomaDefesaMaoEsquerda(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Int") {
          setSomaInteligenciaMaoEsquerda(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Res") {
          setSomaResistenciaMaoEsquerda(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Pre") {
          setSomaPrevisaoMaoEsquerda(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Vel") {
          setSomaVelocidadeMaoEsquerda(res.data.valSomaAtri1);
        }

        if (res.data.descSomaAtri2 === "Ata") {
          setSomaAtaqueMaoEsquerda(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Def") {
          setSomaDefesaMaoEsquerda(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri1 === "Int") {
          setSomaInteligenciaMaoEsquerda(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Res") {
          setSomaResistenciaMaoEsquerda(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Pre") {
          setSomaPrevisaoMaoEsquerda(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Vel") {
          setSomaVelocidadeMaoEsquerda(res.data.valSomaAtri2);
        }

        if (res.data.descSubAtri1 === "Ata") {
          setSubAtaqueMaoEsquerda(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Def") {
          setSubDefesaMaoEsquerda(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Int") {
          setSubInteligenciaMaoEsquerda(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Res") {
          setSubResistenciaMaoEsquerda(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Pre") {
          setSubPrevisaoMaoEsquerda(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Vel") {
          setSubVelocidadeMaoEsquerda(res.data.valSubAtri1);
        }

        if (res.data.descSubAtri2 === "Ata") {
          setSubAtaqueMaoEsquerda(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Def") {
          setSubDefesaMaoEsquerda(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Int") {
          setSubInteligenciaMaoEsquerda(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Res") {
          setSubResistenciaMaoEsquerda(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Pre") {
          setSubPrevisaoMaoEsquerda(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Vel") {
          setSubVelocidadeMaoEsquerda(res.data.valSubAtri2);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [idMaoEsquerda]);

  useEffect(() => {
    api
      .get("/equipamento/" + idBotas)
      .then(res => {
        if (res.data.descSomaAtri1 === "Ata") {
          setSomaAtaqueBota(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Def") {
          setSomaDefesaBota(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Int") {
          setSomaInteligenciaBota(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Res") {
          setSomaResistenciaBota(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Pre") {
          setSomaPrevisaoBota(res.data.valSomaAtri1);
        } else if (res.data.descSomaAtri1 === "Vel") {
          setSomaVelocidadeBota(res.data.valSomaAtri1);
        }

        if (res.data.descSomaAtri2 === "Ata") {
          setSomaAtaqueBota(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Def") {
          setSomaDefesaBota(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Int") {
          setSomaInteligenciaBota(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Res") {
          setSomaResistenciaBota(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Pre") {
          setSomaPrevisaoBota(res.data.valSomaAtri2);
        } else if (res.data.descSomaAtri2 === "Vel") {
          setSomaVelocidadeBota(res.data.valSomaAtri2);
        }

        if (res.data.descSubAtri1 === "Ata") {
          setSubAtaqueBota(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Def") {
          setSubDefesaBota(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Int") {
          setSubInteligenciaBota(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Res") {
          setSubResistenciaBota(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Pre") {
          setSubPrevisaoBota(res.data.valSubAtri1);
        } else if (res.data.descSubAtri1 === "Vel") {
          setSubVelocidadeBota(res.data.valSubAtri1);
        }

        if (res.data.descSubAtri2 === "Ata") {
          setSubAtaqueBota(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Def") {
          setSubDefesaBota(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Int") {
          setSubInteligenciaBota(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Res") {
          setSubResistenciaBota(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Pre") {
          setSubPrevisaoBota(res.data.valSubAtri2);
        } else if (res.data.descSubAtri2 === "Vel") {
          setSubVelocidadeBota(res.data.valSubAtri2);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [idBotas]);

  useEffect(() => {
    api
      .get("/helmo/" + 1)
      .then(res => {
        setHelmo(
          res.data.map(data => (
            <MenuItem key={data.id} value={data.id} className="EstiloSelect">
              <LightTooltip
                title={
                  data.descSomaAtri1 +
                  " + " +
                  data.valSomaAtri1 +
                  " | " +
                  data.descSomaAtri2 +
                  " + " +
                  data.valSomaAtri2 +
                  " | " +
                  data.descSubAtri1 +
                  " - " +
                  data.valSubAtri1 +
                  " | " +
                  data.descSubAtri2 +
                  " - " +
                  data.valSubAtri2
                }
                placement="right"
              >
                <MenuItem
                  key={data.id}
                  value={data.id}
                  className="EstiloSelect"
                >
                  {data.nomeEquipamento}
                </MenuItem>
              </LightTooltip>
            </MenuItem>
          ))
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get("/armadura/" + 1)
      .then(res => {
        setArmadura(
          res.data.map(data => (
            <MenuItem key={data.id} value={data.id} className="EstiloSelect">
              <LightTooltip
                title={
                  data.descSomaAtri1 +
                  " + " +
                  data.valSomaAtri1 +
                  " | " +
                  data.descSomaAtri2 +
                  " + " +
                  data.valSomaAtri2 +
                  " | " +
                  data.descSubAtri1 +
                  " - " +
                  data.valSubAtri1 +
                  " | " +
                  data.descSubAtri2 +
                  " - " +
                  data.valSubAtri2
                }
                placement="right"
              >
                <MenuItem
                  key={data.id}
                  value={data.id}
                  className="EstiloSelect"
                >
                  {data.nomeEquipamento}
                </MenuItem>
              </LightTooltip>
            </MenuItem>
          ))
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, [classes.paper, classes.popover]);

  const LightTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#fab95f",
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 20,
      fontFamily: "Font of Tolkien",
      fontWeight: "bold"
    }
  }))(Tooltip);

  useEffect(() => {
    api
      .get("/maoDireita/" + 1)
      .then(res => {
        setMaoDireita(
          res.data.map(data => (
            <MenuItem key={data.id} value={data.id} className="EstiloSelect">
              <LightTooltip
                title={
                  data.descSomaAtri1 +
                  " + " +
                  data.valSomaAtri1 +
                  " | " +
                  data.descSomaAtri2 +
                  " + " +
                  data.valSomaAtri2 +
                  " | " +
                  data.descSubAtri1 +
                  " - " +
                  data.valSubAtri1 +
                  " | " +
                  data.descSubAtri2 +
                  " - " +
                  data.valSubAtri2
                }
                placement="right"
              >
                <MenuItem
                  key={data.id}
                  value={data.id}
                  className="EstiloSelect"
                >
                  {data.nomeEquipamento}
                </MenuItem>
              </LightTooltip>
            </MenuItem>
          ))
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get("/maoEsquerda/" + 1)
      .then(res => {
        setMaoEsquerda(
          res.data.map(data => (
            <MenuItem key={data.id} value={data.id} className="EstiloSelect">
              <LightTooltip
                title={
                  data.descSomaAtri1 +
                  " + " +
                  data.valSomaAtri1 +
                  " | " +
                  data.descSomaAtri2 +
                  " + " +
                  data.valSomaAtri2 +
                  " | " +
                  data.descSubAtri1 +
                  " - " +
                  data.valSubAtri1 +
                  " | " +
                  data.descSubAtri2 +
                  " - " +
                  data.valSubAtri2
                }
                placement="right"
              >
                <MenuItem
                  key={data.id}
                  value={data.id}
                  className="EstiloSelect"
                >
                  {data.nomeEquipamento}
                </MenuItem>
              </LightTooltip>
            </MenuItem>
          ))
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .get("/bota/" + 1)
      .then(res => {
        setBota(
          res.data.map(data => (
            <MenuItem key={data.id} value={data.id} className="EstiloSelect">
              <LightTooltip
                title={
                  data.descSomaAtri1 +
                  " + " +
                  data.valSomaAtri1 +
                  " | " +
                  data.descSomaAtri2 +
                  " + " +
                  data.valSomaAtri2 +
                  " | " +
                  data.descSubAtri1 +
                  " - " +
                  data.valSubAtri1 +
                  " | " +
                  data.descSubAtri2 +
                  " - " +
                  data.valSubAtri2
                }
                placement="right"
              >
                <MenuItem
                  key={data.id}
                  value={data.id}
                  className="EstiloSelect"
                >
                  {data.nomeEquipamento}
                </MenuItem>
              </LightTooltip>
            </MenuItem>
          ))
        );
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-ficha">
      <input id="idHelmo" className="idHelmo" value={valorHelmo} />
      <input id="idArmadura" className="idArmadura" value={valorArmadura} />
      <input
        id="idMaoDireita"
        className="idMaoDireita"
        value={valorMaoDireita}
      />
      <input
        id="idMaoEsquerda"
        className="idMaoEsquerda"
        value={valorMaoEsquerda}
      />
      <input id="idBota" className="idBota" value={valorBotas} />
      <div className="lin1">
        <div>
          <TextField
            id="Nome"
            label="Nome"
            value={nome}
            InputProps={{ readOnly: true, className: "estiloLabel" }}
            InputLabelProps={{ className: "estiloLabel" }}
          />
        </div>
        <div>
          <TextField
            readonly
            id="Raca"
            label="Raça"
            value={raca}
            InputProps={{ readOnly: true, className: "classRaca" }}
            InputLabelProps={{ className: "estiloLabel" }}
          />
        </div>
        <div>
          <TextField
            id="Classe"
            label="Classe"
            value={classe}
            InputProps={{ readOnly: true, className: "classRaca" }}
            InputLabelProps={{ className: "estiloLabel" }}
          />
        </div>
        <div>
          <TextField
            id="standard-disabled"
            label="Arrombscoin"
            value={arrombscoin + " Moedas"}
            InputProps={{ readOnly: true, className: "classRaca" }}
            InputLabelProps={{ className: "estiloLabel" }}
          />
        </div>
        <div className="BarraExperiencia">
          <BarraDeExperiencia/>
        </div>
        <div className="overkill">
        <TextField
            id="standard-disabled"
            label="OK"
            value="0"
            InputProps={{ readOnly: true, className: "classRaca" }}
            InputLabelProps={{ className: "estiloLabel" }}
          />
          <TextField
            id="standard-disabled"
            label="NV OK"
            value="0"
            InputProps={{ readOnly: true, className: "classRaca" }}
            InputLabelProps={{ className: "estiloLabel" }}
          />
        </div>
      </div>
      <div className="container-ficha2">
        <div>
          <div className="helth">
            <BarraDeVida />
          </div>
        </div>
        <div>
          <div className="manna">
            <BarraDeMana />
          </div>
        </div>
        <div>
          <TextField
            id="Ataque"
            label="Ataque"
            value={ataque}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{
              className: "estiloLabelAtributos"
            }}
          />
        </div>
        <div>
          <TextField
            id="Defesa"
            label="Defesa"
            value={defesa}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{
              className: "estiloLabelAtributos"
            }}
          />
        </div>
        <div>
          <TextField
            id="Inteligencia"
            label="Inteligencia"
            value={inteligencia}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{
              className: "estiloLabelAtributos"
            }}
          />
        </div>
        <div>
          <TextField
            id="Resistencia"
            label="Resistencia"
            value={resistencia}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{
              className: "estiloLabelAtributos"
            }}
          />
        </div>
        <div>
          <TextField
            id="Previsao"
            label="Previsao"
            value={previsao}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{
              className: "estiloLabelAtributos"
            }}
          />
        </div>
        <div>
          <TextField
            id="Velocidade"
            label="Velocidade"
            value={velocidade}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{
              className: "estiloLabelAtributos"
            }}
          />
        </div>
      </div>
      <div className="equipamentos-grimorio-inventario">
        <div className="equipamentos">
          <div className="equipamentoCol1">
            <div className="maoDireita">
              <FormControl variant="outlined" className="maoDir">
                <InputLabel className="estiloLabel">Mao Direita</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Mao Direita"
                  onChange={handleChangeMaoDireita}
                  className="EstiloSelect"
                >
                  {maoDireita}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="equipamentoCol2">
            <h3 className="h3Equipamentos">Equipamentos</h3>
            <div className="helmo">
              <FormControl variant="outlined" className="helm">
                <InputLabel className="estiloLabel">Helmo</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Helmo"
                  displayEmpty
                  onChange={handleChangeHelmo}
                  className="EstiloSelect"
                  InputLabelProps={{ textAlign: "center" }}
                >
                  {helmo}
                </Select>
              </FormControl>
            </div>
            <div className="armadura">
              <FormControl variant="outlined" className="arm">
                <InputLabel className="estiloLabel">Armadura</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Armadura"
                  onChange={handleChangeArmadura}
                  className="EstiloSelect"
                >
                  {armadura}
                </Select>
              </FormControl>
            </div>
            <div className="botas">
              <FormControl variant="outlined" className="bot">
                <InputLabel className="estiloLabel">Botas</InputLabel>
                <Select
                  id="Botas"
                  label="Botas"
                  onChange={handleChangeBota}
                  className="EstiloSelect"
                >
                  {bota}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="equipamentoCol3">
            <div className="maoEsquerda">
              <FormControl variant="outlined" className="maoEsq">
                <InputLabel className="estiloLabel">Mao Esquerda</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Mao Esquerda"
                  onChange={handleChangeMaoEsquerda}
                  className="EstiloSelect"
                >
                  {maoEsquerda}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="pocoes">
          <div className="linhaHp">
          <Badge badgeContent={qtdPocaoHp25} color="primary">
            <div className="hp25" onClick={hp25} />
          </Badge>
            <div className="espacamentoPocoes" />
            
            <Badge badgeContent={qtdPocaoHp50} color="primary">
            <div className="hp50" onClick={hp50} />
            </Badge>
            <div className="espacamentoPocoes" />
            <Badge badgeContent={qtdPocaoHp100} color="primary">
            <div className="hp100" onClick={hp100} />
            </Badge>
          </div>
          <div className="linhaMp">
          <Badge badgeContent={qtdPocaoMp25} color="primary">
            <div className="mp25" onClick={mp25} />
            </Badge>
            <div className="espacamentoPocoes" />
            <Badge badgeContent={qtdPocaoMp50} color="primary">
            <div className="mp50" onClick={mp50} />
            </Badge>
            <div className="espacamentoPocoes" />
            <Badge badgeContent={qtdPocaoMp100} color="primary">
            <div className="mp100" onClick={mp100} />
            </Badge>
          </div>
        </div>
        <div>
          <div className="grimorio-inventario">
            <h3 className="h3Grimorio">Grimorio</h3>
            <div className="grimorio">
              <div />
              <FormControl variant="outlined" className="grim">
                <InputLabel className="estiloLabelAtributos">
                  Grimório
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Grimório"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <div />
            </div>
            <h3 className="h3Inventario">Inventario</h3>
            <div className="inventario">
              <div />
              <FormControl variant="outlined" className="inv">
                <InputLabel className="estiloLabelAtributos">
                  Inventario
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Inventario"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <div />
            </div>
          </div>
        </div>
      </div>
      <h3 className="h3Status">Status Total</h3>
      <div className="linhaBotoes">
        <div>
          <TextField
            id="statusTotalAtaque"
            label="Ataque"
            value={valorStatusTotalAta}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{ className: "estiloLabelAtributos" }}
          />
        </div>
        <div>
          <TextField
            id="statusTotalDefesa"
            label="Defesa"
            value={valorStatusTotalDef}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{ className: "estiloLabelAtributos" }}
          />
        </div>
        <div>
          <TextField
            id="statusTotalInteligencia"
            label="Inteligencia"
            value={valorStatusTotalInt}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{ className: "estiloLabelAtributos" }}
          />
        </div>
        <div>
          <TextField
            id="statusTotalResistencia"
            label="Resistencia"
            value={valorStatusTotalRes}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{ className: "estiloLabelAtributos" }}
          />
        </div>
        <div>
          <TextField
            id="statusTotalPrevisao"
            label="Previsao"
            value={valorStatusTotalPre}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{ className: "estiloLabelAtributos" }}
          />
        </div>
        <div>
          <TextField
            id="statusTotalVelocidade"
            label="Velocidade"
            value={valorStatusTotalVel}
            variant="outlined"
            InputProps={{ readOnly: true, className: "estiloLabelAtributos" }}
            InputLabelProps={{ className: "estiloLabelAtributos" }}
          />
        </div>
        <Dados />
        <div>
          <Button variant="contained" color="primary" className="botaoBuid">
            Salvar Build
          </Button>
        </div>
      </div>
    </div>
  );
}
