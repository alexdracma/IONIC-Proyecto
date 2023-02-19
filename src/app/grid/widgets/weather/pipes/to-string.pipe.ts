import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString'
})
export class ToSringPipe implements PipeTransform {

  transform(input: number): string {
    return input.toString();
  }

}
