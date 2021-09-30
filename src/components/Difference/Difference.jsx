import React from "react";
import "./difference.scss";
import DifferenceItem from "./__item/DifferenceItem";
import data from "./__data";
import Icon from "../Icon/Icon";
import Title from "../Title/Title";
import background from "./background.png";

const Difference = ({ theme }) => {
  const color = theme === "light" ? "#2299EF" : "#62E3FF";
  const style = {
    backgroundImage: theme === "bg" ? `url(${background})` : "inherit",
  };

  return (
    <div className={`difference difference--${theme}`} style={style}>
      <div className="difference__container">
        <Title block="difference">What makes us different?</Title>
        <div className="difference__items">
          {data.map((el, i) => {
            return (
              <DifferenceItem key={i} title={el.title} body={el.body}>
                <Icon Component={el.icon} color={color} />
              </DifferenceItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Difference;
