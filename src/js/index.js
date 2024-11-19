/* eslint-disable no-use-before-define */
/* eslint-disable linebreak-style */
// document.addEventListener('DOMContentLoaded', async () => {
//   const container = document.querySelector('#app');
//   initialLoader(container);
// });

// export function initialLoader(el) {
//   const input = document.createElement('input');
//   input.placeholder = 'Введите город';
//   el.append(input);

//   const button = document.createElement('bitton');
//   el.append(button);
// }

import weatherUI from './weatherUI.js';

export default function createContainer(id) {
  const container = document.createElement('div');
  container.id = id;
  document.body.append(container);
  return container;
}

weatherUI(createContainer('weatherUI'));
