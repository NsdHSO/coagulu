import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControlDirective,
  FormControlName,
  FormsModule,
  NgControl,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputComponent } from '../../../../shared/input/input.component';
import { PapControlDirective } from '../../../../shared/input/pap-control.directive';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@Component({
  selector: 'form-control-label',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputComponent,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './form-control-label.component.html',
  styleUrls: ['./form-control-label.component.scss'],
  hostDirectives: [PapControlDirective],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' },
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlLabelComponent {
  @Input() public label: string | undefined = '';
  @Input() public formControlName: string | number | undefined = '';
  /**
   * Type of Input checkbox text
   */
  @Input() typeInput? = 'text';
  /**
   * Placeholder for input
   */
  @Input() placeholderInput? = '';
  /**
   * Label for input
   */
  @Input() labelInput? = 'Complete label';
  /**
   * When input is radio button
   */
  @Input() toggleData? = [{ value: false, description: 'default' }];
  ngControl: FormControlDirective | FormControlName | NgModel =
    injectNgControl();
}

function injectNgControl() {
  const ngControl = inject(NgControl, { self: true, optional: true });
  if (!ngControl) {
    throw new Error('...');
  }
  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    return ngControl;
  }
  throw new Error(`...`);
}
