import React from 'react';
import './title.scss';

const Title = (props) => {
    return (
        <h2 className={`${props.block}__title  title`}>
            {props.children}
        </h2>
    )
}

export default Title
