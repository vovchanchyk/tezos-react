import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ Component, color }) => <Component color={color} />;

Icon.propTypes = {
  Component: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export { Icon };
