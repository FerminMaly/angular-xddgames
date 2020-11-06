import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  Game = {
    "nombre": "Call of duty",
    "categoria": "Accion",
    "precio": 15.000,
    "stock": 15,
    "image": "assets/img/CallOfDuty.jfif"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
