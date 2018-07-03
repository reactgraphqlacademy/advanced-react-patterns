import React from 'react'
import SideMenu from 'react-burger-menu'

import withWidth, { LARGE } from '../../HigherOrderComponents/exercise/withWidth'
import FloatingMenuBtn from '../../../FloatingMenuBtn'
import AppContext from '../../../App'

export const MenuContext = React.createContext()

const Menu = ({ isOpen, children, pageWrapId, width, toggleMenu }) => (
  <div>
    { width === LARGE ? '' : <FloatingMenuBtn toggleMenu={ toggleMenu } /> }
    <SideMenu.slide
       isOpen={ isOpen }
       pageWrapId={ pageWrapId || 'page-wrap' }
    >
      <MenuContext.Provider value={{ toggleMenu }}>
        { children }
      </MenuContext.Provider>
    </SideMenu.slide>
  </div>
)

export default withWidth(Menu)
