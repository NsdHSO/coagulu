import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FadeInOutDirective } from '../../directive/fade-in-out.directive';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { InputDropdownComponent } from '../../../../../../ftx-sivan-shared/src/lib/components';

@Component({
  selector: 'ngx-multiple-input-component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    FadeInOutDirective,
    InputDropdownComponent,
  ],
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline', subscriptSizing: 'dynamic' },
    },
  ],
  animations: [
    trigger('widthOpacityAnimation', [
      state('void', style({ transform: 'scaleY(0)', height: 0, opacity: 0 })),
      state('*', style({ transform: 'scaleY(1)', opacity: 1 })),
      transition('void <=> *', animate('300ms ease-in')),
    ]),
  ],
})
export class InputComponent {
  /**
   * Type of Input checkbox text
   */
  @Input() typeInput? = 'text';
  /**
   * Placeholder for multiple-input-dropdown
   */
  @Input() placeholderInput? = '';
  /**
   * Label for multiple-input-dropdown
   */
  @Input() labelInput = 'Complete label';
  /**
   * When multiple-input-dropdown is radio button
   */
  @Input() toggleData? = [{ value: false, description: 'default' }];
  @Input()
  control?: NgControl | any | unknown; //eslint-disable-line
}
