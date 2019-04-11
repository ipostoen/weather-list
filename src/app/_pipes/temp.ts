import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class Temp implements PipeTransform {

  transform(value) {
    return Math.floor(value);
  }
}