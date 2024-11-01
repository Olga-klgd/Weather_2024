/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { showWeather } from './showWeather.js';

const testData = {
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

// Unit tests for showWeather function
describe('showWeather', () => {
  it('Ответ включает Калининград', () => {
    const result = showWeather(testData);
    expect(result).toContain('Калининград, Россия');
  });

  it('Показывает температуру', () => {
    const result = showWeather(testData);
    expect(result).toContain('Температура: 15°C');
  });

  it('Показывает ветер', () => {
    const result = showWeather(testData);
    expect(result).toContain('ветер: 5 м/c');
  });

  it('Отображается иконка для погоды', () => {
    const result = showWeather(testData);
    expect(result).toContain('src="https://example.com/icon.png"');
  });

  it('Выводится карта', () => {
    const result = showWeather(testData);
    expect(result).toContain(
      'https://static-maps.yandex.ru/v1?ll=20.4522,54.7104&size=300,300&spn=0.026457,0.0619&apikey=25b219d8-43b5-4d03-94c4-6dff815d896a',
    );
  });
});
