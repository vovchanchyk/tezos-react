import React from 'react';
import Link from './__link/Link';
import data from './__data';
import './socials.scss';


const Socials = (props) => {

    return (
        <ul className={`${props.block}__socials socials`}>
            {data.map((el) => {
                const name = el.href.slice(7) 
                return <Link {...el} name = {name} key={el.href}/>
            })}
        </ul>
    )
}

export default Socials
