import styled  from 'styled-components'

import img from '../../assets/Images/BackGrounds/backgroundLogin.jpg';

import { TextField as StyledTextField, Button as StyledButton } from '@material-ui/core'

export const BackGround = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-Position: 'center';
  background-size: cover;
  font-family: 'Font of Tolkien';
`; 

export const Tittle = styled.h1`
  color: #FFFFFF;
  font-family: "Font of Tolkien";
  font-size: 60px;
  text-align: center;
  padding-top: 15px;
`;

export const Container = styled.div`
  color: #FFFFFF;
  display: grid;
  grid-template-columns: 3fr 2fr;
  margin-top: 25vh;

  Form {
    padding-left: 16px;
    padding-top: 20px;
    padding-bottom: 5px;
    padding-right: 16px;
    display: grid;
    grid-row: auto;
    width: 95%;
    background-color: rgba(0, 0, 0, .7);

    div.lineButton {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
    }
  }
`;

export const Button = styled(StyledButton) `
  font-family: "Font of Tolkien" !important;
  color: #000000 !important;
  font-weight: bold !important;
  font-size: 15px !important;
  border-radius: 20px !important;
  background-color: #fab95f !important;
`

export const TextField = styled(StyledTextField) `
  .LabelPropsLogin, .InputPropsLogin{
    color: #FFFFFF !important;
    font-weight: bold !important;
    font-size: 20px !important;
    font-family: "Font of Tolkien" !important;
  }
`;