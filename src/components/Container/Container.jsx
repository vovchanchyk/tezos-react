import React from "react";
import logo from "./../../images/logo/Dark.svg";
import styles from "./Container.module.scss";
import PropTypes from "prop-types";

const Container = ({ className, img, ...props }) => {
  console.log(className, 'here ')

  return (
    <div className={styles.container}>
      <div className={`${className.left} ${styles.container__left}`}>
        <img
          src={img}
          alt={` img`}
          className={`${className.img} ${styles.container__img}`}
        />
      </div>
      <div className={`${className.right} ${styles.container__right}`}>
        <img src={logo} alt="logo" className={`${styles.container__logo}`} />
        {props.children}
      </div>
    </div>
  );
};


Container.propTypes = {
  className: PropTypes.shape({
    left:PropTypes.string,
    right:PropTypes.string,
    img: PropTypes.string
  }),
  img: PropTypes.any,
  children: PropTypes.node

}

Container.defaultProps = {
  className: {
    left: "",
    right: "",
    img: ""
  },
  img: '',
  children: null
}


export { Container };
