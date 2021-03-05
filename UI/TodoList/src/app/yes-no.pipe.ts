import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'yesNO'
})
export class YesNOPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? "Done" : "Pending";
  }

}
