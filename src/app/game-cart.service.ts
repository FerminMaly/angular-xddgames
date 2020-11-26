import { Injectable } from '@angular/core';
import { Game } from './game-list/Game';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  shopList: Game[] = [];

  constructor() { }

  addToCart(game: Game) {
    this.shopList.push(game);
    console.log(this.shopList.length);
  }


  
}
