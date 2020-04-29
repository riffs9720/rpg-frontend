import React, {useState, useEffect} from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { api } from '../../config/api'

import 'bootstrap/dist/css/bootstrap.min.css';


export default function BarraDeMana() {

  const [mpAtual, setMpAtual] = useState(0)
  const [mpTotal, setMpTotal] = useState(0)

  useEffect(() => {
    api.get('/player/1').then((res) => {
    console.log(res)
    setMpAtual(res.data.manaAtual)
    setMpTotal(res.data.manaTotal)
  }).catch(error => {
    console.log(error)
  })
  },[])

let porcMP = (mpAtual / mpTotal) * 100

let corBarra = ""

if (porcMP < 50 || porcMP >= 30) {
  corBarra = "warning"
}
if (porcMP >= 50) {
  corBarra = "info"
}
if (porcMP <= 10) {
  corBarra = "danger"
}

return(
  <>
    <label htmlFor="">Mana</label>
    <ProgressBar animated striped variant={corBarra} now={porcMP} className="Barra"
      label={``} />
    <p>{mpAtual} / {mpTotal}</p>
  </>
)

}