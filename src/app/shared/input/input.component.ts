import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapControlDirective } from './pap-control.directive';
import {
  FormControlDirective,
  FormControlName,
  FormsModule,
  NgControl,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'input-component',
  standalone: true,
  imports: [
    CommonModule,
    PapControlDirective,
    FormsModule,
    ReactiveFormsModule,
  ],
  hostDirectives: [PapControlDirective],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  ngControl: any = injectNgControl();
  /**
   * Type of Input checkbox text
   */
  @Input()
  typeInput? = 'text';
}

function injectNgControl() {
  const ngControl = inject(NgControl, { self: true, optional: true });

  if (!ngControl) throw new Error('...');

  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    return ngControl;
  }

  throw new Error(`...`);
}
