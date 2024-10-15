// Пользователь вводит число R. Написать программу,
// которая выведет в консоль длину окружности и
// площадь круга с радиусом R.
import { circleRadiusFind } from './circleRadiusFind.js';

export function circleRadiusUI(el) {
  const input = document.createElement('input');
  input.type = 'number';
  el.append(input);

  const button = document.createElement('button');
  button.innerHTML = 'Считаем';
  el.append(button);

  const answer = document.createElement('answer');
  answer.innerHTML = '<div>Задайте число</div>';
  el.append(answer);

  button.addEventListener('click', () => {
    answer.innerHTML = `<div>${circleRadiusFind(input.value)}</div>`;
  });
}
export default circleRadiusUI;
