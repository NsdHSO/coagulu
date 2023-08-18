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
import { ButtonComponent } from './shared/button/button.component';
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

  controlMapping: any = [];
  generateFormBuilderService = inject(GenerativeService);
  protected readonly isFormGroup = isFormGroup;
  protected readonly isFormControl = isFormControl;
  protected readonly isFormArray = isFormArray;

  ngOnInit() {
    if (this.jsonData.values)
      for (const item of this.jsonData.values) {
        if (item.label) {
          this.controlMapping[item.label] = item;
        }
      }
  }
}
