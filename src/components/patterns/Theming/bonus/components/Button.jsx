import React from 'react'
import styled from 'styled-components'

// TODO: change the background-color of this button depending on the theme selected
const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;
  color: black;
  background: #dedede;
`

const Button = ({onClick, children, ...rest}) => (
  <StyledButton onClick={onClick} {...rest}>{children}</StyledButton>
)

export default Button;
