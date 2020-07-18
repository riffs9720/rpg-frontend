import styled from 'styled-components'

import imgBackGround from "../../../assets/Images/BackGrounds/backgroundFichaPlayer.jpg"
import imgHP25 from "../../../assets/Images/poções/hp25.png"
import imgHP50 from "../../../assets/Images/poções/hp50.png"
import imgHP100 from "../../../assets/Images/poções/hp100.png"
import imgMP25 from "../../../assets/Images/poções/mp25.png"
import imgMP50 from "../../../assets/Images/poções/mp50.png"
import imgMP100 from "../../../assets/Images/poções/mp100.png"

export const Container = styled.div`
  background-image: url(${imgBackGround});
  background-repeat: no-repeat;
  background-size:100%;
  bottom: 0;
  color: black;
  left: 0;
  overflow: auto;
  position: absolute;
  right: 0;
  top: 0;
  background-size: cover;
  font-family: 'Font of Tolkien';

  .idHelmo, .idArmadura, .idMaoDireita, .idMaoEsquerda, .idBota{
    display: none;
  }

  .StyleLabelAtributs {
    font-family: "Font of Tolkien" !important;
    font-size: 20px !important;
    color: #000000 !important;
    font-weight: bold !important;
    margin-bottom: 35px !important;
    width: 100px !important;
  }

  .buttonBuid {
    font-family: "Font of Tolkien" !important;
    color: #000000 !important;
    font-weight: bold !important;
    width: 80% !important;
    font-size: 20px !important;
    border-radius: 20px !important;
    background-color: #fab95f !important;
  }

`;

export const SpecsLin1 = styled.div`
  display: grid;
  grid-template-columns: 1.2fr .9fr .9fr 1fr 1fr .9fr;
  padding-top: 5px;
  padding-left: 30px;

  .SpecsInputProps {
    width: 80%;
    font-family: "Font of Tolkien" !important;
    font-size: 20px !important;
    color: #000000 !important;
    font-weight: bold !important;
    margin-bottom: 35px !important;
  }

  .SpecsInputPropsName {
    width: 100%;
    font-family: "Font of Tolkien" !important;
    font-size: 20px !important;
    color: #000000 !important;
    font-weight: bold !important;
    margin-bottom: 35px !important;
  }

  .SpecLabelProps {
    font-family: "Font of Tolkien" !important;
    font-size: 20px !important;
    color: #000000 !important;
    font-weight: bold !important;
    margin-bottom: 35px !important;
  }

  .StyleSelect {
    font-family: "Font of Tolkien" !important;
    font-size: 20px !important;
    color: #000000 !important;
    font-weight: bold !important;
  }

  p {
    font-family: "Font of Tolkien" !important;
    color: #000000 !important;
    font-weight: bold !important;
  }

  label {
    font-family: "Font of Tolkien" !important;
    color: #000000 !important;
    font-weight: bold !important;
  }
`;

export const SpecsLin2 = styled.div`
  display: grid;
  grid-template-columns: .5fr .5fr .2fr .2fr .2fr .2fr .2fr .2fr;
  padding-right: 10px;
  padding-left: 20px;
`;

export const Health  = styled.div`
  width: 90%;
  text-align: center;

  p {
    font-family: "Font of Tolkien" !important;
    color: #000000 !important;
    font-weight: bold !important;
  }

  label {
    font-family: "Font of Tolkien" !important;
    color: #000000 !important;
    font-weight: bold !important;
  }
`;

export const Mana  = styled.div`
  width: 90%;
  text-align: center;
  p {
    font-family: "Font of Tolkien" !important;
    color: #000000 !important;
    font-weight: bold !important;
  }

  label {
    font-family: "Font of Tolkien" !important;
    color: #000000 !important;
    font-weight: bold !important;
  }
`;

export const Xp = styled.div`
  text-align: center;
  width: 90%;
`

export const Overkill = styled.div`
  display: grid;
  grid-template-columns: auto auto;
` 

export const TitleStatus = styled.h3`
  margin-left: 50vh;
  font-weight: bold;
  margin-top: 2vh;
` ;

export const Status = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
`;

export const EquipmentGrimoreInventory = styled.div`
  display: grid;
  grid-template-columns: 40% 20% 40%;

  .Equipments {
    display: grid;
    grid-template-columns: 33% 33% 33%;

    h3 {
      text-align: center;
      font-weight: bold;
    }
  }

  .Grimore {

    .InputGrimore {
      width: 55%;
      margin-left: 170px;
    }

    h3 {
      margin-left: 42vh;
      font-weight: bold;
    }
  }

  .Inventory {

    .InputInventory{
      width: 55%;
      margin-left: 170px;
    }
    
    h3 {
      margin-top: 5vh;
      margin-left: 42vh;
      font-weight: bold;
    }
  }

  .EquipLabelProps {
    font-family: "Font of Tolkien" !important;
    font-size: 20px !important;
    color: #000000 !important;
    font-weight: bold !important;
    margin-bottom: 35px !important;
  }

  .Inputs {
    width: 100%;
  }

  .rightHand, .leftHand {
    margin-top: 27.5vh;
  }

  .armor {
      margin-top: 10px;
    }

  .bots {
    margin-top: 11.3vh;
  }

  .potions {
    margin-left: 18vh;
  }

  .lineHP {
    display: grid;
    grid-template-columns: auto auto auto auto auto; 
  }

  .lineMP {
    margin-top: 5vh;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
  }

  .hp25 {
    background-image: url(${imgHP25});
    background-repeat: no-repeat;
    background-Position: 'center';
    background-size: cover;
    cursor:pointer;
    height: 72px;
    width: 50px;
  }

  .hp50 {
    background-image: url(${imgHP50});
    background-repeat: no-repeat;
    background-Position: 'center';
    background-size: cover;
    cursor:pointer;
    height: 72px;
    width: 50px;
  }

  .hp100     {
    background-image: url(${imgHP100});
    background-repeat: no-repeat;
    background-Position: 'center';
    background-size: cover;
    cursor:pointer;
    height: 72px;
    width: 50px;
  }

  .mp25 {
    background-image: url(${imgMP25});
    background-repeat: no-repeat;
    background-Position: 'center';
    background-size: cover;
    cursor:pointer;
    height: 72px;
    width: 50px;

  }

  .mp50 {
    background-image: url(${imgMP50});
    background-repeat: no-repeat;
    background-Position: 'center';
    background-size: cover;
    cursor:pointer;
    height: 72px;
    width: 50px;
  }

  .mp100 {
    background-image: url(${imgMP100});
    background-repeat: no-repeat;
    background-Position: 'center';
    background-size: cover;
    cursor:pointer;
    height: 72px;
    width: 50px;
  }
  .StyleSelect {
    font-family: "Font of Tolkien" !important;
    font-size: 20px !important;
    color: #000000 !important;
    font-weight: bold !important;
  }
`;