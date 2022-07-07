import chai from 'chai';
import calculate from '../calculator/logic/calculate';

// https://github.com/chaijs/chai/issues/469
chai.config.truncateThreshold = 0;
const { expect } = chai;

// write a function that will get the value of pressed button

function pressedButtons(buttons) {
  const value = {};
  buttons.forEach((button) => {
    Object.assign(value, calculate(value, button));
  });
  // no need to distinguish between null and undefined values
  Object.keys(value).forEach((key) => {
    if (value[key] === null) {
      delete value[key];
    }
  });
  return value;
}

function expectedButtons(buttons, expectations) {
  expect(pressedButtons(buttons)).to.deep.equal(expectations);
}
function test(buttons, expectations, only = false) {
  const func = only ? it.only : it;
  func(`buttons ${buttons.join('')}->${JSON.stringify(expectations)}`, () => {
    expectedButtons(buttons, expectations);
  });
}
describe('checking for buttons AC,x,-,+,%', () => {
  test(['6'], { next: '6' });
  test(['6', '6'], { next: '66' });
  test(['6', '+', '6'], {
    next: '6',
    total: '6',
    operation: '+',

  });
  test(['6', '-', '6'], {
    next: '6',
    total: '6',
    operation: '-',

  });
  test(['6', '+', '6', '='], {
    total: '12',

  });

  // when "=" is given little information
  test(['6', '+', '=', '6', '='], {
    total: '12',
  });

  // testing operation
  test(['+', '6'], {
    next: '6',
    operation: '+',
  });
  test(['-', '6'], {
    next: '6',
    operation: '-',
  });

  test(['x', '.', '6'], {
    next: '0.6',
    operation: 'x',
  });
  test(['.', '4', '-', '.', '2'], {
    total: '0.4',
    next: '0.2',
    operation: '-',
  });

  // should clear the operation when AC is pressed
  test(['1', '.', '6', 'AC'], {});
  test(['4', '.', '89', '6', 'AC'], {});
  test(['2', 'x', '2', '%'], {
    total: '4',
    operation: '%',
  });
});
