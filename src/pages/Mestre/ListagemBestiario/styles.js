import styled from 'styled-components'
import { Select as SelectStyled } from "@material-ui/core";

import img from '../../../assets/Images/BackGrounds/backgroundBestiario.jpg'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-Position: 'center';
  background-size: cover;
  font-family: "Font of Tolkien";
  font-weight: bold;
  padding-left: 100px;
  padding-top: 20px;

  h1 {
    text-align: center;
  }
`

export const Select = styled(SelectStyled)`
  width: 350px
`