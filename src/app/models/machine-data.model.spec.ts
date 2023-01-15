import { MachineData } from './machine-data.model';

describe('MachineData', () => {
  it('should create an instance', () => {
    expect(new MachineData(0,0,<any>{},false)).toBeTruthy();
  });
});
