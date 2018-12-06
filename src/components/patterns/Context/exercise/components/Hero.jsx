import React from 'react'
import styled from 'styled-components'

const Wrapper = styled("div")`
  padding: 100px 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
/*
  after implementing the ThemeProvider, you should be able to add this next line to the `Wrapper` with no errors:

  background-color: ${({theme}) => theme.background};

*/

const Heading = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 24px;
`
/*
  after implementing the ThemeProvider, you should be able to add this next line to the `Heading` with no errors:

  color: ${({theme}) => theme.foreground};

*/

const Hero = ({children}) => (
  <Wrapper>
    <Heading>hero component</Heading>
    {children}
  </Wrapper>
)

export default Hero;
