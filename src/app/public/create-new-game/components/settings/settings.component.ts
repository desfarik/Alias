import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public time = 60;
  public wordCount = 100;

  constructor() {
  }

  ngOnInit() {
  }

  public updateTime(value) {
    if (this.time === 30 && value < 0) {
      return;
    }
    if (this.time === 600 && value > 0) {
      return;
    }
    this.time += value;
  }

  public updateWordCount(value) {
    if (this.wordCount === 10 && value < 0) {
      return;
    }
    if (this.wordCount === 300 && value > 0) {
      return;
    }
    this.wordCount += value;
  }
}
