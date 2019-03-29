import React from 'react';
import PropTypes from 'prop-types';

const CardItem = ({ title, value }) => (
  <li className='item'>
    <h2 className='item_title'>{title}</h2>
    <p className='item_value'>{value}</p>
  </li>
);

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default CardItem;
