import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styles from './SelectComponent.module.scss';

const SelectComponent = ({ title, defaultValue, options, handler }) => (
  <div className={styles.select}>
    <span className={styles.select__title}>{title}</span>
    <Select
      defaultValue={defaultValue}
      options={options}
      onChange={(e) => handler(e.value)}
    />
  </div>
);

SelectComponent.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  defaultValue: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  ).isRequired,
  handler: PropTypes.func.isRequired,
};
SelectComponent.defaultProps = {
  defaultValue: {
    value: '',
    label: '',
  },
};
export { SelectComponent };
