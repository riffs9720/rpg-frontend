import styled from 'styled-components'

import img from '../../assets/Images/BackGrounds/youShallNotPass.jpg'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-Position: 'center';
  background-size: cover;
  font-family: "Font of Tolkien";
  font-weight: bold;

  h1 {
    color: #FFFFFF;
    padding-top: 40vh;
  }
`