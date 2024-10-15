/* eslint-disable no-mixed-operators */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* eslint-disable func-names */
/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
(() => {
  !(function (e) {
    const n = document.createElement('input');
    (n.type = 'number'), e.append(n);
    const t = document.createElement('button');
    (t.innerHTML = 'Считаем'), e.append(t);
    const c = document.createElement('answer');
    (c.innerHTML = '<div>Задайте число</div>'),
    e.append(c),
    t.addEventListener('click', () => {
      c.innerHTML = `<div>${(function (e) {
        const n = (Math.PI * e ** 2) / 2;
        const t = 2 * Math.PI * e;
        return (
          console.log(n, t),
          `Длина окружности: ${t}, площадь окружности: ${n}`
        );
      }(n.value))}</div>`;
    });
  }(
    (function () {
      const e = document.createElement('div');
      return (e.id = 'circleRadiusUI'), document.body.append(e), e;
    }()),
  ));
})();
