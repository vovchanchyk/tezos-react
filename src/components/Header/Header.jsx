import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Nav } from "../Nav";
import { BurgerBtn } from "../BurgerBtn";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handler = () => setShowMenu(!showMenu);

  return (
    <header className={styles.header}>
      {showMenu ? <Nav /> : null}
      <BurgerBtn handler={handler} active={showMenu} />
    </header>
  );
};

export { Header };
//
