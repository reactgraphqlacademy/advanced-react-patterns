import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 3px;
  border: none;

  background-color: ${({variant, theme}) => theme.colors[variant] || "white"};
  color: white;
`

const Button = ({onClick, children, ...rest}) => (
  <StyledButton onClick={onClick} {...rest}>{children}</StyledButton>
)

export default Button;
