import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataFormBuilder } from 'ngx-ftx-shared';
import {
  debounceTime,
  distinctUntilChanged,
  of,
  startWith,
  switchMap,
  tap,
} from 'rxjs';

@Pipe({
  name: 'validatorConfig',
  standalone: true,
})
export class ValidatorConfigPipe implements PipeTransform {
  //eslint-disable-next-line
  transform(value: DataFormBuilder, ...args: unknown[]): any {
    if (value.values) {
      const entity = value.values.find((v: DataFormBuilder) => {
        if (v.label) {
          return v.label.toLowerCase() === (args[1] as string).toLowerCase();
        }
        return v;
      });
      if (entity?.validator?.field) {
        let valid = false;
        return (args[0] as FormGroup).controls[
          entity?.validator?.field
        ].statusChanges.pipe(
          startWith(
            (args[0] as FormGroup).controls[entity?.validator?.field].status
          ),
          distinctUntilChanged(),
          debounceTime(500),
          tap((v) => {
            valid = v === 'Valid'.toUpperCase();
          }),
          switchMap(() => of(valid))
        );
      }
      //Form Group extract validator from group
      if (entity?.values) {
        let valid = true;
        const entityFromGroup = entity.values.find((v: DataFormBuilder) => {
          return v.label?.toLowerCase() === (args[2] as string).toLowerCase();
        });
        if (entityFromGroup?.validator?.field) {
          return (args[0] as FormGroup).controls[
            entityFromGroup?.validator?.field
          ].statusChanges.pipe(
            startWith(
              (args[0] as FormGroup).controls[entityFromGroup?.validator?.field]
                .status
            ),
            distinctUntilChanged(),
            debounceTime(500),
            tap((v) => {
              valid = v === 'Valid'.toUpperCase();
            }),
            switchMap(() => of(valid))
          );
        }
      }
    }
    return of(true);
  }
}
