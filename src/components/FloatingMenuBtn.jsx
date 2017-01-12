import React from 'react'

const FloatingMenuBtn = ({ toggleMenu }) => (
  <a className="fa-stack fa-lg floating-menu-btn" onClick={ toggleMenu } >
    <i className="fa fa-circle fa-stack-2x"></i>
    <i className="fa fa-bars fa-stack-1x fa-inverse"></i>
  </a>
)

export default FloatingMenuBtn
