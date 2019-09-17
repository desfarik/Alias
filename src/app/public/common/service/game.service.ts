import {Injectable} from '@angular/core';
import {Game, IGame} from '../game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public static GAME_KEY = 'game';
  public game: Game;

  constructor() {
    this.game = this.getGameFromStorage();
  }


  public save(): void {
    localStorage.setItem(GameService.GAME_KEY, JSON.stringify(this.game));
  }

  private getGameFromStorage(): Game {
    const game = JSON.parse(localStorage.getItem(GameService.GAME_KEY)) as IGame;
    return game && new Game(game);
  }

  public createNewGame(newGame: Game): void {
    this.game = newGame;
    localStorage.setItem(GameService.GAME_KEY, JSON.stringify(newGame));
  }

  public shuffleWords(): void {
    for (let i = this.game.words.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.game.words[i], this.game.words[j]] = [this.game.words[j], this.game.words[i]];
    }
  }

  public getNextWord(): string {
    const index = Math.floor(Math.random() * this.game.words.length);
    const word = this.game.words[index];
    this.game.words.splice(index, 1);
    return word;
  }

  public finishRound(points: number): void {
    const currentTeam = this.game.teams.find((team) => team.name === this.game.currentTeam.name);
    if (currentTeam.played) {
      currentTeam.points -= currentTeam.roundPoints;
    }
    currentTeam.points += points;
    currentTeam.roundPoints = points;
    currentTeam.played = true;
    this.game.currentTeam = undefined;
    if (this.game.teams.every(team => team.played)) {
      this.game.teams.forEach(team => team.played = false);
    }
    this.save();
  }

  public endGame(): void {
    localStorage.removeItem(GameService.GAME_KEY);
    this.game = undefined;
  }
}
