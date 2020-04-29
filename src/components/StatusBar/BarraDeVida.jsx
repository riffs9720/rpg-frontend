import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { api } from '../../config/api'

import 'bootstrap/dist/css/bootstrap.min.css';


export default function BarraDeVida() {
  
  const [hpAtual, setHpAtual] = useState(1000)
  const [hpTotal, setHpTotal] = useState(1000)

  useEffect(() => {
    api.get('/player/1').then((res) => {
    console.log(res)
    setHpAtual(res.data.vidaAtual)
    setHpTotal(res.data.vidaTotal)
  }).catch(error => {
    console.log(error)
  })
  },[])



  let porcHp = (hpAtual / hpTotal) * 100

  let corBarra = ""

  if (porcHp < 50 || porcHp >= 30) {
    corBarra = "warning"
  }
  if (porcHp >= 50) {
    corBarra = "success"
  }
  if (porcHp <= 10) {
    corBarra = "danger"
  }

  return (
    <>
    <label htmlFor="">Vida</label>
    <ProgressBar animated striped variant={corBarra} now={porcHp} className="Barra"
      label={``} />
    <p>{hpAtual} / {hpTotal}</p>
    </>
  );
}

