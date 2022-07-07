import operate from '../calculator/logic/operate';

describe('To test the functionality of addition', () => {
  test('should Add 10 and 77 to Equal 87', () => {
    const sum = operate('10', '77', '+');
    expect(sum).toBe('87');
  });

  test('should Add -10 and 77 to Equal 67', () => {
    const sum = operate('-10', '77', '+');
    expect(sum).toBe('67');
  });

  test('should Add 10 and -77 to Equal -67', () => {
    const sum = operate('10', '-77', '+');
    expect(sum).toBe('-67');
  });
});

describe('To test the functionality of subtraction', () => {
  test('should Subtract 10 and 1 to Equal 9', () => {
    const difference = operate('10', '1', '-');
    expect(difference).toBe('9');
  });

  test('should Subtract -10 and 1 to Equal -11', () => {
    const difference = operate('-10', '1', '-');
    expect(difference).toBe('-11');
  });

  test('should Subtract 10 and -1 to Equal 11', () => {
    const difference = operate('10', '-1', '-');
    expect(difference).toBe('11');
  });
});

describe('To test the functionality of multiplication', () => {
  test('should Multiply 5 and 6 to Equal 30', () => {
    const product = operate('5', '6', 'x');
    expect(product).toBe('30');
  });

  test('should Multiply -5 and 6', () => {
    const product = operate('-5', '6', 'x');
    expect(product).toBe('-30');
  });

  test('should Multiply 5 and -6 to Equal -30', () => {
    const product = operate('5', '-6', 'x');
    expect(product).toBe('-30');
  });
});

describe('To test the functionality of division', () => {
  test('should Divide 30 and 6 to Equal 6', () => {
    const quotient = operate('30', '6', '÷');
    expect(quotient).toBe('5');
  });

  test('should Divide -8 and 2 to Equal -4', () => {
    const quotient = operate('-8', '2', '÷');
    expect(quotient).toBe('-4');
  });

  test('should Divide 100 and 0 to Equal "Can\'t divide by 0."', () => {
    const quotient = operate('100', '0', '÷');
    expect(quotient).toBe("Can't divide by 0.");
  });
});

describe('To test the functionality of the Modulo Division', () => {
  test('should Mod 20 and 2 to Equal 0 ', () => {
    const remainder = operate('20', '2', '%');
    expect(remainder).toBe('0');
  });

  test('should Mod -12 and 5 to Equal -2', () => {
    const remainder = operate('-12', '5', '%');
    expect(remainder).toBe('-2');
  });

  test('should Mod 8 and 0 to Equal "Can\'t find modulo as can\'t divide by 0."', () => {
    const remainder = operate('8', '0', '%');
    expect(remainder).toBe("Can't find modulo as can't divide by 0.");
  });
});
