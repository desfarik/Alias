import {Routes} from "@angular/router";
import {MainComponent} from "./public/main/main.component";
import {CreateNewGameComponent} from "./public/create-new-game/create-new-game.component";

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
    path: '**',
    component: MainComponent,
  }
];
