import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./route-config";
import {MainComponent} from './public/main/main.component';
import {CreateNewGameComponent} from './public/create-new-game/create-new-game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateNewGameComponent
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
