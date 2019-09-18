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
  public teams: Team[] = [];
  public oldGame: Game;

  constructor(public gameService: GameService, private router: Router, public dialog: MatDialog) {
    this.nextTeam = this.gameService.game.teams.find(team => !team.played);
    this.newRound = this.gameService.game.teams.every(team => !team.played);
    this.teams = this.gameService.game.teams;
    this.oldGame = this.gameService.game;
    if (this.newRound) {
      const winnerTeams = this.gameService.game.teams.filter(team => team.points >= this.gameService.game.pointCount);
      if (winnerTeams.length === 1) {
        this.openDialog(winnerTeams[0].name);
        this.canStartNewGame = true;
        this.gameService.endGame();
      } else if (winnerTeams.length > 1) {
        if (winnerTeams.every(team => team.points === this.gameService.game.teams[0].points)) {
          this.extraRound = true;
        } else {
          const maxPoint = Math.max(...winnerTeams.map(team => team.points));
          const winnerTeam = winnerTeams.find(team => team.points === maxPoint);
          this.openDialog(winnerTeam.name);
          this.canStartNewGame = true;
          this.gameService.endGame();
        }
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
      teams: this.oldGame.teams.map(team => new Team({name: team.name})),
      duration: this.oldGame.duration,
      pointCount: this.oldGame.pointCount
    });
    this.gameService.createNewGame(newGame);
    this.gameService.game.setCurrentTeam(this.nextTeam);
    this.gameService.save();
    this.router.navigate(['/game-round']);
  }

  openDialog(name): void {
    this.dialog.open(WinnerDialogComponent, {
      data: {name: name},
      autoFocus: false
    });
  }

  public goBack() {
    window.history.back();
  }
}
