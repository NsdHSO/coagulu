import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapControlDirective } from './pap-control.directive';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

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
  ],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
