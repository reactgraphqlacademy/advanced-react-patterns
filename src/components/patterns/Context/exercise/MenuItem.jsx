import React from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from './Menu'

const MenuItem = ({ children, link }) => (
  <p>
    <MenuContext.Consumer>
      { ({ toggleMenu} ) => (
        <Link to={link} onClick={ () => toggleMenu() }>
          { children }
        </Link>
      )}
    </MenuContext.Consumer>
  </p>
)

export default MenuItem
