import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 📦 components
import { Header } from '@income-react/components';
import { CalculateForm, Results, Settings } from './blocks';

// 🎨 styles
import './index.styl';

import * as serviceWorker from './serviceWorker';

const App = () => {
  const [result, getResult] = useState({});

  const [settings, setSettings] = useState({
    experience: 151.82, // непрерывный стаж
    tariffRate: 65.6, // стоимость часа
    percentBonus: 47, // размер премии (%)
    percentDistrict: 15, // районный коэффициент (%)
    percentHarm: 4, // вредность (%)
    percentTax: 13, // НДФЛ (%)
    percentUnion: 1 // взносы в профсоюз (%)
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

    getResult({
      bonus: bonus,
      byhours: byhours,
      district: district,
      experience: settings.experience,
      harm: harm,
      tax: tax,
      total: total,
      union: union
    });
  };

  return (
    <>
      <Header title='Мой доход' />
      <CalculateForm onSubmit={_onSubmit} />
      <Results data={result} />
      <Settings currentSettings={settings} onSubmit={setSettings} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
