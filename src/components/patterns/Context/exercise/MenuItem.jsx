import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({ children, toggleMenu, link }) => (
  <p>
    <Link to={link} onClick={ () => toggleMenu() }>
      { children }
    </Link>
  </p>
)

export default MenuItem
