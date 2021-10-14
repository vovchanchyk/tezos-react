import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.scss';

const Description = ({ className, ...props }) => (
  <p className={`${className} ${styles.description}`}>{props.children}</p>
);

Description.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Description.defaultProps = {
  className: '',
  children: null,
};

export { Description };
