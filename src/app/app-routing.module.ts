import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsGameComponent } from './_components/cards-game/cards-game.component';

const routes: Routes = [
  { path: "cardsGame", component: CardsGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
