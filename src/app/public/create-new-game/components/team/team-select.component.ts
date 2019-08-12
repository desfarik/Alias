import {Component, OnInit} from '@angular/core';
import {TeamService} from "../../../common/service/team.service";
import {ITeam} from "../../../common/team";

@Component({
  selector: 'team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.scss']
})
export class TeamSelectComponent implements OnInit {

  public selectedTeams: Set<string> = new Set();
  public teams: string[];

  constructor(public teamService: TeamService) {
    this.teams = teamService.teamsIcons;

    for (let i = this.teams.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.teams[i], this.teams[j]] = [this.teams[j], this.teams[i]];
    }
    this.selectedTeams.add(this.teams[0]).add(this.teams[1]);
  }

  public getTeams(): ITeam[] {
    const result: ITeam[] = [];
    this.selectedTeams.forEach((team) => {
      result.push({icon: team, name: team});
    });
    return result;
  }

  ngOnInit() {
  }


}
