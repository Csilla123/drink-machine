import { Slot } from './slot.model';

describe('Slot', () => {
  it('should create an instance', () => {
    expect(new Slot("test",1,1)).toBeTruthy();
  });
});
