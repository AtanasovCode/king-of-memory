import React from 'react'
import ReactDOM from 'react-dom/client'
import styled from 'styled-components'

import Game from './components/Game'
import { GlobalStyle } from './GlobalStyles'


const Container = styled.div`
  background-color: #222;
  color: #fff;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <Container>
    <GlobalStyle />
    <Game />
  </Container>
);