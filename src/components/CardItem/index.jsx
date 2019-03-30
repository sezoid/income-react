import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

const CardItem = ({ title, value }) => (
  <CopyToClipboard text={`${title}: ${value}`}>
    <li className='item'>
      <h2 className='item_title'>{title}</h2>
      <p className='item_value'>{value}</p>
    </li>
  </CopyToClipboard>
);

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default CardItem;
