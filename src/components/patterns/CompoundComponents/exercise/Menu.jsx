import React from "react";
import SideMenu from "react-burger-menu";

import FloatingMenuBtn from "../../../FloatingMenuBtn";
import useWidth, { LARGE } from "../../CustomHooks/exercise/useWidth";

const Menu = ({ isOpen, children, pageWrapId, toggleMenu }) => {
  const width = useWidth();
  return (
    <div>
      {width === LARGE ? "" : <FloatingMenuBtn toggleMenu={toggleMenu} />}
      <SideMenu.slide
        disableCloseOnEsc
        isOpen={isOpen}
        pageWrapId={pageWrapId || "page-wrap"}
      >
        {children}
      </SideMenu.slide>
    </div>
  );
};

export default Menu;
