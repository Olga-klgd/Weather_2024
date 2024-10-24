export function loadFromHistoryCity(keyWeather) {
  const historyAll = localStorage.getItem(keyWeather);
  return historyAll ? JSON.parse(historyAll) : [];
}
// import { findWeather } from './findWeather.js';

// export function loadFromHistoryCity(keyWeather) {
//   const historyAll = localStorage.getItem(keyWeather);
//   const listForContainer = historyAll ? JSON.parse(historyAll) : [];
//   const historyContainer = document.createElement('historyContainter');

//   historyContainer.innerHTML = '';
//   listForContainer.forEach((city) => {
//     const div = document.createElement('div');
//     div.innerHTML = city;
//     div.addEventListener('click', () => findWeather(city));
//     historyContainer.appendChild(div);
//   });
//   // el.append(historyContainer);
//   return historyContainer;
// }
