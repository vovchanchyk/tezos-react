import React from 'react'

const DifferenceItem = ({title,body,...props}) => {
    return (
        <div className="difference__item">
            {props.children}
            <h3 className="difference__subtitle">{title}</h3>
            <p className="difference__paragraph">
                {body}
            </p> 
        </div>
    )
}

export default DifferenceItem
