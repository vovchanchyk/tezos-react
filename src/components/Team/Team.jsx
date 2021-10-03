import React from "react";
import "./team.scss";
//compnts
import {Description} from "./../Description";
import Title from "./../Title/Title";

//imgs
import Teammate from "../Teammate/Teammate";
import data from "./__data";

const Team = () => {
  return (
    <div className="team__container">
      <img src={data.logo} alt="logo" className="team__logo" />
      <div className="team__body">
        <div className="team__left">
          <Title block={data.block}>{data.title}</Title>
          <Description block={data.block}>{data.description}</Description>
        </div>
        <div className="team__right">
          <div className="team__items">
            {data.team.map((el) => (
              <Teammate key={el.img} {...el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
