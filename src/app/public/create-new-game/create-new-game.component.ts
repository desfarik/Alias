import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from '../common/game';
import {GameService} from '../common/service/game.service';
import {Router} from '@angular/router';
import {SettingsComponent} from './components/settings/settings.component';
import {TeamSelectComponent} from "./components/team/team-select.component";

@Component({
  selector: 'app-create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.scss']
})
export class CreateNewGameComponent implements OnInit {
  @ViewChild(SettingsComponent, {static: true})
  private settings: SettingsComponent;
  @ViewChild(TeamSelectComponent, {static: true})
  private teamComponent: TeamSelectComponent;

  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
  }

  public createNewGame(): void {
    if (this.teamComponent.selectedTeams.size < 2) {
      console.error('pidor');
      return;
    }
    const newGame = new Game({
      dictionaryName: 'dictionary',
      teams: this.teamComponent.getTeams(),
      duration: this.settings.time,
      pointCount: this.settings.wordCount
    });
    this.gameService.createNewGame(newGame);
    this.router.navigate(['/pre-game-round']);
  }

}
