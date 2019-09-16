import {Component, Inject, OnInit} from '@angular/core';
import {GameService} from "../common/service/game.service";
import {Team} from "../common/team";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material";
import {MatDialog, MatDialogRef} from "@angular/material";
import {WinnerDialogComponent} from "./winner-dialog/winner.dialog.component";
import {Game} from "../common/game";

@Component({
  selector: 'app-pre-game-round',
  templateUrl: './pre-game-round.component.html',
  styleUrls: ['./pre-game-round.component.scss']
})
export class PreGameRoundComponent {
  public nextTeam: Team;
  public newRound: boolean;
  public extraRound: boolean = false;
  public canStartNewGame: boolean = false;

  constructor(public gameService: GameService, private router: Router, public dialog: MatDialog) {
    this.nextTeam = this.gameService.game.teams.find(team => !team.played);
    this.newRound = this.gameService.game.teams.every(team => !team.played);
    if (this.newRound) {
      const winnerTeams = this.gameService.game.teams.filter(team => team.points >= this.gameService.game.pointCount);
      if (winnerTeams.length === 1) {
        this.openDialog(winnerTeams[0].name);
        this.canStartNewGame = true;
      } else if (winnerTeams.length > 1) {
        this.extraRound = true;
      }
    }
  }

  // TODO fix it
  public hardSelectTeam(team: Team) {
    if (!team.played && team !== this.nextTeam) {
      this.nextTeam = team;
    }
  }

  public startGame() {
    this.gameService.game.setCurrentTeam(this.nextTeam);
    this.gameService.save();
    if (this.gameService.game.teams.every(team => team.roundPoints !== undefined)) {
      this.gameService.game.teams.forEach(team => team.roundPoints = undefined);
      this.gameService.save();
    }
    this.router.navigate(['/game-round']);
  }

  public startNewGame() {
    const newGame = new Game({
      dictionaryName: 'dictionary',
      teams: this.gameService.game.teams.map(team => new Team({name: team.name, icon: team.icon})),
      duration: this.gameService.game.duration,
      pointCount: this.gameService.game.pointCount
    });
    this.gameService.createNewGame(newGame);
    this.gameService.game.setCurrentTeam(this.nextTeam);
    this.gameService.save();
    this.router.navigate(['/game-round']);
  }

  openDialog(name): void {
    this.dialog.open(WinnerDialogComponent, {
      data: {name: name}
    });
  }

  public goBack() {
    window.history.back();
  }
}
