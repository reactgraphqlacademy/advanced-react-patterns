import React from 'react'
import styled from 'styled-components'

// TODO: add the theme background color to the Wrapper as `background-color`
const Wrapper = styled("div")`
  padding: 100px 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

// TODO: add the primary color as the heading `color`
const Heading = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`

const Hero = ({children}) => (
  <Wrapper>
    <Heading>hero component</Heading>
    {children}
  </Wrapper>
)

export default Hero;
