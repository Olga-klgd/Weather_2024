/* eslint-disable no-return-await */
/* eslint-disable linebreak-style */
// import { findWeather } from './findWeather.js';
import { renderContainerByCity } from './renderContainerByCity.js';

// import { showWeather } from './showWeather.js';

export function renderListCities(cityFromLocalStorage) {
  const containerFoundedCities = document.createElement('div');
  containerFoundedCities.innerHTML = '';
  let arrHTML = [];
  const weatherCity = document.createElement('div');
  weatherCity.innerHTML = '';
  //   const check1 = document.createElement('check1');
  //   check1.textContent = 'неизвестный город';
  //   el.append(check1);
  cityFromLocalStorage.forEach((city) => {
    const div = document.createElement('div');
    div.innerHTML = city;
    div.addEventListener('click', async () => {
      const weatherCityClick = await renderContainerByCity(city);
      weatherCity.innerHTML = `Погода ${weatherCityClick}`;
    });

    //   async () => {
    //   const renderWeather = await renderContainerByCity(city);
    //   weatherCity.innerHTML = `Проверяем контейнер${renderWeather}`;
    // });
    containerFoundedCities.appendChild(div);
    // cityDiv.addEventListener('click', async () => {
    //   const weatherJson = await findWeather(city);
    //   showWeather(weatherJson);
    //   console.log(city);
    // });
  });
  arrHTML = [containerFoundedCities.innerHTML, weatherCity.innerHTML, 2];
  return arrHTML;
}
