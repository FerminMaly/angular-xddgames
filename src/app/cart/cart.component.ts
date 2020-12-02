import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { GameCartService } from '../game-cart.service';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shopList$: Observable<Game[]>;

  constructor(private Game: GameCartService) {
    this.shopList$ = Game.shopList.asObservable();
   }

  ngOnInit(): void {

  }

}
