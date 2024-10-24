/* eslint-disable linebreak-style */
// import { loadFromHistoryCity } from './loadFromHistoryCity.js';
import { findWeather } from './findWeather.js';

export function loadContainerHistory(listForContainer) {
  const historyContainer = document.createElement('ul');
  listForContainer.forEach((city) => {
    const cityItem = document.createElement('li');
    cityItem.innerHTML = city;
    cityItem.addEventListener('click', () => {
      const weatherCityItem = findWeather(city);
      weatherCityItem.textContent = weatherCityItem;
      historyContainer.appendChild(weatherCityItem);
    });
    historyContainer.appendChild(cityItem);
  });
  // console.log('читаем', listForContainer);
}
