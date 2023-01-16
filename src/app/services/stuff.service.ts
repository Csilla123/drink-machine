import { Injectable } from '@angular/core';
import { Drink } from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class StuffService {
  private _drinks: Drink[] = []
  constructor() {
    this._drinks.push({
      name: "black",
      src: "./assets/black.png",
      cost: 10
    });
    this._drinks.push({
      name: "latte",
      src: "./assets/latte.png",
      cost: 20
    });
    this._drinks.push({
      name: "cappuccino",
      src: "./assets/cappuccino.png",
      cost: 30
    });
    this._drinks.push({
      name: "americano",
      src: "./assets/americano.png",
      cost: 40
    });
    this._drinks.push({
      name: "espresso",
      src: "./assets/espresso.png",
      cost: 50
    });
    this._drinks.push({
      name: "doppio",
      src: "./assets/doppio.png",
      cost: 60
    });
    this._drinks.push({
      name: "cortado",
      src: "./assets/cortado.png",
      cost: 70
    });
    this._drinks.push({
      name: "redeye",
      src: "./assets/redeye.png",
      cost: 80
    });
    this._drinks.push({
      name: "lungo",
      src: "./assets/lungo.png",
      cost: 90
    });
    this._drinks.push({
      name: "macchiato",
      src: "./assets/macchiato.png",
      cost: 100
    });
  }

  get drinks(): Drink[] {
    return [...this._drinks];
  }
}
