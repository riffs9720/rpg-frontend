import styled from 'styled-components'

import img  from '../../../assets/Images/BackGrounds/backgroundFichaPlayer.jpg'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-Position: 'center';
  background-size: cover;
  font-family: "Font of Tolkien";
  font-weight: bold;
  display: grid;
  grid-template-columns:  auto auto auto;
  grid-template-rows: auto auto auto auto;

  .espacamentoCards {
    margin-top: 20px;
  }
`