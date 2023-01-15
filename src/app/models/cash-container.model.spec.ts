import { CashContainer } from './cash-container.model';

describe('CashContainer', () => {
  const cashContainer = CashContainer.getContainer();
  it('should create an instance', () => {
    expect(cashContainer).toBeTruthy();
  });

  it('reset should reset the container to its initial state', () => {
    cashContainer.pushCash({unit:1000,count:1});
    expect(cashContainer.bigContainer.amount).toEqual(1000);
    cashContainer.reset();
    expect(cashContainer.bigContainer.amount).toEqual(0);
  });

  it('pushCash should push the amount to big container if the cash unit is bigger than 100', () => {
    cashContainer.pushCash({unit:200,count:1});
    expect(cashContainer.bigContainer.amount).toEqual(200);
    cashContainer.pushCash({unit:500,count:1});
    expect(cashContainer.bigContainer.amount).toEqual(700);
    cashContainer.pushCash({unit:1000,count:1});
    expect(cashContainer.bigContainer.amount).toEqual(1700);
    cashContainer.reset();
  });

  it('pushCash should push the amount to slots if the cash unit is less or equal 100 and the slot is not filled with ten coins', () => {
    cashContainer.slots.forEach(slot => slot.count = 3);
    cashContainer.pushCash({unit:100,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 100)?.count).toEqual(4);
    cashContainer.pushCash({unit:50,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 50)?.count).toEqual(4);
    cashContainer.pushCash({unit:20,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 20)?.count).toEqual(4);
    cashContainer.pushCash({unit:10,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 10)?.count).toEqual(4);
    cashContainer.pushCash({unit:5,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 5)?.count).toEqual(4);
    cashContainer.reset();
  });

  it('pushCash should push the amount to big container if the cash unit is less or equal 100 and the slot is filled with ten coins', () => {
    cashContainer.pushCash({unit:100,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 100)?.count).toEqual(10);
    cashContainer.pushCash({unit:50,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 50)?.count).toEqual(10);
    cashContainer.pushCash({unit:20,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 20)?.count).toEqual(10);
    cashContainer.pushCash({unit:10,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 10)?.count).toEqual(10);
    cashContainer.pushCash({unit:5,count:1});
    expect(cashContainer.slots.find(slot => slot.cashUnit === 5)?.count).toEqual(10);
    expect(cashContainer.bigContainer.amount).toEqual(185);
    cashContainer.reset();
  });

  it('pullCash should pull the coins from slots if the slots contain more than 3 coins', () => {
    cashContainer.pullCash(100);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 100)?.count).toEqual(9);
    cashContainer.pullCash(50);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 50)?.count).toEqual(9);
    cashContainer.pullCash(20);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 20)?.count).toEqual(9);
    cashContainer.pullCash(10);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 10)?.count).toEqual(9);
    cashContainer.pullCash(5);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 5)?.count).toEqual(9);
    expect(cashContainer.bigContainer.amount).toEqual(0);
    cashContainer.reset();
  });

  it('pullCash should should not pull coins if the slots contain 3 coins', () => {
    cashContainer.slots.forEach(slot => slot.count = 3);
    cashContainer.pullCash(100);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 100)?.count).toEqual(3);
    cashContainer.pullCash(50);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 50)?.count).toEqual(3);
    cashContainer.pullCash(20);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 20)?.count).toEqual(3);
    cashContainer.pullCash(10);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 10)?.count).toEqual(3);
    cashContainer.pullCash(5);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 5)?.count).toEqual(3);
    expect(cashContainer.bigContainer.amount).toEqual(0);
    cashContainer.reset();
  });

  it('pullCash should give back 900Ft if the slots are filled', () => {
    cashContainer.pullCash(900);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 100)?.count).toEqual(3);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 50)?.count).toEqual(6);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 20)?.count).toEqual(10);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 10)?.count).toEqual(10);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 5)?.count).toEqual(10);
    expect(cashContainer.bigContainer.amount).toEqual(0);
    cashContainer.reset();
  });

  it('pullCash should  not give back 900Ft if the slots are not filled enough', () => {
    const coin100 =cashContainer.slots.find(slot => slot.cashUnit === 100);
    if(coin100){
      coin100.count = 3;
    }
    const coin50 =cashContainer.slots.find(slot => slot.cashUnit === 50);
    if(coin50){
      coin50.count = 6;
    }
    const  moneyTakenOut =   cashContainer.pullCash(900);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 100)?.count).toEqual(3);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 50)?.count).toEqual(3);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 20)?.count).toEqual(3);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 10)?.count).toEqual(3);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 5)?.count).toEqual(3);
    expect(moneyTakenOut).toEqual(395);
    expect(cashContainer.bigContainer.amount).toEqual(0);
    cashContainer.reset();
  });

  it('pullCash should  not give back 900Ft if the slots are not filled enough', () => {
    cashContainer.slots.forEach(slot => slot.count = 4);
    const  moneyTakenOut =   cashContainer.pullCash(900);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 100)?.count).toEqual(3);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 50)?.count).toEqual(3);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 20)?.count).toEqual(3);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 10)?.count).toEqual(3);
    expect(cashContainer.slots.find(slot => slot.cashUnit === 5)?.count).toEqual(3);
    expect(moneyTakenOut).toEqual(185);
    expect(cashContainer.bigContainer.amount).toEqual(0);
    cashContainer.reset();
  });
});
