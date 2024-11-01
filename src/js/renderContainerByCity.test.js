/* eslint-disable no-undef */
import { renderContainerByCity } from './renderContainerByCity.js'; // Adjust the import according to your file structure
import { findWeather } from './findWeather.js';
// Mock the dependencies
jest.mock('./findWeather.js');
jest.mock('./showWeather.js');

describe('renderContainerByCity', () => {
  it('Вызывается для Калининграда', async () => {
    const city = 'Калининград';
    findWeather.mockResolvedValue({ temp: 15 }); // Mocked response

    await renderContainerByCity(city);

    expect(findWeather).toHaveBeenCalledWith(city);
  });
});
