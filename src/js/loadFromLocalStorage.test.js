/* eslint-disable no-undef */
import { loadFromLocalStorage } from './loadFromLocalStorage.js';

describe('loadFromLocalStorage', () => {
  beforeEach(() => {
    // Очистка localStorage перед каждым тестом
    localStorage.clear();
  });

  test('Возвращает пустой массив, если нет ключа', () => {
    const result = loadFromLocalStorage('notKey');
    expect(result).toEqual([]);
  });

  test('Возвращает записанные значения', () => {
    const testArray = ['Калининград', 'Москва'];
    localStorage.setItem('keyWeather', JSON.stringify(testArray));
    const result = loadFromLocalStorage('keyWeather');
    expect(result).toEqual(testArray);
  });
});
