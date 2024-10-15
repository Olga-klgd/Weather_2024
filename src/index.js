/* eslint-disable import/no-named-as-default */
import circleRadiusUI from './circleRadiusUI.js';

export default function createContainer(id) {
  const container = document.createElement('div');
  container.id = id;
  document.body.append(container);
  return container;
}

circleRadiusUI(createContainer('circleRadiusUI'));
