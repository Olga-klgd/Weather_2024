/* eslint-disable no-undef */
import { circleRadiusUI } from './circleRadiusUI';

describe('circleRadiusUI', () => {
  it('should be a function', () => {
    expect(circleRadiusUI).toBeInstanceOf(Function);
  });
  let el;
  beforeEach(() => {
    el = document.createElement('div');
    circleRadiusUI(el);
  });
  it('Проверяем интерфейс', () => {
    expect(el.querySelector('input')).toBeTruthy();
    expect(el.querySelector('button')).toBeTruthy();
    expect(el.querySelector('button').innerHTML).toBe('Считаем');
    expect(el.querySelector('answer')).toBeTruthy();
  });
});
