import styled from 'styled-components'

import img from '../../../assets/Images/BackGrounds/backgroundAlchemyLab.jpg'

export const Container = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size:100%;
  bottom: 0;
  left: 0;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 0;
  background-size: cover;
  font-family: "Font of Tolkien";
  font-weight: bold;

  .fontesAlquimista {
  color: #fab95f;
  text-align: center;
}

.Magia-Item {
  display: grid;
  grid-template-columns: 50% 50%;
}

.linha1Magia {
  display: grid;
  grid-template-columns: auto auto;
  margin-left: 20px;
  margin-top: 30px;
}

.estiloLabelMagia {
  font-family: "Font of Tolkien" !important;
  font-size: 20px !important;
  color: #fab95f !important;
  font-weight: bold !important;
}

.estiloInputMagia {
  font-family: "Font of Tolkien" !important;
  font-size: 30px !important;
  color: #fab95f !important;
  font-weight: bold !important;
  width: 55vh !important;
}

.estiloInputItem {
  font-family: "Font of Tolkien" !important;
  font-size: 30px !important;
  color: #fab95f !important;
  font-weight: bold !important;
  width: 95vh !important;
}

.estiloInputAtributoMagia{
  font-family: "Font of Tolkien" !important;
  font-size: 30px !important;
  color: #fab95f !important;
  font-weight: bold !important;
  width: 30vh !important;
}

.linha1Item {
  margin-left: 20px;
  margin-top: 30px;
}

.linha2Magia {
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
}

.linha3Magia {
  display: grid;
  grid-template-columns: auto auto auto;
}

.linha2Item {
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
}

.linha3Item {
  display: grid;
  grid-template-columns: auto auto auto;
}
`