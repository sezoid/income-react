import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import './index.styl';

const Input = ({ id, min, max, placeholder, step, title, type, value }) => {
  const [currentValue, setValue] = useState(value);

  const _handleOnChange = event => {
    setValue(event.currentTarget.value);
  };

  const element = type !== 'textarea' ? 'input' : 'textarea';
  const elementEqualsProps = {
    id: id,
    onChange: _handleOnChange,
    placeholder: placeholder,
    value: currentValue
  };
  const elementProps =
    type !== 'textarea'
      ? {
          autoComplete: 'off',
          min: min,
          max: max,
          step: step,
          type: type,
          ...elementEqualsProps
        }
      : {
          rows: 5,
          ...elementEqualsProps
        };

  return (
    <>
      {type !== 'submit' ? <label htmlFor={id}>{`${title}:`}</label> : null}
      {React.createElement(element, elementProps, null)}
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  placeholder: PropTypes.string,
  step: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Input;
