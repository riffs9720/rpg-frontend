import styled from 'styled-components'

import img from '../../../assets/Images/BackGrounds/backgroundCadastro.png'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-Position: 'center';
  background-size: cover;
  font-family: "Font of Tolkien";
  font-weight: bold;

    h1 {
    padding-top: 50px;
    text-align: center;
    font-size: 70px;
  }

  .separador {
    display: grid;
    grid-template-columns: .8fr .8fr .7fr;
  }

  .infoPersonagem {
    padding-left: 100px;
    display: inline-block;
    width: 80%;
  }

  .estiloLabelContrato {
    font-family: "Font of Tolkien" !important;
    font-size: 20px !important;
    color: #000000 !important;
    font-weight: bold !important;
  }

  h4 {
    font-weight: bold;
    margin-bottom: 40px;
  }

  .Raca {
    margin-top: 30px;
    width: 100%;
  }

  .Classe {
    margin-top: 20px;
    width: 100%;
  }

  .atributos {
    display: grid;
    grid-template-columns: 20% 20% 20%;
    margin-top: 40px;
  }

  .espaco {
    margin-top: 40px;
  }

  .outrosAtributos {
    display: grid;
    grid-template-columns: auto auto auto;
    margin-top: 40px;
  }

  .botaoCadastrarPlayer {
    font-family: "Font of Tolkien" !important;
    color: #000000 !important;
    font-weight: bold !important;
    border-radius: 20px !important;
    background-color: #fab95f !important;
    width: 100% !important;
    margin-top: 70px !important;
  }

  .botao {
    display: grid;
    grid-template-columns: 20% 60% 20%;
  }

  .histroria {
    resize: none;
    width: 90%;
    
  }

  .inputContrato {
    width: 80%;
  }

  .historiaPersonagem {
    margin-top: 20px;
  }

  .nome {
    margin-top: 40px;
  }

  .senha {
    width: 300px;
  }
`