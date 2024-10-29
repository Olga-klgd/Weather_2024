/* eslint-disable linebreak-style */
// Отрисовывем погоду из json
const mapApiKey = '25b219d8-43b5-4d03-94c4-6dff815d896a';
export function showWeather(data) {
  const weatherContainer = `
        <div class = "form">
        <h2>${data.location.name}, ${data.location.country}</h2>
        <span><img src="${data.current.condition.icon}" align="center"></img></span>
        <span>Температура: ${data.current.temp_c}°C, ветер: ${data.current.wind_mph} м/c </span>
        <h3>На карте</h3>
        <img src="__https://static-maps.yandex.ru/v1?ll=${data.location.lon},${data.location.lat}&size=300,300&spn=0.026457,0.0619&apikey=${mapApiKey}">
        </div>`;
  return weatherContainer;
}
