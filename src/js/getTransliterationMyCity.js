/* eslint-disable linebreak-style */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable linebreak-style */
export function getTransliterationMyCity(city) {
  const transliterationMap = {
    A: 'А',
    B: 'Б',
    C: 'Ц',
    D: 'Д',
    E: 'Е',
    F: 'Ф',
    G: 'Г',
    H: 'Х',
    I: 'И',
    J: 'Й',
    K: 'К',
    L: 'Л',
    M: 'М',
    N: 'Н',
    O: 'О',
    P: 'П',
    Q: 'К',
    R: 'Р',
    S: 'С',
    T: 'Т',
    U: 'У',
    V: 'В',
    W: 'В',
    X: 'КС',
  };

  return city
    .split('')
    .map((char) => transliterationMap[char.toUpperCase()] || char)
    .join('');
}
