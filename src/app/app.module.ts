import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './route-config';
import {MainComponent} from './public/main/main.component';
import {CreateNewGameComponent} from './public/create-new-game/create-new-game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDividerModule, MatIconModule, MatRadioModule, MatRippleModule, MatToolbarModule} from '@angular/material';
import {DictionaryComponent} from './public/create-new-game/components/dictionary/dictionary.component';
import {TeamSelectComponent} from './public/create-new-game/components/team/team-select.component';
import {SettingsComponent} from './public/create-new-game/components/settings/settings.component';
import {SecondsPipe} from './public/create-new-game/components/settings/pipes/seconds.pipe';
import {MinutesPipe} from './public/create-new-game/components/settings/pipes/minutes.pipe';
import {PreGameRoundComponent} from './public/pre-game-round/pre-game-round.component';
import {FormsModule} from '@angular/forms';
import {GameRoundComponent} from './public/game-round/game-round.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ProgressBarComponent} from './public/game-round/components/progress-bar/progress-bar.component';
import {ProgressTimerComponent} from './public/game-round/components/progress-timer/progress-timer.component';
import {SelectTeamDialogComponent} from './public/create-new-game/components/team/select-team.dialog/select-team.dialog.component';
import {RoundResultComponent} from './public/round-result/round-result.component';
import {StartCasePipe} from './public/round-result/pipes/start-case.pipe';

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
    PreGameRoundComponent,
    GameRoundComponent,
    ProgressBarComponent,
    ProgressTimerComponent,
    SelectTeamDialogComponent,
    RoundResultComponent,
    StartCasePipe,
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatRippleModule,
    MatRadioModule,
    DragDropModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
