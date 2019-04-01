import React from 'react';
import PropTypes from 'prop-types';

// 📦 components
import { Card, Input } from '@income-react/components';

const CalculateForm = ({ onSubmit }) => {
  return (
    <Card
      description='Сколько мы зарабатываем?'
      style={{ margin: '95px 30px 0 30px' }}
      title='Месячный доход'
      toggle='show'
    >
      <form onSubmit={onSubmit}>
        <Input
          id='hours'
          min='0'
          placeholder='Введите количество часов'
          title='Отработано часов'
          type='number'
          step='0.01'
          value=''
        />
        <Input id='calculate' type='submit' value='Подсчитать' />
      </form>
    </Card>
  );
};

CalculateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default CalculateForm;
