import React from 'react';
import './description.scss';

const Description = (props) => {
    return (
        <p className={`${props.block}__description description`}>
            {props.children}
        </p>
    )
}

export default Description;
