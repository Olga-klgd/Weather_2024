const weatherApiKey = 'ff67773d96384e45a29113456242210';

export async function findWeather(city) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}`,
  );
  const weatherJson = await res.json();
  return weatherJson;
}
