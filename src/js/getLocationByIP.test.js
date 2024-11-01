/* eslint-disable no-undef */
import { getLocationByIP } from './getLocationByIP.js';

describe('getLocationByIP', () => {
  it('should be a function', () => {
    expect(getLocationByIP).toBeInstanceOf(Function);
  });
});
const mockMyIP = {
  organization:
    'AS62402 Munitsipalnoe kazennoe uchrezhdenie Tsentr informatsionno-kommunikatsionnykh tekhnologii',
  asn: 62402,
  area_code: '0',
  organization_name:
    'Munitsipalnoe kazennoe uchrezhdenie Tsentr informatsionno-kommunikatsionnykh tekhnologii',
  country_code: 'RU',
  country_code3: 'RUS',
  continent_code: 'EU',
  timezone: 'Europe/Kaliningrad',
  region: 'Kaliningrad Oblast',
  latitude: '54.705',
  city: 'Kaliningrad',
  accuracy: 20,
  longitude: '20.5105',
  ip: '176.113.114.254',
  country: 'Russia',
};
global.fetch = jest.fn().mockResolvedValue(mockMyIP);

describe('getLocationByIP', () => {
  let result;
  beforeEach(async () => {
    global.fetch.mockClear();
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockMyIP),
    });
    result = await getLocationByIP();
  });

  it('getLocationByIP returns promise', async () => {
    expect(fetch).toHaveBeenCalledWith('https://get.geojs.io/v1/ip/geo.json');
    expect(result).toEqual('Kaliningrad');
  });
});
