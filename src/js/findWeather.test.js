/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import { findWeather } from './findWeather';

describe('findWeather', () => {
  beforeEach(() => {
    // Мокаем fetch
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks(); // Очищаем моки после каждого теста
  });

  it('должен вернуть данные о погоде для указанного города', async () => {
    const city = 'Kaliningrad';
    const mockWeatherData = {
      location: {
        name: 'Kaliningrad',
        region: 'Kaliningrad',
        country: 'Russia',
      },
      current: {
        temp_c: 10,
        condition: {
          text: 'Clear',
          icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
        },
      },
    };

    // Настраиваем мок для fetch
    global.fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockWeatherData),
    });

    const weather = await findWeather(city);

    expect(fetch).toHaveBeenCalledWith(
      `https://api.weatherapi.com/v1/current.json?key=ff67773d96384e45a29113456242210&q=${city}`,
    );
    expect(weather).toEqual(mockWeatherData);
  });
});
