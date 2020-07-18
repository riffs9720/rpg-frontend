import styled from 'styled-components'

import img from '../../../assets/Images/BackGrounds/backgroundBestiario.jpg'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-Position: 'center';
  background-size: cover;
  font-family: "Font of Tolkien";
  font-weight: bold;

  .textoBestiario {
  color: #fab95f;
}

.divisorBestiario {
  display: grid;
  grid-template-columns: auto auto auto;
}

.espacadorBestiario {
  margin-top: 5vh;
  margin-left: 5vh;
}

.estiloLabelBestiario {
  font-family: "Font of Tolkien" !important;
  font-size: 20px !important;
  color: #fab95f !important;
  font-weight: bold !important;
}

.estiloInputBestiario {
  font-family: "Font of Tolkien" !important;
  font-size: 30px !important;
  color: #fab95f !important;
  font-weight: bold !important;
  width: 55vh !important;
}

  .atributosBestiario {
    display: grid;
    grid-template-columns: 20% 20% 20%;
    margin-top: 40px;
  }

.atributosBestiarioDrop {
  display: grid;
  grid-template-columns: 30% 5% 30% 5% 30%;
  margin-top: 40px;
}

.estiloInputAtributoBestiario {
  font-family: "Font of Tolkien" !important;
  font-size: 30px !important;
  color: #fab95f !important;
  font-weight: bold !important;
  width: 20vh !important;
}

.botaoCadastrarEquipamento {
  font-family: "Font of Tolkien" !important;
  color: #000000 !important;
  font-weight: bold !important;
  border-radius: 20px !important;
  background-color: #fab95f !important;
  width: 100% !important;
  margin-top: 5vh !important;
}

.linhaBortaoForja {
  display: grid;
  grid-template-columns: auto auto auto;
}

.linhaDrop {
  display: grid;
  grid-template-columns: auto auto auto;
}
`