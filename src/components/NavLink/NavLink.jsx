import React from "react";
import PropTypes from "prop-types";
import { useHistory, useLocation } from "react-router";
import styles from "./NavLink.module.scss";

const NavLink = ({ name, path }) => {
  const history = useHistory();
  const location = useLocation();
  const linkClass =
    location.pathname === path
      ? `${styles.navlink} ${styles.navlink_active}`
      : `${styles.navlink}`;
  return (
    <button className={linkClass} onClick={() => history.push(path)}>
      {name}
    </button>
  );
};

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export { NavLink };
