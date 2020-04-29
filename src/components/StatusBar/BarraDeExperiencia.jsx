import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { api } from '../../config/api'

import 'bootstrap/dist/css/bootstrap.min.css';


export default function BarraDeVida() {
  
  const [xpTotal, setXpTotal] = useState(1000)
  const [xpAtual, setXpAtual] = useState(1000)

  let porcXp = (xpAtual / xpTotal) * 100

  useEffect(() => {
    api.get('/player/1').then((res) => {
    console.log(res)
    setXpAtual(res.data.experienciaAtual)
    setXpTotal(res.data.experienciaProximoNivel)
  }).catch(error => {
    console.log(error)
  })
  },[])

  return (
    <>
    <label htmlFor="">Experiencia</label>
    <ProgressBar striped variant="warning" now={porcXp} className="Barra"
      label={``} />
    <p>{xpAtual} / {xpTotal}</p>
    </>
  );
}

