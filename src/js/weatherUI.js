/* eslint-disable no-unused-vars */
/* eslint-disable import/newline-after-import */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { getLocationByIP } from './getLocationByIP.js';
export function weatherUI(el) {
  const header = document.createElement('header');
  header.innerHTML = `<h2>Прогноз погоды</h2>`;
  el.append(header);
  const inputCity = document.createElement('input');
  el.append(inputCity);
  // eslint-disable-next-line linebreak-style

  const button = document.createElement('button');
  button.innerHTML = 'Ищем';
  el.append(button);

  const loaderFirst = document.createElement('loaderFirst');
  loaderFirst.innerHTML = getLocationByIP();
  el.append(loaderFirst);

  // button.addEventListener('click', () => {
  //   answer.innerHTML = `<div>${whoIsYoungerFind(
  //     inputFirst.value,
  //     inputSecond.value,
  //   )}</div>`;
  // });
}
export default weatherUI;
