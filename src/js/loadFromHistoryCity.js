/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// const historyAll = document.createElement('div');
// export function loadFromHistoryCity() {
//   const historyCities = JSON.parse(localStorage.getItem(keyHistory)) || [];
//   historyAll.innerHTML = '<ol></ol>';
//   historyCities.forEach(newCity => {
//     const li = document.createElement('li');
//     historyAll.appendChild(div);
//   });

// }
// export function loadFromHistoryCity() {
//   let allHistory = '<ol>';
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.value(key);
//     allHistory += `<li>${key}: ${value}</li>`;
//     console.log(value);
//   }
//   allHistory += '</ol>';
//   console.log('11111111', allHistory);
//   return allHistory;
// }
// import { findWeather } from './findWeather';

// export function loadFromHistoryCity(keyWeather) {
//   const allHistory = JSON.parse(localStorage.getItem(keyWeather)) || [];
//   allHistory.forEach((city) => {
//     const div = document.createElement('div');
//     div.innerHTML = city;
//     div.addEventListener('click', () => findWeather(city));
//   });
//   return allHistory;
// }

export function loadFromHistoryCity(keyWeather) {
  const historyAll = localStorage.getItem(keyWeather);
  return historyAll ? JSON.parse(historyAll) : [];
}
