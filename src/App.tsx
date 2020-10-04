import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: blue;
`

function sumAll(a: number, b: number) {
  return a + b
}

function App() {
  return <Header>{sumAll(10, 5)}</Header>
}

export default App
