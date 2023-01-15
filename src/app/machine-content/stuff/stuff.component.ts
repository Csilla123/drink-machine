import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
import { StuffService } from 'src/app/services/stuff.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-stuff',
  templateUrl: './stuff.component.html',
  styleUrls: ['./stuff.component.scss']
})
export class StuffComponent implements OnInit{
drinks:any[] = [] 
panelOpenState = false;
constructor(private stuffService: StuffService,private calculatorService: CalculatorService,private snackBar: MatSnackBar){}
ngOnInit(): void {
  this.drinks = this.stuffService.drinks;
}

addDrink(drink:any){
  const canServeDrink = this.calculatorService.getDrink(drink);
  if(!canServeDrink){
    this.snackBar.open("The amount is not enough for the selected drink! Please insert more coins!","X",{
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 3000
    });
  } else if(this.calculatorService.isPositiveBalance()){
    this.snackBar.open("The coffee machine cannot give back coins! Please buy more coffe for the rest of your balance or call service!","X",{
      horizontalPosition: "center",
      verticalPosition: "top",
      duration: 3000
    });
  }
  
}

}
