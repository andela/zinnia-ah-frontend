import { checkAllEmptyInputs } from './formValidator';

describe('checkAllEmptyInputs', () => {
  it('receives user credentials', () => {
    expect(typeof checkAllEmptyInputs).toBe('function');
  });
});
