/* eslint-disable no-undef */
import { showWeather } from './showWeather.js';

describe('showWeather', () => {
  it('should return correct HTML structure for weather data', () => {
    const data = {
      location: {
        name: 'Калининград',
        country: 'Россия',
        lat: 54.7104,
        lon: 20.4522,
      },
      current: {
        condition: {
          icon: 'https://example.com/icon.png',
        },
        temp_c: 15,
        wind_mph: 5,
      },
    };
    showWeather(data);
    const expectedOutput = `
        <div>
        <h2>Калининград, Россия</h2>
        <div class = "block">
        <div class = "item"><img src="https://example.com/icon.png"></img></div>
        <div class = "item">Температура: 15°C, ветер: 5 м/c</div>
        </div>
        <p align="center"><img src="https://static-maps.yandex.ru/v1?ll=20.4522,54.7104&size=350,350&spn=0.026457,0.0619&apikey=25b219d8-43b5-4d03-94c4-6dff815d896a" border ="1" ></p>
        </div>`;

    expect(showWeather(data)).toBe(expectedOutput);
  });
});
