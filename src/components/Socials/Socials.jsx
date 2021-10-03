import React from 'react';
import {Link} from './Link';
import data from './data';
import './Socials.module.scss';


const Socials = ({className}) => {

    return (
        <ul className={`${className} socials`}>
            {data.map((el) => {
                const name = el.href.slice(7) 
                return <Link {...el} name = {name} key={el.href}/>
            })}
        </ul>
    )
}

export  {Socials};
