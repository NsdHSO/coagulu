import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[ngxFormGroupValues]',
  standalone: true,
})
export class PatchFormGroupValueDirective {
  @Input() formGroup: FormGroup = {} as FormGroup;

  @Input() set ngxFormGroupValues(val: unknown) {
    if (!val) {
      return;
    }
    this.formGroup.patchValue(val, { emitEvent: false });
  }
}
