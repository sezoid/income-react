import React from 'react';

// 📦 components
import { Card, Input } from '@income-react/components';

const Settings = ({ currentSettings, onSubmit }) => {
  const saveSettings = event => {
    event.preventDefault();
    const form = event.target;

    const newSettings = {
      experience: parseFloat(form.experience.value),
      percentBonus: parseFloat(form.percentBonus.value),
      percentDistrict: parseFloat(form.percentDistrict.value),
      percentHarm: parseFloat(form.percentHarm.value),
      percentTax: parseFloat(form.percentTax.value),
      percentUnion: parseFloat(form.percentUnion.value),
      tariffRate: parseFloat(form.tariffRate.value)
    };

    onSubmit(newSettings);
  };

  return (
    <Card
      description='Основные параметры приложения'
      title='Настройки'
      toggle='hide'
    >
      <form onSubmit={saveSettings}>
        <Input
          id='tariffRate'
          min='0'
          placeholder='Введите стоимость часа Вашей работы'
          title='Тарифная ставка'
          type='number'
          step='0.01'
          value={currentSettings.tariffRate}
        />
        <Input
          id='experience'
          min='0'
          placeholder='Введите размер доплаты за непрерывный стаж'
          title='Доплата за непрерывный стаж'
          type='number'
          step='0.01'
          value={currentSettings.experience}
        />
        <Input
          id='percentHarm'
          min='0'
          placeholder='Введите размер компенсации за вредные условия в процентах'
          title='Вредные условия'
          type='number'
          step='0.01'
          value={currentSettings.percentHarm}
        />
        <Input
          id='percentBonus'
          min='0'
          placeholder='Введите размер премии в процентах'
          title='Премия'
          type='number'
          step='0.01'
          value={currentSettings.percentBonus}
        />
        <Input
          id='percentDistrict'
          min='0'
          placeholder='Введите размер районного коэффициента в процентах'
          title='Районный коэффициент'
          type='number'
          step='0.01'
          value={currentSettings.percentDistrict}
        />
        <Input
          id='percentTax'
          min='0'
          placeholder='Введите размер вычетов НДФЛ в процентах'
          title='Подоходный налог'
          type='number'
          step='0.01'
          value={currentSettings.percentTax}
        />
        <Input
          id='percentUnion'
          min='0'
          placeholder='Введите размер профсоюзных взносов в процентах'
          title='Профсоюзные взносы'
          type='number'
          step='0.01'
          value={currentSettings.percentUnion}
        />
        <Input id='save' type='submit' value='Сохранить настройки' />
      </form>
    </Card>
  );
};

export default Settings;
