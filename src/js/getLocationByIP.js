/* eslint-disable linebreak-style */
export async function getLocationByIP() {
  try {
    const response = await fetch('http://ip-api.com/json/');
    if (!response.ok) throw new Error('Не удалось получить данные о геолокации');
    const data = await response.json();
    return data.city;
  } catch (error) {
    throw new Error(`Ошибка: ${error.message}`);
  }
}
export default getLocationByIP;
