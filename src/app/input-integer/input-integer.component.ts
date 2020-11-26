import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../game-list/Game';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Input()
  max: number;
  ngOnInit(): void {
  }
  upQuantity(): void{
    if (this.quantity < this.max)
      this.quantity++;
  }

  downQuantity(): void{
    if(this.quantity > 0)
      this.quantity--;
  }

  changeQuantity(event): void {
    if (event.key !=0,1,2,3,4,5,6,7,8,9)
      console.log(event.key);
  }
}
