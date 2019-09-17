import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from '../common/game';
import {GameService} from '../common/service/game.service';
import {Router} from '@angular/router';
import {SettingsComponent} from './components/settings/settings.component';
import {TeamSelectComponent} from './components/team/team-select.component';
import {DictionaryComponent} from './components/dictionary/dictionary.component';

@Component({
  selector: 'app-create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.scss']
})
export class CreateNewGameComponent implements OnInit {
  @ViewChild(SettingsComponent, {static: true})
  public settings: SettingsComponent;
  @ViewChild(TeamSelectComponent, {static: true})
  public teamComponent: TeamSelectComponent;
  @ViewChild(DictionaryComponent, {static: true})
  public dictionaryComponent: DictionaryComponent;

  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem(GameService.GAME_KEY)) {
      this.settings.time = this.gameService.game.duration;
      this.settings.wordCount = this.gameService.game.pointCount;
      this.dictionaryComponent.selectedDictionary = this.gameService.game.dictionaryName;
      this.teamComponent.selectedTeams = new Set(this.gameService.game.teams.map(team => team.name));
    }
  }

  public createNewGame(): void {
    const newGame = new Game({
      dictionaryName: this.dictionaryComponent.selectedDictionary,
      teams: this.teamComponent.getTeams(),
      duration: this.settings.time,
      pointCount: this.settings.wordCount
    });
    this.gameService.createNewGame(newGame);
    this.router.navigate(['/pre-game-round']);
  }

  public isValid(): boolean {
    return !!this.dictionaryComponent.selectedDictionary && this.teamComponent.selectedTeams.size >= 2;
  }

}
