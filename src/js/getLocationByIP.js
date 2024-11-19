/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// Определяем город пользователя по IP
export async function getLocationByIP() {
  const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
  const result = await res.json();
  const myCity = result.city;
  console.log('город', myCity);
  return myCity;
}
