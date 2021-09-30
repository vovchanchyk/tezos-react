import React from "react";
import "./header.scss";
import Nav from "./../Nav/Nav";
import { useState } from "react";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handler = () => setShowMenu(!showMenu);

  return (
    <header className="header">
      {showMenu ? <Nav /> : null}
      <BurgerBtn handler={handler} active={showMenu} />
    </header>
  );
};

export default Header;
