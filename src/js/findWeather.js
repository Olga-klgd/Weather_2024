/* eslint-disable linebreak-style */
// import { getLocationByIP } from './getLocationbyIP.js';

// const openWeatherApiKey = 'b889a81670a5b539acbb6c0c29d0e689';
const weatherApiKey = 'ff67773d96384e45a29113456242210';

export async function findWeather(city) {
  // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric&lang=ru`);
  // const weatherJson = await res.json();

  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}`,
  );
  const weatherJson = await res.json();
  return weatherJson;
}
