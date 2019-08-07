import {Routes} from "@angular/router";
import {MainComponent} from "./public/main/main.component";
import {CreateNewGameComponent} from "./public/create-new-game/create-new-game.component";
import {PreGameRoundComponent} from "./public/pre-game-round/pre-game-round.component";
import {GameRoundComponent} from "./public/game-round/game-round.component";

export const AppRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'create-new-game',
    component: CreateNewGameComponent
  },
  {
    path: 'pre-game-round',
    component: PreGameRoundComponent
  },
  {
    path: 'game-round',
    component: GameRoundComponent
  },
  {
    path: '**',
    component: MainComponent,
  }
];
