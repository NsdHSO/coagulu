import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateFormBuilderService } from '../../services/service-generate-form-builder.service';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataFormBuilder } from '../../interfaces/data-form-builder';
import { InputComponent } from '../../../shared/input/input.component';
import { tap } from 'rxjs';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'reserve-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, ButtonComponent],
  templateUrl: './reserve-book.component.html',
  styleUrls: ['./reserve-book.component.scss'],
})
export class ReserveBookComponent {
  protected readonly formBuilder: GenerateFormBuilderService = inject(
    GenerateFormBuilderService
  );
  dynamicForm: FormGroup = {} as FormGroup;
  jsonData: DataFormBuilder = {
    values: [
      {
        label: 'name',
        value: 'IVan',
        validators: [{ type: 'required' }],
      },
      {
        label: 'email',
        value: 's@gm.co',
        validators: [{ type: 'required' }, { type: 'email' }],
      },
      {
        label: 'age',
        value: '20',
        validators: [{ type: 'min', option: 20 }],
      },
      {
        label: 'address',
        values: [
          {
            label: 'street',
            value: 'Ivan',
            validators: [
              { type: 'required', errorMsg: 'This field it is' + ' must' },
            ],
          },
        ],
      },
      {
        label: 'personalData',
        values: [
          {
            label: 'cnp',
            value: '123141232311',
            validators: [{ type: 'min', option: 20 }],
          },
          {
            label: 'ds',
            value: 'TEST',
            validators: [
              { type: 'required' },
              {
                type: 'pattern',
                option: /^[a-zA-Z\s]*$/,
                errorMsg: 'Only' + ' char',
              },
            ],
          },
        ],
      },
      {
        label: 'course',
        bulkValues: [
          {
            value: '2211',
            label: 'angularPatterns',
            validators: [
              { type: 'required' },
              {
                type: 'pattern',
                option: /^[a-zA-Z\s]*$/,
                errorMsg: 'Only' + ' char',
              },
            ],
          },
          {
            value: '555',
            label: 'reactPatterns',
          },
        ],
      },
      {
        label: 'age',
        bulkValues: [
          {
            value: '2312',
            label: 'angularPatterns',
          },
          {
            value: '321',
            label: 'reactPatterns',
          },
        ],
      },
      {
        label: 'home',
        bulkValues: [
          {
            value: '444',
            label: 'Miki',
          },
          {
            label: 'Ivan',
            bulkValues: [
              {
                value: 4,
                validators: [{ type: 'required' }],
              },
              { value: 2 },
            ],
          },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit() {
    this.dynamicForm = this.formBuilder.buildFormFromJson(this.jsonData);
    this.dynamicForm.valueChanges.pipe(tap(console.log)).subscribe();
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log('tesra');
      // Handle form submission
    } else {
    }
  }

  getControl(controlKey: string): AbstractControl | null {
    return this.dynamicForm.get(controlKey);
  }
}
