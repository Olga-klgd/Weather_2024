/* eslint-disable linebreak-style */
import { loadFromHistoryCity } from './loadFromHistoryCity.js';
import { findWeather } from './findWeather.js';

export function loadContainerHistory() {
  const historyContainer = document.createElement('historyContainter');
  const listForContainer = loadFromHistoryCity();
  historyContainer.innerHTML = '';
  listForContainer.forEach((city) => {
    const div = document.createElement('div');
    historyContainer.appendChild(div);
    div.innerHTML = city;
    div.addEventListener('click', (ev) => {
      ev.preventDefault();
      findWeather(city);
    });
  });
  // console.log('читаем', listForContainer);
  return historyContainer;
}
