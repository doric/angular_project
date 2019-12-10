import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToList'
})
export class ConvertToListPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    const values = value.split(',');
    let s = '<ul>';
    for (value of values){
      s += '<li>' + value + '</li>';
    }
    s += '</ul>';
    return s;
  }

}
