import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'games',
    pathMatch:'full',
  },
  {
    path:'games',
    component:GamesComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
