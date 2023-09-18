import { FirstUpperCasePipe } from './first-upper-case.pipe';

describe('FirstUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new FirstUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
