import React from 'react';
import PropTypes from 'prop-types';
import styles from './Teammate.module.scss';

const Teammate = ({ name, position, img }) => (
  <div className={styles.teammate}>
    <img src={img} alt={`${name} pic`} className={styles.teammate__picture} />
    <span className={styles.teammate__name}>{name}</span>
    <span className={styles.teammate__position}>{position}</span>
  </div>
);

Teammate.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  img: PropTypes.node.isRequired,
};
Teammate.defaultProps = {
  name: '',
  position: '',
};
export { Teammate };
