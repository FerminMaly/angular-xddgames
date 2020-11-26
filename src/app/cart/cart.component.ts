import { Component, OnInit } from '@angular/core';
import { GameCartService } from '../game-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private Game: GameCartService) { }

  ngOnInit(): void {
  }

}
