import React from 'react';
import PropTypes from 'prop-types';
import { Link } from './Link';
import data from './data';
import styles from './Socials.module.scss';

const Socials = ({ className }) => (
  <ul className={`${className} ${styles.socials}`}>
    {data.map((el) => {
      const name = el.href.slice(7);
      return <Link img={el.img} name={name} href={el.href} key={el.href} />;
    })}
  </ul>
);

Socials.propTypes = {
  className: PropTypes.string,
};
Socials.defaultProps = {
  className: '',
};

export { Socials };
