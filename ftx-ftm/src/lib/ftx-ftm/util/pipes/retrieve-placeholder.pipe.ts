import { Pipe, PipeTransform } from '@angular/core';
import { DataFormBuilder } from 'ngx-ftx-shared';

@Pipe({
  name: 'retrievePlaceholder',
  standalone: true,
})
export class RetrievePlaceholderPipe implements PipeTransform {
  //eslint-disable-next-line
  transform(value: any | DataFormBuilder, ...args: unknown[]): string {
    if (value) {
      if (args[2] !== undefined) {
        const group = value.values.find((v: DataFormBuilder) => {
          if (v.label) {
            return v.label.toLowerCase() === args[2];
          }
          return v;
        });
        if (group.values) {
          return (
            group.values.find((v: DataFormBuilder) => {
              if (v.label !== undefined) {
                return v.label.toLowerCase() === args[1];
              }
              return v;
            })[args[0] as string] || group[args[0] as string]
          );
        }
        if (group.bulkValues) {
          if (args[3]) {
            if (
              !group.bulkValues[args[1] as string].bulkValues[
                args[3] as string
              ][args[0] as string]
            ) {
              console.error('Provide some ', args[0]);
            }
            return (
              group.bulkValues[args[1] as string].bulkValues[args[3] as string][
                args[0] as string
              ] || 'Nothing'
            );
          }
          if (!args[3]) {
            return (
              group.bulkValues[args[1] as number][args[0] as string] ||
              'Nothing'
            );
          }
        }
      }
      const key = value.values?.find((v: DataFormBuilder) => {
        if (v.label) {
          return v.label.toLowerCase() === (args[1] as string).toLowerCase();
        }
        return v;
      });
      if (key !== undefined && !key && !key[args[0] as string]) {
        console.warn(
          `Please provide a ${args[0]} in data Store! On ${args[1]}`
        );
        return '';
      }
      if (key) {
        return key[args[0] as string];
      }
      return '';
    }
    return '';
  }
}
