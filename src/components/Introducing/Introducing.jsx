import React from "react";
import logo from "./logo.svg";
import background from "./background.png";
import Title from "../Title/Title";
import styles from  "./Introducing.module.scss";

const Introducing = () => {
  return (
    <div
      className={styles.introducing__container}
      style={{ backgroundImage: `url( ${background} )` }}
    >
      <img src={logo} alt="logo" className={styles.introducing__logo}/>
      <Title className={styles.introducing__title}>
        Introducing: the next generation of online payments.
      </Title>
    </div>
  );
};

export {Introducing};
