import React from 'react';
import styles from './../Socials.module.scss';

const Link = ({img,href,name}) => {
    return (
        <li className={styles.socials__item}>
            <img src={img} alt="website-link icon" className={styles.socials__icon} />
            <a href={href} rel="noopener noreferrer" target="_blank" className={styles.socials__link}>{name}</a>
        </li>
    )
}

export {Link};
