import React from "react";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const Title = ({ className, children }) => {
  return <h2 className={`${className}  ${styles.title}`}>{children}</h2>;
};

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
Title.defaultProps = {
  className: "",
  children: "",
};

export { Title };
