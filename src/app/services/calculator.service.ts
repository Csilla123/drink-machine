import { Injectable } from '@angular/core';
import { CashContainer } from '../models/cash-container.model';
import { Cash } from '../models/cash.model';
import { Drink } from '../models/drink.model';
import { Subject } from 'rxjs';
import { MachineData } from '../models/machine-data.model';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private cashContainer: CashContainer = CashContainer.getContainer();
  private machineData = new MachineData(0, 0, this.cashContainer,false);
  public cashDataEmitter = new Subject<MachineData>();

  sendInitialData() {
    this.cashDataEmitter.next(this.machineData);
  }

  addAmount(amount: number) {
    this.machineData.cashBack = 0;
    this.cashContainer.pushCash(new Cash(amount, 1));
    this.machineData.paidAmount += amount;
    this.cashDataEmitter.next(this.machineData);
  }

  getDrink(drink: Drink): boolean {
    this.machineData.cashBack = 0;
    if (drink.cost <= this.machineData.paidAmount) {
      if (this.machineData.paidAmount - drink.cost > 0) {
        const cashBack = this.cashContainer.pullCash(this.machineData.paidAmount - drink.cost);
        this.machineData.paidAmount = this.machineData.paidAmount - drink.cost - cashBack;
        this.machineData.cashBack = cashBack;
        this.machineData.drinkServed = true;
        this.cashDataEmitter.next(this.machineData);
      } else {
        this.machineData.paidAmount = 0;
        this.machineData.drinkServed = true;
        this.cashDataEmitter.next(this.machineData);
      }
      return true;
    } else {
      return false;
    }
  }

  isPositiveBalance(): boolean {
    return this.machineData.paidAmount > 0
  }

  resetAmounts() {
    this.machineData.paidAmount = 0;
    this.machineData.cashBack = 0;
    this.cashDataEmitter.next(this.machineData);
  }

  resetMachine() {
    this.cashContainer.reset();
    this.machineData.paidAmount = 0;
    this.machineData.cashBack = 0;
    this.cashDataEmitter.next(this.machineData);
  }

}
