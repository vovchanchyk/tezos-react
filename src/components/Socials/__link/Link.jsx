import React from 'react'

const Link = ({img,href,name}) => {
    return (
        <li className="socials__item">
            <img src={img} alt="website-link icon" className="socials__icon" />
            <a href={href} rel="noopener noreferrer" target="_blank" className="socials__link">{name}</a>
        </li>
    )
}

export default Link;
