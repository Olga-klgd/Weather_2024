const weatherApiKey = 'ff67773d96384e45a29113456242210';
// Используя API, находим json на сайте https://api.weatherapi.com по названию города
export async function findWeather(city) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}`,
  );
  const weatherJson = await res.json();
  return weatherJson;
}
