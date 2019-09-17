import {Injectable} from '@angular/core';
import {SimpleDictionary} from '../simple.dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  public dictionaryNames = ['Обычный', 'Химический'];

  constructor() {
  }

  public static getWords(name: string): string[] {
    return SimpleDictionary;
  }
}
