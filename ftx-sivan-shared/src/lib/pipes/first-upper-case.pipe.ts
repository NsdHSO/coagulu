import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpperCase',
  standalone: true,
})
export class FirstUpperCasePipe implements PipeTransform {
  transform(value: string | unknown): unknown {
    if (typeof value === 'string' && value.length > 0) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return null;
  }
}
