import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-input-amounts',
  templateUrl: './input-amounts.component.html',
  styleUrls: ['./input-amounts.component.scss']
})
export class InputAmountsComponent implements OnInit {
  cashBack = 0;
  progressbarValue = 0;
  constructor(private calculatorService: CalculatorService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.calculatorService.cashDataEmitter.subscribe(machineData => {
      this.cashBack = machineData.cashBack;
      if(machineData.drinkServed){
        interval(100)
        .pipe(takeUntil(timer(1200)))
        .subscribe({
          next: (v) => { this.progressbarValue+=10;},
          complete: () => {machineData.drinkServed = false;}
      });
      }
    })

  
  }

  addAmount(amount: number) {
    this.progressbarValue = 0;
    this.calculatorService.addAmount(amount);
  }
  nextDrink() {
    this.progressbarValue = 0;
    this.calculatorService.resetAmounts();
  }

  resetMachine() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.progressbarValue = 0;
        this.calculatorService.resetMachine();
      }
    });
  }

}
