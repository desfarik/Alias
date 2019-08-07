import {Component, OnInit} from '@angular/core';
import {GameService} from "../common/service/game.service";
import {Team} from "../common/team";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pre-game-round',
  templateUrl: './pre-game-round.component.html',
  styleUrls: ['./pre-game-round.component.scss']
})
export class PreGameRoundComponent implements OnInit {
  public nextTeam: Team;

  constructor(public gameService: GameService, private router: Router) {
    this.nextTeam = this.gameService.game.teams.find(team => !team.played);
  }

  // TODO fix it
  public hardSelectTeam(team: Team) {
    if (team !== this.nextTeam) {
      this.nextTeam = team;
    }
  }

  public startGame() {
    this.gameService.game.setCurrentTeam(this.nextTeam);
    this.gameService.save();
    this.router.navigate(['/game-round']);
    // var audio = new Audio('/assets/audio.mp3');
    // audio.play();
    // setTimeout(() => {
    //   window.navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]);
    // }, 2000)
  }

  ngOnInit() {
  }

}
