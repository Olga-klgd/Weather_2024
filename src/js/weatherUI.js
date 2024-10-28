/* eslint-disable linebreak-style */
import { getLocationByIP } from './getLocationByIP.js';
import { findWeather } from './findWeather.js';
import { showWeather } from './showWeather.js';
import { saveToLocalStorage } from './saveToLocalStorage.js';
import { loadFromLocalStorage } from './loadFromLocalStorage.js';
// import { renderListCities } from './renderListCities.js';
import { renderContainerByCity } from './renderContainerByCity.js';

export default async function weatherUI(el) {
  const header = document.createElement('header');
  header.innerHTML = '<h2>Прогноз погоды</h2>';
  // Определим город пользователя по IP
  const city = await getLocationByIP();
  // Через общую отрисовку
  const check1 = document.createElement('check1');
  el.append(check1);
  const renderWeather1 = await renderContainerByCity(city);
  check1.innerHTML = `Проверяем ${city} ${renderWeather1}`;

  //  Найдем погоду в городе пользователя
  let weatherJson = await findWeather(city);
  //  Отрисуем погоду в городе пользователя
  const weatherShowContainer = document.createElement('weatherShowContainer');
  // const renderWeather = showWeather(weatherJson);
  weatherShowContainer.innerHTML = `${showWeather(weatherJson)}`;
  // weatherShowContainer.innerHTML = `${renderWeather1}`;
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
  // const listFoundedCities = loadFromLocalStorage('keyWeather');
  // containerFoundedCities.innerHTML = `<div>
  // <h2>Список прошлых поисков</h2>
  // ${renderListCities(listFoundedCities)}
  // </div>`;

  // const check = document.createElement('check');
  // el.append(check);
  // let cityFromLocalStorage = loadFromLocalStorage('keyWeather');
  // renderListCities(cityFromLocalStorage);
  // check.innerHTML = `Получаем ${renderListCities(cityFromLocalStorage)}`;

  button.addEventListener('click', async () => {
    // Получаем погоду для города из поля ввода
    const сity = input.value.trim();
    if (сity) {
      weatherJson = await findWeather(сity);
      weatherShowContainer.innerHTML = `${showWeather(weatherJson)}`;
      input.value = '';
    }
    // Сохраняем город в LocalStorage
    saveToLocalStorage(сity);
    const cityFromLocalStorage = loadFromLocalStorage('keyWeather');
    // eslint-disable-next-line no-shadow
    cityFromLocalStorage.forEach((city) => {
      const div = document.createElement('div');
      div.innerHTML = city;
      div.addEventListener('click', async () => {
        const renderWeather2 = await renderContainerByCity(city);
        weatherShowContainer.innerHTML = `Проверяем контейнер${city} ${renderWeather2}`;
      });
      containerFoundedCities.appendChild(div);
    });

    // el.append(containerFoundedCities);

    //   containerFoundedCities.innerHTML = `<div>
    // <h2>Список прошлых поисков</h2>
    //  ${renderListCities(listFoundedCities)}
    // </div>`;
    // Получаем информацию из LocalStorage для обновления списка городов
    // cityFromLocalStorage = loadFromLocalStorage('keyWeather');
    // const check2 = document.createElement('check2');
    // check2.innerText = `список ${renderListCities(cityFromLocalStorage)}`;
    // el.append(check2);
    //  cityFromLocalStorage = loadFromLocalStorage('keyWeather');
    // check.innerHTML = `${cityFromLocalStorage}`;
    // const listRenderCity = renderListCities(cityFromLocalStorage);
    // check.innerHTML = `${listRenderCity}`;
  });

  // export function containerForClickableCities(cityFromLocalStorage) {
  //   //  const cityFromLocalStorage = loadFromLocalStorage('keyWeather');
  //   // eslint-disable-next-line no-shadow
  //   cityFromLocalStorage.forEach((city) => {
  //     const div = document.createElement('div');
  //     div.innerHTML = city;
  //     div.addEventListener('click', async () => {
  //       const renderWeather = await renderContainerByCity(city);
  //       check1.innerHTML = `Проверяем контейнер${city} ${renderWeather}`;
  //     });
  //     containerFoundedCities.appendChild(div);
  //   });
  // }

  // const check = document.createElement('check');
  // check.innerHTML = `<div>${newCity}</div>`;
  // el.append(check);
}
