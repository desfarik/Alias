import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seconds'
})
export class SecondsPipe implements PipeTransform {

  transform(value: number): any {
    const seconds = value % 60;
    return seconds || '00';
  }

}
