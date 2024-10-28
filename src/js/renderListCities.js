/* eslint-disable no-return-await */
/* eslint-disable linebreak-style */
// import { findWeather } from './findWeather.js';
// import { renderContainerByCity } from './renderContainerByCity.js';

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
    const div = document.createElement('div');
    div.innerText = `Город ${city} `;
    // div.addEventListener('click', () => console.log(city));
    //   const weather = await renderContainerByCity(city);
    //   div.innerHTML =`Город ${city} `;
    //   console.log(11);
    // })
    // div.onclick = function () {
    //   const weartherDiv = document.createElement('div');
    //   weartherDiv.innerHTML = '';
    //   const renderWeather = renderContainerByCity(city);
    //   weartherDiv.innerHTML = renderWeather;
    // };
    // div.addEventListener('click', )
    containerFoundedCities.appendChild(div);
    // cityDiv.addEventListener('click', async () => {
    //   const weatherJson = await findWeather(city);
    //   showWeather(weatherJson);
    //   console.log(city);
    // });
  });
  return containerFoundedCities.innerHTML;
}
