import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControlDirective,
  FormControlName,
  FormsModule,
  NgControl,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputComponent } from '../../shared';
import { MatInputModule } from '@angular/material/input';
import { FadeInOutDirective } from '../../directive/fade-in-out.directive';
import { FormLabelComponent } from '../formLabel/form-label.component';
import { PapControlDirective, injectNgControl } from 'ngx-ftx-shared';

@Component({
  selector: 'ngx-form-control-entity',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputComponent,
    ReactiveFormsModule,
    MatInputModule,
    FadeInOutDirective,
    FormLabelComponent,
  ],
  templateUrl: './form-control-entity.component.html',
  styleUrls: ['./form-control-entity.component.scss'],
  hostDirectives: [PapControlDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlEntityComponent {
  @Input() label: string | undefined = '';
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
  @Input() labelInput? = 'Complete label';

  /**
   * Label for multiple-input-dropdown
   */
  @Input() isFormArray? = false;
  /**
   * When multiple-input-dropdown is radio button
   */
  @Input() toggleData? = [{ value: false, description: 'default' }];
  ngControl: FormControlDirective | FormControlName | NgModel | NgControl =
    injectNgControl();
}
