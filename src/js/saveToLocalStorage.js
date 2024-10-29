/* eslint-disable linebreak-style */
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
