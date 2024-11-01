/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */

import { saveToLocalStorage } from './saveToLocalStorage.js';

describe('saveToLocalStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('добавляет город в локальное хранилище', () => {
    saveToLocalStorage('Москва');
    const result = JSON.parse(localStorage.getItem('keyWeather'));
    expect(result).toContain('Москва');
  });

  test('не добавляет дубликаты городов', () => {
    saveToLocalStorage('Москва');
    saveToLocalStorage('Москва');
    const result = JSON.parse(localStorage.getItem('keyWeather'));
    expect(result).toHaveLength(1);
  });

  test('ограничивает количество городов до limitCity', () => {
    const limitCity = 10;
    for (let i = 1; i <= limitCity + 5; i++) {
      saveToLocalStorage(`Город${i}`);
    }
    const result = JSON.parse(localStorage.getItem('keyWeather'));
    expect(result).toHaveLength(limitCity);
  });
});
