import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Socials.module.scss';

const Link = ({ img, href, name }) => (
  <li className={styles.socials__item}>
    <img src={img} alt='website-link icon' className={styles.socials__icon} />
    <a
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      className={styles.socials__link}
    >
      {name}
    </a>
  </li>
);

Link.propTypes = {
  img: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export { Link };
