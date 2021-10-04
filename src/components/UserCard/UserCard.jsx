import React from 'react';
import PropTypes from "prop-types";

const UserCard = ({user}) => {
    
    return (
        <div style={{
            border: 'solid 1px',
            width: '300px',
            margin: '10px'
        }}>

            <p>{user.name}</p>
            <p>{user.surname}</p>
        </div>
    )
}
UserCard.propTypes = {
    user:PropTypes.shape({
        name:PropTypes.string,
        syrname:PropTypes.string
    })
}

UserCard.defaultProps={
    user:{
        name:'name',
        surname:'surname'
    }
}

export  {UserCard}
