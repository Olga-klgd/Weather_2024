/* eslint-disable linebreak-style */
// const openWeatherApiKey = 'b889a81670a5b539acbb6c0c29d0e689';
const weatherApiKey = 'ff67773d96384e45a29113456242210';
const mapApiKey = '25b219d8-43b5-4d03-94c4-6dff815d896a';
export async function findWeather(city) {
  // const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${openWeatherApiKey}&units=metric&lang=ru`);
  // const data = await res.json();
  // const weatherContainer = `
  //       <div class>
  //       <h2>${data.name}, ${data.sys.country}</h2>
  //       <p>Температура: ${data.main.temp}°C, ощущается как ${data.main.feels_like}°C</p>
  //       <p><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}"> ${data.weather[0].description}, ветер: ${data.wind.speed} м/c </p>
  //       <img src="https://static-maps.yandex.ru/v1?ll=${data.coord.lon},${data.coord.lat}&size=300,300&spn=0.026457,0.0619&apikey=${mapApiKey}">
  //       </div>`;

  const resOther = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}`,
  );
  const dataOther = await resOther.json();
  const weatherContainer = `
        <div class>
        <h2>${dataOther.location.name}, ${dataOther.location.country}</h2>
        <p>Температура: ${dataOther.current.temp_c}°C</p>
        <p>${dataOther.current.condition.text}, ветер: ${dataOther.current.wind_mph} м/c </p>
        <img src="https://___static-maps.yandex.ru/v1?ll=${dataOther.location.lon},${dataOther.location.lat}&size=300,300&spn=0.026457,0.0619&apikey=${mapApiKey}">
        </div>`;
  // console.log('нашли погоду', weatherContainer);
  return weatherContainer;
}
findWeather('Калининград');
