import React from 'react';

const UserCard = (props) => {
    const { user } = props;
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



export default UserCard
