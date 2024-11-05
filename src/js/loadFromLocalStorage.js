// По ключу достаем содержимое localStorage
export function loadFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
