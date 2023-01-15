import { CashContainer } from "./cash-container.model";


export class MachineData {
    constructor(public paidAmount:number,public cashBack:number, public cashContainer:CashContainer, public drinkServed: boolean){}
 }
