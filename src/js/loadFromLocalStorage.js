/* eslint-disable linebreak-style */
export function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
