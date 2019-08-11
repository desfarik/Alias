export class Team {
  public name: string;
  public icon: string;
  public points: number;
  public played: boolean;
  public roundPoints: number;

  constructor(team: ITeam) {
    this.name = team.name;
    this.icon = team.icon;
    this.points = team.points || 0;
    this.played = team.played || false;
    this.roundPoints = team.roundPoints;
  }
}

export interface ITeam {
  name: string;
  icon: string;
  points?: number;
  played?: boolean;
  roundPoints?: number;
}
