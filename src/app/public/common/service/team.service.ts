import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public teamsIcons: string[];

  constructor() {
    this.teamsIcons = ['Akula', "Tigr", 'Krevetka', "Omeba", "Ovca"];
  }
}
