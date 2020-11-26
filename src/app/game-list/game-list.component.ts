import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';
import { Game } from './Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games:Game[] = [
    {
      "nombre": "Call of duty",
      "categoria": "Accion",
      "precio": 15000,
      "stock": 15,
      "image": "assets/img/CallOfDuty.jfif",
      "oferta": false,
      quantity:0,
    },
    {
      "nombre": "Wow",
      "categoria": "MMORPG",
      "precio": 3500,
      "stock": 50,
      "image": "assets/img/Wow.jpg",
      "oferta": true,
      quantity:0,
    },
    {
      "nombre": "Age of empires 3",
      "categoria": "Estrategia",
      "precio": 500,
      "stock": 1,
      "image": "assets/img/AoE3.jpg",
      "oferta": false,
      quantity:0,
    },
    {
      "nombre": "S.W.A.T",
      "categoria": "Accion",
      "precio": 200,
      "stock": 0,
      "image": "assets/img/SWAT.jpg",
      "oferta": false,
      quantity:0,
    },
  ]
  cart: GameCartService;
    
  constructor(private Game: GameCartService) { 
  }

  ngOnInit(): void {
  }

  addToCart(game):void {
    this.cart.addToCart(game);
  }

}
