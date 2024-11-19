/* eslint-disable linebreak-style */
// Определяем по городу погоду и отрисовываем
import { findWeather } from './findWeather.js';
import { showWeather } from './showWeather.js';

export async function renderContainerByCity(city) {
  const weatherJson = await findWeather(city);
  const weatherShowContainer = document.createElement('weatherShowContainer');
  const renderWeather = showWeather(weatherJson);
  weatherShowContainer.innerHTML = `${renderWeather}`;
  return weatherShowContainer.innerHTML;
}
