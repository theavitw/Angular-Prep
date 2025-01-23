import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    const [div , mul] = args;
    if (!div && !mul) return value;
    // return value * value;
    return value * div * mul;
  }

}
