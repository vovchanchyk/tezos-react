import React from 'react';
import './navLink.scss';
import { useHistory, useLocation } from 'react-router';

const NavLink = ({name,path}) => {
    const history = useHistory()
    const location = useLocation();
    const linkClass = (location.pathname === path)?'nav-link nav-link--active':'nav-link';

    return (
        <button className={linkClass} onClick={()=>history.push(path)}>{name}</button>
    )
}

export default NavLink;
