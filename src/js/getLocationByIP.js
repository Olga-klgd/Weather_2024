/* eslint-disable linebreak-style */
export async function getLocationByIP() {
  const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
  const result = await res.json();
  const myCity = result.city;
  // console.log(myCity);
  return myCity;
}
