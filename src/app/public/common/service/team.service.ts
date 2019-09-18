import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  public teamsIcons: string[];

  constructor() {
    this.teamsIcons = ['Akula', "Tigr", 'Krevetka', "Omeba", "Ovca"];
  }

  public getTeamName(id: string) {
    switch (id) {
      case 'Akula':
        return "Акулы бизнеса";
      case 'Tigr':
        return "Тигры Минска";
      case 'Krevetka':
        return "Одесские креветки";
      case 'Omeba':
        return "Одноклеточные";
      case 'Ovca':
        return "Милые овцы";
    }
  }
}
