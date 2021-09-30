import React from "react";
import logo from "./logo.svg";
import background from "./background.png";
import Title from "../Title/Title";
import "./introducing.scss";

const Introducing = () => {
  return (
    <div
      className="introducing__container"
      style={{ backgroundImage: `url( ${background} )` }}
    >
      <img src={logo} alt="logo" className="introducing__logo" />
      <Title block="introducing">
        Introducing: the next generation of online payments.
      </Title>
    </div>
  );
};

export default Introducing;
