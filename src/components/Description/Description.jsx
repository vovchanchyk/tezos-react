import React from 'react';
import styles from  './Description.module.scss';
import PropTypes from "prop-types";

const Description = ({className,...props}) => {
    return (
        <p className={`${className} ${styles.description}`}>
            {props.children}
        </p>
    )
}

Description.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  }
  
Description.defaultProps = {
    className: "",
    children:null
  }

export {Description};
