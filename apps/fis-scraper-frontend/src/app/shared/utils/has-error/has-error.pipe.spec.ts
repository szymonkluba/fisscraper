import { HasErrorPipe } from './has-error.pipe';

describe('HasErrorPipe', () => {
  it('create an instance', () => {
    const pipe = new HasErrorPipe();
    expect(pipe).toBeTruthy();
  });
});
