import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'progress-timer',
  templateUrl: './progress-timer.component.html',
  styleUrls: ['./progress-timer.component.scss']
})
export class ProgressTimerComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  public time: number;
  @Input()
  public gameStarted: boolean;
  public counter: number;
  @ViewChild('timer', {static: false})
  public timer: ElementRef<HTMLDivElement>;

  private intervalId;


  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.gameStarted && changes.gameStarted.currentValue) {
      this.counter = this.time;
      this.intervalId = setInterval(() => this.onTick(), 1000);
    }
  }

  private onTick() {
    this.counter--;
    if (this.counter === 9) {
      this.timer.nativeElement.classList.add('warning');
    }
    if (this.counter === 0) {
      this.finishGame();
    }
    this.timer.nativeElement.classList.add('tick');
    setTimeout(() => this.timer.nativeElement.classList.remove('tick'), 200);
  }

  private finishGame() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
    console.log('end game');
    window.navigator.vibrate(1000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
