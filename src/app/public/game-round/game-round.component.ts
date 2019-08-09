import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GameService} from "../common/service/game.service";
import {CdkDragDrop, CdkDragEnd} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-game-round',
  templateUrl: './game-round.component.html',
  styleUrls: ['./game-round.component.scss']
})
export class GameRoundComponent implements OnInit {

  @ViewChild("flipContainer", {static: true})
  public flipContainer: ElementRef<HTMLDivElement>;
  public word: string = 'bla';
  public doneCounter: number = 0;
  public skipCounter: number = 0;
  public gameStarted: boolean = false;

  constructor(public gameService: GameService) {
  }

  todo = [
    'Pick up groceries',
    'Fall asleep'
  ];

  done = [
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
  ];

  second = [
    'Get up',
    'Get to work',
    'Walk dog'
  ]

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
  }

  public startRound() {
    this.flipContainer.nativeElement.classList.add('flip');
    this.gameStarted = true;
  }

  public done2(event: CdkDragEnd) {
    console.log(event);
  }

  public dragEnd(event: CdkDragEnd) {
    if (event.distance.y < 0) {
      this.doneCounter++;
      console.log('done');
    } else if (event.distance.y > 0) {
      this.skipCounter++;
      console.log('skip');
    }
    this.word = 'bla' + event.distance.y;
  }

  ngOnInit() {
  }

}
