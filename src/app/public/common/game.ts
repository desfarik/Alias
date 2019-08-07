import {ITeam, Team} from "./team";
import {DictionaryService} from "./service/dictionary.service";


export class Game {
  public teams: Team[];
  public words: string[];
  public duration: number;
  public pointCount: number;
  public currentTeam: Team;

  constructor(game: IGame) {
    this.words = game.words && DictionaryService.getWords(game.dictionaryName);
    this.duration = game.duration;
    this.pointCount = game.pointCount;
    this.teams = game.teams.map(team => new Team(team));
    this.currentTeam = game.currentTeam && new Team(game.currentTeam);
  }

  public setCurrentTeam(team: Team): void {
    this.currentTeam = team;
  }
}

export interface IGame {
  dictionaryName: string;
  words?: string[];
  teams: ITeam[];
  duration: number;
  pointCount: number;
  currentTeam?: ITeam;
}
