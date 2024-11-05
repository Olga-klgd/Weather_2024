// Определяем город пользователя по IP
export async function getLocationByIP() {
  const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
  const result = await res.json();
  const myCity = result.city;
  return myCity;
}
