/* eslint-disable import/newline-after-import */
/* eslint-disable no-undef */
/* eslint-disable quotes */
import { weatherUI } from './weatherUI';
describe('weatherUI', () => {
  it('should be a function', () => {
    expect(weatherUI).toBeInstanceOf(Function);
  });
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    weatherUI(el);
  });
  it('Проверяем интерфейс', () => {
    expect(el.querySelector('input')).toBeTruthy();
    expect(el.querySelectorAll('input').length).toBe(1);
    expect(el.querySelector('button')).toBeTruthy();
    expect(el.querySelector('button').innerHTML).toBe('Ищем');
    expect(el.querySelector('answer')).toBeTruthy();
  });
});
