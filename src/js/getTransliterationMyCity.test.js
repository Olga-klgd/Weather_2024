/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-undef */
import { getTransliterationMyCity } from './getTransliterationMyCity';

describe('getTransliterationMyCity', () => {
  it('Проверяем преобразование латиницы в кириллицу', () => {
    expect(getTransliterationMyCity('Moscow')).toBe('Москва');
    expect(getTransliterationMyCity('Kaliningrad')).toBe('Калининград');
  });
});
