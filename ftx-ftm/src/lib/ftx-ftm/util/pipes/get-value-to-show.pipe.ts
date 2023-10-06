import { Pipe, PipeTransform } from '@angular/core';
import { DataFormBuilder, ValueToggle } from 'ngx-ftx-shared';

@Pipe({
  name: 'getValueToShow',
  standalone: true,
})
export class GetValueToShowPipe implements PipeTransform {
  transform(value: DataFormBuilder, ...args: unknown[]): ValueToggle[] | null {
    if (value.values) {
      const key = value.values?.find((v: DataFormBuilder) => {
        if (v.label) {
          return v.label.toLowerCase() === (args[0] as string).toLowerCase();
        }
        return v;
      });

      if (key) {
        return key?.valueToggleShow || null;
      }
      return null;
    }
    return null;
  }
}
