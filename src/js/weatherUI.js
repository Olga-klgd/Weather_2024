/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */

import { getLocationByIP } from './getLocationByIP.js';
import { findWeather } from './findWeather.js';
import { saveToHistory } from './saveToHistory.js';
import { loadFromHistoryCity } from './loadFromHistoryCity.js';
// import { loadContainerHistory } from './loadContainerHistory.js';

// import './styles.css';

export default async function weatherUI(el) {
  // document.addEventListener('DOMContentLoaded', getOwnCity()
  const ownCity = await getLocationByIP();

  const resultWeather = document.createElement('resultWeather');
  resultWeather.innerHTML = '<h2>Прогноз погоды</h2>';
  el.append(resultWeather);

  let findWeatherCity = await findWeather(ownCity);
  const resultWeatherCheck = document.createElement('resultWeatherCheck');
  resultWeatherCheck.innerHTML = `${findWeatherCity}`;
  el.append(resultWeatherCheck);

  const input = document.createElement('input');
  input.placeholder = 'Введите город';
  el.append(input);

  const button = document.createElement('button');
  button.innerHTML = 'Посмотрим на погоду';
  el.append(button);
  // Выводим список поисков
  loadFromHistoryCity();
  const historyContainer = document.createElement('historyContainter');
  let listForContainer = loadFromHistoryCity('keyWeather');

  historyContainer.innerHTML = '';
  listForContainer.forEach((city) => {
    const div = document.createElement('div');
    div.innerHTML = city;
    div.addEventListener('click', () => findWeather(city));
    historyContainer.appendChild(div);
  });
  el.append(historyContainer);
  // loadFromHistoryCity();

  // const historyContainer = document.createElement('historyContainter');
  // const listForContainer = loadFromHistoryCity('keyWeather');
  // // historyContainer.innerHTML = 'Выгрузка';
  // const typeHistory = Array.isArray(listForContainer);
  // historyContainer.innerHTML = `<div>${listForContainer}, ${typeHistory}</div>`;
  // el.append(historyContainer);
  // // loadFromHistoryCity();

  button.addEventListener('click', async (ev) => {
    ev.preventDefault();
    const newCity = input.value.trim();
    if (newCity) {
      findWeatherCity = await findWeather(newCity);
      resultWeatherCheck.innerHTML = `${findWeatherCity}`;
      input.value = '';
      saveToHistory(newCity);
      listForContainer = loadFromHistoryCity('keyWeather');
    }
    // const allCity = loadFromHistoryCity('keyWeather');
    // сonsole.log('allcity', allCity);
    // const historyContainer = document.createElement('historyContainter');
    // historyContainer.innerHTML = loadContainerHistory(allCity);
    // el.append('historyContainter');
  });

  // const historyContainer = document.createElement('historyContainter');
  // // const listForContainer = loadFromHistoryCity();
  // historyContainer.innerHTML = 'Выгрузка';
  // // historyContainer.innerHTML = `${listForContainer}`;
  // el.append(historyContainer);
  // // loadFromHistoryCity();
}
