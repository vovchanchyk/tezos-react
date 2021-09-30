import React from "react";
import logo from "./../logo/Dark.svg";
import "./container.scss";

const Container = ({ block, img, ...props }) => {
  return (
    <div className="container">
      <div className={`${block}__left container__left`}>
        <img
          src={img}
          alt={`${block} img`}
          className={`${block}__img container__img`}
        />
      </div>
      <div className={`${block}__right container__right`}>
        <img src={logo} alt="logo" className="container__logo" />
        {props.children}
      </div>
    </div>
  );
};

export default Container;
