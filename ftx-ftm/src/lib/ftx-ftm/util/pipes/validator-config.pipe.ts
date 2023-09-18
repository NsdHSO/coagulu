import { ChangeDetectorRef, inject, Pipe, PipeTransform } from '@angular/core';
import { DataFormBuilder } from 'ngx-ftx-forms';
import { FormGroup } from '@angular/forms';
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
          switchMap((v) => of(valid))
        );
      }
    }
    return of(true);
  }
}
