import { Cash } from './cash.model';

describe('Cash', () => {
  it('should create an instance', () => {
    expect(new Cash(5,1)).toBeTruthy();
  });
});
