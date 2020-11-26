import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import {FormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { GamesComponent } from './games/games.component';
import { AboutComponent } from './about/about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    CartComponent,
    GamesComponent,
    AboutComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
