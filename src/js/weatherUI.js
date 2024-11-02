/* eslint-disable no-shadow */
import { getLocationByIP } from './getLocationByIP.js';
import { findWeather } from './findWeather.js';
import { showWeather } from './showWeather.js';
import { saveToLocalStorage } from './saveToLocalStorage.js';
import { loadFromLocalStorage } from './loadFromLocalStorage.js';
import { renderContainerByCity } from './renderContainerByCity.js';

export default async function weatherUI(el) {
  const header = document.createElement('header');
  header.innerHTML = '<h2>Прогноз погоды</h2>';
  header.classList.add('header');
  el.append(header);

  const weatherShowContainer = document.createElement('weatherShowContainer');
  weatherShowContainer.classList.add('card');
  el.append(weatherShowContainer);

  // Определим город пользователя по IP
  const city = await getLocationByIP();

  //  Найдем погоду в городе пользователя
  let weatherJson = await findWeather(city);
  //  Отрисуем погоду в городе пользователя
  weatherShowContainer.innerHTML = `${showWeather(weatherJson)}`;

  // В каком городе ищем погоду?
  const input = document.createElement('input');
  input.placeholder = 'Введите город';
  el.append(input);
  input.classList.add('search-field');

  const button = document.createElement('button');
  button.innerHTML = 'Посмотрим, что с погодой';
  el.append(button);
  button.classList.add('button');

  const containerFoundedCities = document.createElement(
    'containerFoundedCities',
  );
  el.append(containerFoundedCities);
  containerFoundedCities.classList.add('styled-list');

  button.addEventListener('click', async (event) => {
    // Получаем погоду для города из поля ввода
    event.preventDefault();
    containerFoundedCities.innerHTML = '<h2>Ранее вы искали</h2>';
    const сity = input.value.trim();
    weatherJson = await findWeather(сity);
    if (!weatherJson.error) {
      weatherShowContainer.innerHTML = `${showWeather(weatherJson)}`;
      input.value = '';
      // Сохраняем город в LocalStorage
      saveToLocalStorage(сity);
    } else {
      weatherShowContainer.innerHTML = '<h2 align = "center">Вы что-то не то ввели. <br>Попробуйте еще</h2> ';
      input.value = '';
    }
    const cityFromLocalStorage = loadFromLocalStorage('keyWeather');

    // Отрисовываем список поисков
    cityFromLocalStorage.forEach((city) => {
      const li = document.createElement('div');
      li.innerHTML = city;
      li.addEventListener('click', async (event) => {
        event.preventDefault();
        const renderWeather2 = await renderContainerByCity(city);
        weatherShowContainer.innerHTML = `${renderWeather2}`;
      });
      containerFoundedCities.appendChild(li);
    });
  });
}
