import React from 'react';
import PropTypes from 'prop-types';

// 📦 components
import { Card, CardItem } from '@income-react/components';

const _round = value => {
  return Math.round(parseFloat(value) * 100) / 100 + ' ₽';
};

const Results = ({ data }) => {
  const { byhours, bonus, district, harm, tax, union, total } = data;

  return (
    Object.entries(data).length !== 0 && (
      <Card description='Все округлено в большую сторону' title='Результат'>
        <div id='result'>
          <CardItem title='По часам' value={_round(byhours)} />
          <CardItem title='Премия' value={_round(bonus)} />
          <CardItem title='Районный коэффициент' value={_round(district)} />
          <CardItem title='Вредность' value={_round(harm)} />
          <CardItem title='Вычеты НДФЛ' value={`-${_round(tax)}`} />
          <CardItem title='Профсоюзные взносы' value={`-${_round(union)}`} />
          <CardItem title='Всего' value={_round(total)} />
        </div>
      </Card>
    )
  );
};

Results.propTypes = {
  data: PropTypes.object.isRequired
};

export default Results;
