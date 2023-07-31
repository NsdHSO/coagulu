import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[patchFormGroupValues]',
  standalone: true,
})
export class PatchFormGroupValueDirective {
  @Input() formGroup: FormGroup = {} as FormGroup;

  @Input() set patchFormGroupValues(val: unknown) {
    if (!val) {
      return;
    }
    this.formGroup.patchValue(val, { emitEvent: false });
  }
}
