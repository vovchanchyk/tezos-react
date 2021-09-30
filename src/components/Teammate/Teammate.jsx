import React from 'react';
import './teammate.scss';

const Teammate = (props) => {
    return (
        <div className ="teammate">
        <img src={props.img} alt={`${props.name} pic`} className="teammate__picture" />
        <span className ="teammate__name">{props.name}</span>
        <span className ="teammate__position">{props.position}</span>
      </div>
    )
}

export default Teammate
