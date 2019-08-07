import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() {
  }

  public static getWords(name: string): string[] {
    return [];
  }
}
