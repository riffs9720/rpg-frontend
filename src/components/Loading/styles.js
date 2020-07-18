import styled from 'styled-components'
import gif from '../../assets/Images/gif/Loading.gif';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding-right: 20px;
  background-image: url(${gif});
  background-repeat: no-repeat;
  background-size: cover;
`;