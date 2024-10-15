/* eslint-disable no-undef */
import { circleRadiusFind } from './circleRadiusFind';

describe('circleRadiusFind', () => {
  it('should be a function', () => {
    expect(circleRadiusFind).toBeInstanceOf(Function);
  });
});
describe('circleRadiusFind', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      radius: 1,
      answerResult:
        'Длина окружности: 6.283185307179586, площадь окружности: 1.5707963267948966',
    },
    {
      radius: 2,
      answerResult:
        'Длина окружности: 12.566370614359172, площадь окружности: 6.283185307179586',
    },
    {
      radius: 3,
      answerResult:
        'Длина окружности: 18.84955592153876, площадь окружности: 14.137166941154069',
    },
  ].forEach(({ radius, answerResult }) => {
    it(`Для радиуса '${radius}' '${answerResult}'`, () => {
      const answer = circleRadiusFind(radius);
      expect(answer).toBe(answerResult);
    });
  });
});
