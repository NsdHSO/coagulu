import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapControlDirective } from '../../directive';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FadeInOutDirective } from '../../directive/fade-in-out.directive';
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'ngx-input-component',
  standalone: true,
  imports: [
    CommonModule,
    PapControlDirective,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FadeInOutDirective,
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline', subscriptSizing: 'dynamic' },
    },
  ],
  animations: [
    trigger('widthOpacityAnimation', [
      state('void', style({ opacity: '0' })),
      transition('void => *', [
        animate('300ms ease-in-out', keyframes([style({ opacity: '1' })])),
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', keyframes([style({ opacity: '0' })])),
      ]),
    ]),
  ],
})
export class InputComponent {
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
  @Input()
  control?: NgControl | any | unknown; //eslint-disable-line
}
