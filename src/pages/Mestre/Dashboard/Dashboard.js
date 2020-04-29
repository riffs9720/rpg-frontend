import React from 'react';

import "./Dashboard.css";

import Card1 from '../../../components/Cards/Cartao1'
import Card2 from '../../../components/Cards/Cartao2'
import Card3 from '../../../components/Cards/Cartao3'
import Card4 from '../../../components/Cards/Cartao4'
import Card5 from '../../../components/Cards/Cartao5'
import Card6 from '../../../components/Cards/Cartao6'
import BarraNavegacaoMestre from '../../../components/BarraNavegacao/BarraNavegacaoMestre'

export default function Dashboard() {
    return (
      <>
      <BarraNavegacaoMestre />
        <div className="container-dashboard">
          <div className="coluna1">
            <Card1 />
            <div className="espacamentoCards"/>
            <Card4 />
          </div>
          <div className="coluna2">
            <Card2 />
            <div className="espacamentoCards"/>
            <Card5 />
          </div>
          <div className="coluna3">
            <Card3 />
            <div className="espacamentoCards"/>
            <Card6 />
          </div>
        </div>
      </>
    )
}
