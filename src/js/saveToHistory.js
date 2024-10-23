/* eslint-disable linebreak-style */
const limitCity = 10;
export function saveToHistory(newCity) {
  const cityHistory = JSON.parse(localStorage.getItem('keyWeather')) || [];
  if (!cityHistory.includes(newCity)) {
    cityHistory.push(newCity);
    if (cityHistory.length > limitCity) {
      cityHistory.shift();
    }
    localStorage.setItem('keyWeather', JSON.stringify(cityHistory));
  }
}
