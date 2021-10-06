import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = ({ handler, active }) => {
  const burgerClass = active
    ? `${styles.burger} ${styles.burger_active}`
    : styles.burger;
  return (
    <div className={burgerClass} onClick={handler}>
      <span />
    </div>
  );
};

BurgerBtn.propTypes = {
  active: PropTypes.bool.isRequired,
  handler: PropTypes.func,
};

BurgerBtn.defaultProps = {
  active: false,
  handler: () => {},
};

export { BurgerBtn };
