import { Component, OnInit } from '@angular/core';
import { MachineData } from 'src/app/models/machine-data.model';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit{
  balance = 0;
  constructor(private calculatorService: CalculatorService){}

  ngOnInit(): void {
    this.calculatorService.cashDataEmitter.subscribe(machineData =>{
      this.balance = machineData.paidAmount;
    })

    
  }
}
