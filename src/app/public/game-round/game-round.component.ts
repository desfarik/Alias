import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GameService} from '../common/service/game.service';
import {CdkDragEnd} from '@angular/cdk/drag-drop';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-round',
  templateUrl: './game-round.component.html',
  styleUrls: ['./game-round.component.scss']
})
export class GameRoundComponent implements OnInit {

  @ViewChild('flipContainer', {static: true})
  public flipContainer: ElementRef<HTMLDivElement>;
  public word: string;
  public doneCounter: number = 0;
  public skipCounter: number = 0;
  public gameStarted: boolean = false;
  public words: Word[] = [];

  constructor(public gameService: GameService, public router: Router) {
  }

  public finishRound() {
    console.log('finish');
    this.words.push(new Word({value: this.word}));
    this.gameService.game.finishedRoundWords = this.words;
    this.gameService.save();
    this.router.navigate(['/round-result']);
  }

  public startRound() {
    this.flipContainer.nativeElement.classList.add('flip');
    this.gameStarted = true;
  }

  public dragEnd(event: CdkDragEnd) {
    if (event.distance.y < 0) {
      this.doneCounter++;
      this.words.push(new Word({value: this.word, done: true}));
      console.log('done');
    } else if (event.distance.y > 0) {
      this.skipCounter++;
      this.words.push(new Word({value: this.word, done: false}));
      console.log('skip');
    }
    this.word = this.gameService.getNextWord();
  }

  ngOnInit() {
    this.gameService.game.duration = 10;
    this.gameService.shuffleWords();
    this.word = this.gameService.getNextWord();
  }

}

export class Word implements IWord {
  constructor(wordConfig: IWord) {
    this.done = wordConfig.done;
    this.value = wordConfig.value;
  }

  public done: boolean;
  public value: string;
}

export interface IWord {
  value: string;
  done?: boolean;
}
