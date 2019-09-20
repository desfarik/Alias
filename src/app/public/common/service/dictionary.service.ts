import {Injectable} from '@angular/core';
import {SimpleDictionary} from '../simple.dictionary';
import {ChemisrtyDictionary} from "../chemiosrty.dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  public dictionaryNames = ['Обычный', 'Химический'];

  constructor() {
  }

  public static getWords(name: string): string[] {
    switch (name) {
      case 'Обычный': return [...SimpleDictionary];
      case 'Химический': return [...ChemisrtyDictionary];
    }
    return SimpleDictionary;
  }
}
