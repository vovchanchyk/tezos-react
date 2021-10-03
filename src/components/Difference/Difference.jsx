import React from "react";
import styles from "./Difference.module.scss";
import DifferenceItem from "./__item/DifferenceItem";
import data from "./data";
import {Icon} from "../Icon";
import Title from "../Title/Title";
import background from "./background.png";
import PropTypes from "prop-types";

const Difference = ({ theme }) => {
  const color = theme === "light" ? "#2299EF" : "#62E3FF";
  const style = {
    backgroundImage: theme === "bg" ? `url(${background})` : "inherit",
  };

  const difference_theme = styles[`difference--${theme}`]

  return (
    <div className={`${styles.difference} ${difference_theme}`} style={style}>
      <div className={styles.difference__container}>
        <Title className={styles.difference__title}>What makes us different?</Title>
        <div className={styles.difference__items}>
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

Difference.propTypes = {
  theme : PropTypes.string
}

Difference.defaultProps = {
  theme : 'light'
}

export {Difference};
