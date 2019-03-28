import React from 'react';
import ReactDOM from 'react-dom';

// 📦 components
import { Card, Header, Input } from './components';

// 🎨 styles
import './index.styl';

import * as serviceWorker from './serviceWorker';

const App = () => (
  <>
    <Header title='Мой доход' />
    <Card description='Сколько мы зарабатываем?' title='Месячный доход' toggle='show'>
      <Input id='hours' min='0' placeholder='Введите количество часов' title='Отработано часов' type='input' value='' />
      <Input id='experience' min='0' placeholder='Введите размер доплаты' title='Доплата за непрерывный стаж' type='input' value='' />
      <Input id='calculate' type='submit' value='Подсчитать' />
    </Card>
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
