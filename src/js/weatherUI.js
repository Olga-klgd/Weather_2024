/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
import { getLocationByIP } from './getLocationByIP.js';
import { findWeather } from './findWeather.js';
import { showWeather } from './showWeather.js';
import { saveToLocalStorage } from './saveToLocalStorage.js';
import { loadFromLocalStorage } from './loadFromLocalStorage.js';
import { renderContainerByCity } from './renderContainerByCity.js';

export default async function weatherUI(el) {
  const header = document.createElement('header');
  header.innerHTML = '<h2>Прогноз погоды</h2>';
  // Определим город пользователя по IP
  const city = await getLocationByIP();
  //  Найдем погоду в городе пользователя
  let weatherJson = await findWeather(city);
  //  Отрисуем погоду в городе пользователя
  const weatherShowContainer = document.createElement('weatherShowContainer');

  weatherShowContainer.innerHTML = `${showWeather(weatherJson)}`;
  el.append(weatherShowContainer);

  // В каком городе ищем погоду?
  const input = document.createElement('input');
  input.placeholder = 'Введите город';
  el.append(input);

  const button = document.createElement('button');
  button.innerHTML = 'Посмотрим, что с погодой';
  el.append(button);

  const containerFoundedCities = document.createElement(
    'containerFoundedCities',
  );
  el.append(containerFoundedCities);

  button.addEventListener('click', async () => {
    // Получаем погоду для города из поля ввода
    containerFoundedCities.innerHTML = '<h2>Ранее вы искали</h2>';
    const сity = input.value.trim();
    if (сity) {
      weatherJson = await findWeather(сity);
      weatherShowContainer.innerHTML = `${showWeather(weatherJson)}`;
      input.value = '';
    }
    // Сохраняем город в LocalStorage
    saveToLocalStorage(сity);
    const cityFromLocalStorage = loadFromLocalStorage('keyWeather');

    cityFromLocalStorage.forEach((city) => {
      const div = document.createElement('div');
      div.innerHTML = city;
      div.addEventListener('click', async () => {
        const renderWeather2 = await renderContainerByCity(city);
        weatherShowContainer.innerHTML = `${renderWeather2}`;
      });
      containerFoundedCities.appendChild(div);
    });
  });
}
