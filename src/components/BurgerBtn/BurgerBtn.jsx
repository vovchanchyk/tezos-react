import React from "react";
import styles from './BurgerBtn.module.scss';
import PropTypes from "prop-types";

const BurgerBtn = ({handler, active}) => {

  const burgerClass = active ? `${styles.burger} ${styles.burger_active}` : styles.burger;
  return (
    <div className={burgerClass} onClick={handler}>
      <span></span>
    </div>
  );
};

BurgerBtn.propTypes = {
  active : PropTypes.bool,
  handler : PropTypes.func
}

BurgerBtn.defaultProps = {
  active : false,
  handler : ()=>{}
}

 export { BurgerBtn };
