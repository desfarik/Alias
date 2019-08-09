import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input()
  public time: number;
  @Input()
  public gameStarted: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
