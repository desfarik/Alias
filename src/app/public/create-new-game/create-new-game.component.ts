import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from '../common/game';
import {GameService} from '../common/service/game.service';
import {Router} from '@angular/router';
import {SettingsComponent} from './components/settings/settings.component';

@Component({
  selector: 'app-create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.scss']
})
export class CreateNewGameComponent implements OnInit {
  @ViewChild(SettingsComponent, {static: false})
  private settings: SettingsComponent;

  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
  }

  public createNewGame(): void {
    const newGame = new Game({
      dictionaryName: 'dictionary',
      teams: [{icon: 'icon', name: 'team1'}, {icon: 'icon', name: 'team2'}],
      duration: this.settings.time,
      pointCount: this.settings.wordCount
    });
    this.gameService.createNewGame(newGame);
    this.router.navigate(['/pre-game-round']);
  }

}
