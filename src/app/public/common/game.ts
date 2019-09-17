import {ITeam, Team} from './team';
import {DictionaryService} from './service/dictionary.service';
import {Word} from '../game-round/game-round.component';


export class Game {
  public teams: Team[];
  public words: string[];
  public dictionaryName: string;
  public duration: number;
  public pointCount: number;
  public currentTeam: Team;
  public finishedRoundWords: Word[];

  constructor(game: IGame) {
    this.dictionaryName = game.dictionaryName;
    this.words = game.words || DictionaryService.getWords(game.dictionaryName);
    this.duration = game.duration;
    this.pointCount = game.pointCount;
    this.teams = game.teams.map(team => new Team(team));
    this.currentTeam = game.currentTeam && new Team(game.currentTeam);
    this.finishedRoundWords = game.finishedRoundWords ? game.finishedRoundWords.map(word => new Word(word)) : [];
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
  finishedRoundWords?: Word[];
}
