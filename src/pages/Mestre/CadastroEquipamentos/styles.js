import styled from 'styled-components'

import img from '../../../assets/Images/BackGrounds/backgroundForja.jpg'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-Position: 'center';
  background-size: cover;
  font-family: "Font of Tolkien";
  font-weight: bold;

  .Forja {
  text-align: center;
  color: #fab95f;
}

.divisorForja {
  margin-top: 8vh;
  display: grid;
  grid-template-columns: auto auto auto;
  color: #fab95f;
}

.estiloLabelForja {
  font-family: "Font of Tolkien" !important;
  font-size: 20px !important;
  color: #fab95f !important;
  font-weight: bold !important;
}

.estiloInputForja {
  font-family: "Font of Tolkien" !important;
  font-size: 30px !important;
  color: #fab95f !important;
  font-weight: bold !important;
  width: 55vh !important;
}

.estiloItemForja {
  font-family: "Font of Tolkien" !important;
  font-size: 20px !important;
  color: #000000 !important;
  font-weight: bold !important;
  width: 55vh !important;
}

.espacadorForja {
  margin-top: 10vh;
  margin-left: 5vh;
}

.divisorAtributos {
  display: grid;
  grid-template-columns: auto auto;
}

.estiloInputForjaAtributos {
  font-family: "Font of Tolkien" !important;
  font-size: 30px !important;
  color: #fab95f !important;
  font-weight: bold !important;
  width: 30vh !important;
}

.estiloInputForjaValorItem {
  font-family: "Font of Tolkien" !important;
  font-size: 30px !important;
  color: #FFFFFF !important;
  font-weight: bold !important;
  width: 30vh !important;
}

.estiloItemForjaAtributo {
  font-family: "Font of Tolkien" !important;
  font-size: 20px !important;
  color: #000000 !important;
  font-weight: bold !important;
  width: 30vh !important;
}

.linhaBortaoForja {
  display: grid;
  grid-template-columns: auto auto auto;
}

.infoEquipamento, .atributosSoma, .subtrairAtributos {
  margin-left: 2vh;
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
`