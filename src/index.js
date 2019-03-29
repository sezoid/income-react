import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 📦 components
import { Header } from '@income-react/components';
import { CalculateForm, Results } from './blocks';

// 🎨 styles
import './index.styl';

import * as serviceWorker from './serviceWorker';

const App = () => {
  const [result, calculate] = useState({});

  const [settings, setSettings] = useState({
    experience: 151.82,                         // непрерывный стаж
    tariffRate: 65.6,                           // стоимость часа
    percentBonus: 47,                           // размер премии (%)
    percentDistrict: 15,                        // районный коэффициент (%)
    percentHarm: 4,                             // вредность (%)
    percentTax: 13,                             // НДФЛ (%)
    percentUnion: 1                             // взносы в профсоюз (%)
  });

  const _onSubmit = event => {
    event.preventDefault();
    const form = event.target;

    const byhours = form.hours.value * settings.tariffRate;
    const harm = (byhours / 100) * settings.percentHarm;
    const bonus = ((byhours + harm) / 100) * settings.percentBonus;
    const district =
      ((byhours + harm + bonus + settings.experience) / 100) *
      settings.percentDistrict;
    const tax =
      ((byhours + harm + bonus + district + settings.experience) / 100) *
      settings.percentTax;
    const union =
      ((byhours + harm + bonus + district + settings.experience) / 100) *
      settings.percentUnion;
    const total =
      byhours + harm + bonus + district + settings.experience - (tax + union);

    calculate({
      bonus: bonus,
      district: district,
      experience: settings.experience,
      harm: harm,
      tax: tax,
      byhours: byhours,
      union: union,
      total: total
    });
  };

  return (
    <>
      <Header title='Мой доход' />
      <CalculateForm onSubmit={_onSubmit} />
      <Results data={result} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
