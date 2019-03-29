import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import './index.styl';

const Card = ({ children, description, title, toggle }) => {
  const [status, setStatus] = useState(toggle || null);

  const _toggle = () => {
    if (status === 'hide') {
      setStatus('show');
    } else if (status === 'show') {
      setStatus('hide');
    } else {
      return null;
    }
  };

  return (
    <div className='card'>
      <h2
        className={`title${
          status === 'hide' || status === 'show' ? ' toggle' : ''
        }`}
        onClick={_toggle}
        title={
          status !== undefined && 'Вы можете свернуть/развернуть данный блок'
        }
      >
        {title}
      </h2>
      <span className='subtitle'>{description}</span>
      {status !== 'hide' ? <div className='container'>{children}</div> : null}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired
  ]),
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggle: PropTypes.string
};

export default Card;
