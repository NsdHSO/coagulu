import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormControlDirective,
  FormControlName,
  FormsModule,
  NgControl,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { PapControlDirective, InputComponent } from '../../shared';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'ngx-form-control-label',
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      state('void', style({ width: 0, opacity: 0 })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
  ],
})
export class FormControlLabelComponent {
  @Input() label: string | undefined = '';
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
  ngControl:
    | FormControlDirective
    | FormControlName
    | NgModel
    | NgControl
    | any = injectNgControl(); //eslint-disable-line
}

function injectNgControl() {
  const ngControl = inject(NgControl, { self: true, optional: true });
  if (!ngControl) {
    throw new Error('Not ng Controll');
  }
  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    return ngControl;
  }
  throw new Error(`Not of instance of Form Directive Name Model`);
}
