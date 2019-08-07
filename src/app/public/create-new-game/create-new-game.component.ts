import {Component, OnInit} from '@angular/core';
import {Game} from "../common/game";
import {GameService} from "../common/service/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-new-game',
  templateUrl: './create-new-game.component.html',
  styleUrls: ['./create-new-game.component.scss']
})
export class CreateNewGameComponent implements OnInit {

  constructor(private gameService: GameService, private router: Router) {
  }

  ngOnInit() {
  }

  public createNewGame(): void {
    const newGame = new Game({
      dictionaryName: 'dictionary',
      teams: [{icon: 'icon', name: 'team1'}, {icon: 'icon', name: 'team2'}],
      duration: 90,
      pointCount: 100
    });
    this.gameService.createNewGame(newGame);
    this.router.navigate(['/pre-game-round'])
  }

}
