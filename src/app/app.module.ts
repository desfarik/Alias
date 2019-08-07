import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./route-config";
import {MainComponent} from './public/main/main.component';
import {CreateNewGameComponent} from './public/create-new-game/create-new-game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDividerModule, MatIconModule, MatRippleModule, MatToolbarModule} from "@angular/material";
import {DictionaryComponent} from './public/create-new-game/components/dictionary/dictionary.component';
import {TeamSelectComponent} from './public/create-new-game/components/team/team-select.component';
import {SettingsComponent} from './public/create-new-game/components/settings/settings.component';
import { SecondsPipe } from './public/create-new-game/components/settings/pipes/seconds.pipe';
import { MinutesPipe } from './public/create-new-game/components/settings/pipes/minutes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateNewGameComponent,
    DictionaryComponent,
    TeamSelectComponent,
    SettingsComponent,
    SecondsPipe,
    MinutesPipe,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatRippleModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
