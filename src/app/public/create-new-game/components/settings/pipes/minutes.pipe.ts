import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'minutes'
})
export class MinutesPipe implements PipeTransform {

  transform(value: number): any {
    return Math.floor(value / 60);
  }

}
