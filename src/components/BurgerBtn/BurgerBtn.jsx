import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = ({ handler, active }) => {
   const burgerClass = active
      ? `${styles.burger} ${styles.burger_active}`
      : styles.burger;
   return (
      <div
         className={burgerClass}
         role="button"
         onClick={handler}
         onKeyDown={handler}
         tabIndex={0}
      >
         <span />
      </div>
   );
};

BurgerBtn.propTypes = {
   active: PropTypes.bool,
   handler: PropTypes.func.isRequired,
};

BurgerBtn.defaultProps = {
   active: false,
};

export { BurgerBtn };
