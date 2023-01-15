import { Component,OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.scss']
})
export class SlotsComponent implements OnInit{
  coin5: number | undefined;
  coin10: number | undefined;
  coin20: number | undefined;
  coin50: number | undefined;
  coin100: number | undefined;
  containerAmount = 0;

  constructor(private calculatorService: CalculatorService){}

  ngOnInit(): void {
    this.calculatorService.cashDataEmitter.subscribe(machineData => {
      this.coin5 = machineData.cashContainer.slots.find(slot => slot.cashUnit === 5)?.count;
      this.coin10 = machineData.cashContainer.slots.find(slot => slot.cashUnit === 10)?.count;
      this.coin20 = machineData.cashContainer.slots.find(slot => slot.cashUnit === 20)?.count;
      this.coin50 = machineData.cashContainer.slots.find(slot => slot.cashUnit === 50)?.count;
      this.coin100 = machineData.cashContainer.slots.find(slot => slot.cashUnit === 100)?.count;
      this.containerAmount = machineData.cashContainer.bigContainer.amount;
    })
    this.calculatorService.sendInitialData();
  }
}
