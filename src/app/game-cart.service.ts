import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  constructor() {}

  private _shopList: Game [] = [];
  
  shopList: BehaviorSubject<Game[]> = new BehaviorSubject([]);


  

  addToCart(game: Game) {
    let item:Game = this._shopList.find((v1)=> v1.nombre = game.nombre);
    if (!item){
      this._shopList.push({...game}); 
    }
    else {
      item.quantity += game.quantity;
    }
    console.log(this._shopList);
    this.shopList.next(this._shopList);
  }


  
}
