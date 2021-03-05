import { YesNOPipe } from './yes-no.pipe';

describe('YesNOPipe', () => {
  it('create an instance', () => {
    const pipe = new YesNOPipe();
    expect(pipe).toBeTruthy();
  });
});
