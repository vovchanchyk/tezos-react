import React from "react";
import PropTypes from "prop-types";
import styles from "./Subsection.module.scss";
import styledTitle from "../Title/Title.module.scss";
import styledDescription from "../Description/Description.module.scss";

const Subsection = ({ title, body }) => {
  return (
    <div className={styles.subsection}>
      <h3 className={`${styles.subsection__title} ${styledTitle.title}`}>
        {title}
      </h3>
      <p
        className={`${styles.subsection__text} ${styledDescription.description}`}
      >
        {body}
      </p>
    </div>
  );
};

Subsection.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export { Subsection };
