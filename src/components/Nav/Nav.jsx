import React from "react";
import { NavLink } from "../NavLink";
import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavLink name="Home" path="/home" />
      <NavLink name="Company" path="/company" />
      <NavLink name="Primary" path="/primary" />
      <NavLink name="Target" path="/target" />
      <NavLink name="Team" path="/team" />
      <NavLink name="Mission" path="/mission" />
      <NavLink name="Competition" path="/competition" />
      <NavLink name="Strategy" path="/strategy" />
      <NavLink name="Introducing" path="/introducing" />
      <NavLink name="Difference-primary" path="/difference-primary" />
      <NavLink name="Difference-bg" path="/difference-bg" />
      <NavLink name="Difference-light" path="/difference-light" />
    </nav>
  );
};

export { Nav };
