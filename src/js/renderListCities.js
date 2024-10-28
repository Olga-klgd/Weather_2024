/* eslint-disable linebreak-style */
// import { findWeather } from './findWeather.js';
// import { renderContainerByCity } from './renderContainerByCity.js';

// import { renderContainerByCity } from './renderContainerByCity';

// import { showWeather } from './showWeather.js';

export function renderListCities(cityFromLocalStorage) {
  const containerFoundedCities = document.createElement(
    'containerFoundedCities',
  );
  containerFoundedCities.innerHTML = '';
  //   const check1 = document.createElement('check1');
  //   check1.textContent = 'неизвестный город';
  //   el.append(check1);
  cityFromLocalStorage.forEach((city) => {
    const cityDiv = document.createElement('div');
    cityDiv.innerText = city;
    // cityDiv.addEventListener('click', async () => {
    //   const weather = await renderContainerByCity(city);
    //   cityDiv.innerText = weather;
    // });
    containerFoundedCities.appendChild(cityDiv);
    // cityDiv.addEventListener('click', async () => {
    //   const weatherJson = await findWeather(city);
    //   showWeather(weatherJson);
    //   console.log(city);
    // });
  });
  return containerFoundedCities.innerHTML;
}
