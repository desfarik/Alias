import {Injectable} from '@angular/core';
import {Game, IGame} from "../game";

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
}
