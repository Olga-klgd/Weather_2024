/* eslint-disable linebreak-style */
// import { findWeather } from './findWeather.js';

// import { renderContainerByCity } from './renderContainerByCity.js';

// import { showWeather } from './showWeather.js';

export function renderListCities(cityFromLocalStorage) {
  const containerFoundedCities = document.createElement('div');
  //   const check1 = document.createElement('check1');
  //   check1.textContent = 'неизвестный город';
  //   el.append(check1);
  cityFromLocalStorage.forEach(async (city) => {
    const cityDiv = document.createElement('div');
    cityDiv.innerText = city;
    // const cityWeather = await renderContainerByCity(city);
    // // cityDiv.innerText = cityWeather;
    // cityDiv.addEventListener('click', async () => {
    //   await renderContainerByCity(city);
    // });
    // cityDiv.onclick = renderContainerByCity(city);

    containerFoundedCities.appendChild(cityDiv);
    // cityDiv.addEventListener('click', async () => {
    //   const weatherJson = await findWeather(city);
    //   showWeather(weatherJson);
    //   console.log(city);
    // });
  });
  return containerFoundedCities.innerHTML;
}
