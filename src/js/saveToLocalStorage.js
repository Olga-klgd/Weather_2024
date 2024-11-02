// Сохраняем города из строки поиска в LocalStorage и проверяем, чтобы их не было больше 10
const limitCity = 10;
export function saveToLocalStorage(city) {
  const cityHistory = JSON.parse(localStorage.getItem('keyWeather')) || [];
  if (!cityHistory.includes(city)) {
    cityHistory.push(city);
    if (cityHistory.length > limitCity) {
      cityHistory.shift();
    }
    localStorage.setItem('keyWeather', JSON.stringify(cityHistory));
    // loadFromHistoryCity()
  }
}
