import { Pipe, PipeTransform } from '@angular/core';
import { DataFormBuilder, TypeInput } from 'ngx-ftx-forms';

@Pipe({
  name: 'getType',
  standalone: true,
})
export class GetTypePipe implements PipeTransform {
  //eslint-disable-next-line
  transform(value: any | DataFormBuilder, ...args: unknown[]): TypeInput {
    if (value.values) {
      const key = value.values?.find((v: DataFormBuilder) => {
        if (v.label) {
          return v.label.toLowerCase() === (args[0] as string).toLowerCase();
        }
        return v;
      });

      if (key) {
        return key.typeInput || 'text';
      }
      return 'text';
    }
    return 'text';
  }
}
