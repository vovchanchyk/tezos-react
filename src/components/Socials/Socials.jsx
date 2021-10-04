import React from 'react';
import {Link} from './Link';
import data from './data';
import styles from './Socials.module.scss';
import PropTypes from "prop-types";


const Socials = ({className}) => {

    return (
        <ul className={`${className} ${styles.socials}`}>
            {data.map((el) => {
                const name = el.href.slice(7) 
                return <Link {...el} name = {name} key={el.href}/>
            })}
        </ul>
    )
}

Socials.propTypes = {
    className: PropTypes.string
}
Socials.defaultProps = {
    className:''
}

export  {Socials};
