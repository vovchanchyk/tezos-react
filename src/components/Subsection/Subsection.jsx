import React from 'react';
import './subsection.scss';

const Subsection = ({ title, body }) => {
    return (
        <div className="subsection">
            <h3 className="subsection__title title">{title}</h3>
            <p className="subsection__text description">
                {body}
            </p>
        </div>
    )
}

export default Subsection;
