import { Drink } from './drink.model';

describe('Drink', () => {
  it('should create an instance', () => {
    expect(new Drink("","",1)).toBeTruthy();
  });
});
