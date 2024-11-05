// Отрисовывем погоду из json
const mapApiKey = '25b219d8-43b5-4d03-94c4-6dff815d896a';
export function showWeather(data) {
  const weatherContainer = `
        <div>
        <h2>${data.location.name}, ${data.location.country}</h2>
        <div class = "block">
        <div class = "item"><img src="${data.current.condition.icon}"></img></div>
        <div class = "item">Температура: ${data.current.temp_c}°C, ветер: ${data.current.wind_mph} м/c</div>
        </div>
        <p align="center"><img src="https://static-maps.yandex.ru/v1?ll=${data.location.lon},${data.location.lat}&size=350,350&spn=0.026457,0.0619&apikey=${mapApiKey}" border ="1" ></p>
        </div>`;
  return weatherContainer;
}
