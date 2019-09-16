import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public hasGame = !!localStorage.getItem('game');

  ngOnInit() {
  }

}
