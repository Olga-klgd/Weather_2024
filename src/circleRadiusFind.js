export function circleRadiusFind(radius) {
  const square = (Math.PI * radius ** 2) / 2;
  const dlina = 2 * Math.PI * radius;
  console.log(square, dlina);
  const answerResult = `Длина окружности: ${dlina}, площадь окружности: ${square}`;
  return answerResult;
}
export default circleRadiusFind;
