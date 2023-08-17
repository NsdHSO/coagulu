import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  isFormArray,
  isFormControl,
  isFormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataFormBuilder } from './interfaces';
import { FormControlLabelComponent } from './components';
import { ButtonComponent } from '../../../../src/app/shared/button/button.component';
import { GenerativeService } from './service';

@Component({
  selector: 'ngx-ftx-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlLabelComponent,
    ButtonComponent,
  ],
  templateUrl: './ftx-forms.component.html',
  styleUrls: ['./ftx-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FtxFormsComponent {
  @Input()
  dynamicForm: FormGroup = {} as FormGroup;

  @Input()
  jsonData: DataFormBuilder = {} as DataFormBuilder;

  @Output()
  submitEvent = new EventEmitter();

  generateFormBuilderService = inject(GenerativeService);
  protected readonly Object = Object;
  protected readonly isFormGroup = isFormGroup;
  protected readonly isFormControl = isFormControl;
  protected readonly isFormArray = isFormArray;
}
