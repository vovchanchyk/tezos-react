import React from "react";
import "./burgerBtn.scss";

const BurgerBtn = (props) => {
  const burgerClass = props.active ? "burger burger--active" : "burger";
  return (
    <div className={burgerClass} onClick={props.handler}>
      <span></span>
    </div>
  );
};

export default BurgerBtn;
