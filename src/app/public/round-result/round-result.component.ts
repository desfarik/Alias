import {Component, OnInit} from '@angular/core';
import {GameService} from '../common/service/game.service';
import {Word} from '../game-round/game-round.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-round-result',
  templateUrl: './round-result.component.html',
  styleUrls: ['./round-result.component.scss']
})
export class RoundResultComponent implements OnInit {

  constructor(public gameService: GameService, public router: Router) {
  }

  public words: Word[];

  ngOnInit() {
    this.words = this.gameService.game.finishedRoundWords;
  }

  public finish(): void {
    this.gameService.finishRound(this.calculatePoints());
    this.router.navigate(['/pre-game-round']);
  }

  public calculatePoints() {
    return this.words.reduce((previousValue, currentValue) => {
      if (currentValue.done) {
        previousValue += 1;
      } else if (currentValue.done === false) {
        previousValue -= 1;
      }
      return previousValue;
    }, 0);
  }
}
