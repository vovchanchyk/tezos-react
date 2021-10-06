import React from "react";
import PropTypes from "prop-types";
import styles from "../Difference.module.scss";

const DifferenceItem = ({ title, body, ...props }) => {
  return (
    <div className={styles.difference__item}>
      {props.children}
      <h3 className={styles.difference__subtitle}>{title}</h3>
      <p className={styles.difference__paragraph}>{body}</p>
    </div>
  );
};

DifferenceItem.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node,
};

DifferenceItem.defaultProps = {
  title: "Title",
  body: "there should be a body here",
  children: null,
};

export default DifferenceItem;
