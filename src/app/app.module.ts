import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './route-config';
import {MainComponent} from './public/main/main.component';
import {CreateNewGameComponent} from './public/create-new-game/create-new-game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatDividerModule,
  MatIconModule,
  MatOptionModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
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
import {RoundResultComponent} from './public/round-result/round-result.component';
import {StartCasePipe} from './public/round-result/pipes/start-case.pipe';
import {WinnerDialogComponent} from './public/pre-game-round/winner-dialog/winner.dialog.component';
import {GameService} from "./public/common/service/game.service";

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
    RoundResultComponent,
    StartCasePipe,
    WinnerDialogComponent
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
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
  entryComponents: [WinnerDialogComponent]
})
export class AppModule {
}
