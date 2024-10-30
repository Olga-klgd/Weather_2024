/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import weatherUI from './weatherUI.js';
import { getLocationByIP } from './getLocationByIP.js';
import { findWeather } from './findWeather.js';
import { showWeather } from './showWeather.js';
import { saveToLocalStorage } from './saveToLocalStorage.js';
import { loadFromLocalStorage } from './loadFromLocalStorage.js';

jest.mock('./getLocationByIP');
jest.mock('./findWeather');
jest.mock('./showWeather');
jest.mock('./saveToLocalStorage');
jest.mock('./loadFromLocalStorage');

describe('weatherUI', () => {
  let element;

  beforeEach(() => {
    // Создаем элемент для тестирования
    element = document.createElement('div');
    document.body.appendChild(element);
  });

  afterEach(() => {
    // Удаляем элемент после каждого теста
    document.body.removeChild(element);
    jest.clearAllMocks();
  });

  test('должен создать заголовок и элементы ввода', async () => {
    await weatherUI(element);

    expect(element.querySelector('h2').textContent).toBe('Прогноз погоды');
    expect(element.querySelector('input').placeholder).toBe('Введите город');
    expect(element.querySelector('button').textContent).toBe(
      'Посмотрим, что с погодой',
    );
  });

  test('должен отображать погоду по умолчанию', async () => {
    getLocationByIP.mockResolvedValue('Kaliningrad');
    findWeather.mockResolvedValue({ temp_c: 13.3 });
    showWeather.mockReturnValue('<p>Температура: 13.3°C</p>');

    await weatherUI(element);

    const weatherShowContainer = element.querySelector('weatherShowContainer');
    expect(weatherShowContainer.innerHTML).toBe('<p>Температура: 13.2°C</p>');
  });

  test('должен искать погоду по введенному городу', async () => {
    const input = element.querySelector('input');
    const button = element.querySelector('button');

    input.value = 'Москва';
    await weatherUI(element);
    findWeather.mockResolvedValueOnce({ temp_c: 15 });
    showWeather.mockReturnValue('<p>Температура: 15°C</p>');

    button.click();

    const weatherShowContainer = element.querySelector('weatherShowContainer');
    expect(weatherShowContainer.innerHTML).toBe('<p>Температура: 15°C</p>');
  });

  test('должен сохранять город в LocalStorage', async () => {
    await weatherUI(element);

    const input = element.querySelector('input');
    const button = element.querySelector('button');

    input.value = 'Москва';
    button.click();
    expect(saveToLocalStorage).toHaveBeenCalledWith('Москва');
  });

  test('должен загружать города из LocalStorage', async () => {
    loadFromLocalStorage.mockReturnValue(['Москва', 'Минск']);

    await weatherUI(element);
    const containerFoundedCities = element.querySelector(
      'containerFoundedCities',
    );
    expect(containerFoundedCities.children.length).toBe(2);
    expect(containerFoundedCities.children[0].textContent).toBe('Москва');
    expect(containerFoundedCities.children[1].textContent).toBe('Минск');
  });
});
