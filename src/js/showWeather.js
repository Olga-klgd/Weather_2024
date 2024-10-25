/* eslint-disable linebreak-style */
// Отрисовывем погоду из json
const mapApiKey = '25b219d8-43b5-4d03-94c4-6dff815d896a';
export function showWeather(data) {
  // const weatherContainer = `
  //       <div class>
  //       <h2>${data.name}, ${data.sys.country}</h2>
  //       <p>Температура: ${data.main.temp}°C, ощущается как ${data.main.feels_like}°C</p>
  //       <p><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}"> ${data.weather[0].description}, ветер: ${data.wind.speed} м/c </p>
  //       <img src="https://___static-maps.yandex.ru/v1?ll=${data.coord.lon},${data.coord.lat}&size=300,300&spn=0.026457,0.0619&apikey=${mapApiKey}">
  //       </div>`;

  const weatherContainer = `
        <div class>
        <h2>${data.location.name}, ${data.location.country}</h2>
        <p>Температура: ${data.current.temp_c}°C</p>
        <p>${data.current.condition.text}, ветер: ${data.current.wind_mph} м/c </p>
        <img src="https://___static-maps.yandex.ru/v1?ll=${data.location.lon},${data.location.lat}&size=300,300&spn=0.026457,0.0619&apikey=${mapApiKey}">
        </div>`;
  return weatherContainer;
}
