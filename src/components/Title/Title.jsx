import React from 'react';
import './title.scss';

const Title = ({className,...props}) => {
    return (
        <h2 className={`${className}  title`}>
            {props.children}
        </h2>
    )
}

export default Title
