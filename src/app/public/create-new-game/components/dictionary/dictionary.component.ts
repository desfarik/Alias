import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSelect} from '@angular/material';
import {DictionaryService} from '../../../common/service/dictionary.service';

@Component({
  selector: 'dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  @ViewChild(MatSelect, {static: true})
  private selectComponent: MatSelect;

  constructor(public dictionaryService: DictionaryService) {
  }

  public selectedDictionary = '';

  ngOnInit() {
  }

  public opedDropdown(): void {
    this.selectComponent.open();
  }

}
