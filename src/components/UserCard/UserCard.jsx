import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => (
  <div
    style={{
      border: 'solid 1px',
      width: '300px',
      margin: '10px',
    }}
  >
    <p>{user.name}</p>
    <p>{user.surname}</p>
  </div>
);
UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
  }),
};

UserCard.defaultProps = {
  user: {
    name: 'name',
    surname: 'surname',
  },
};

export { UserCard };
