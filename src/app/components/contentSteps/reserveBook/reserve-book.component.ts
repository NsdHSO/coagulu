import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateFormBuilderService } from '../../services/service-generate-form-builder.service';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataFormBuilder } from '../../interfaces/data-form-builder';
import { InputComponent } from '../../../shared/input/input.component';
import { debounceTime, shareReplay, tap, using } from 'rxjs';
import { ButtonComponent } from '../../../shared/button/button.component';
import { GenerativeService } from '../../services/generative.service';
import { formValueChange } from '../../../+state/stepper.actions';
import { selectStepperEntities } from '../../../+state/stepper.selectors';
import { Store } from '@ngrx/store';
import { FormControlLabelComponent } from './formControlLabel/form-control-label.component';
import { TypeConstantEnum } from '../../../shared/utils/constants.enum';

@Component({
  selector: 'reserve-book',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    FormControlLabelComponent,
  ],
  templateUrl: './reserve-book.component.html',
  styleUrls: ['./reserve-book.component.scss'],
})
export class ReserveBookComponent implements OnInit {
  private readonly _stepperStore = inject(Store);
  readonly generateFormBuilderService: GenerateFormBuilderService = inject(
    GenerateFormBuilderService
  );
  readonly _injectGenerative = inject(GenerativeService);
  dynamicForm: FormGroup = {} as FormGroup;
  jsonData: DataFormBuilder = {
    values: [
      {
        label: 'name',
        value: 'IVan',
        validators: [{ type: 'required' }],
        placeholder: 'Isvan Avramescu',
        labelHint: 'Name for User',
      },
      {
        label: 'email',
        value: 's@gm.co',
        validators: [{ type: 'required' }, { type: 'email' }],
        labelHint: 'Email Address',
      },
      {
        label: 'Ageu',
        value: 2,
        validators: [
          { type: 'required' },
          {
            type: TypeConstantEnum.PATTERN,
            option: /^\d+(\.\d+)?$/,
            errorMsg: 'Only Integer Number',
          },
          { type: 'min', option: 20, errorMsg: 'Age min is 20' },
        ],
        labelHint: 'age',
      },
      {
        label: 'summary',
        value: true,
        labelHint: 'Summary Type',
      },
      {
        labelHint: 'Address street',
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
        labelHint: 'Personal Data',
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
        labelHint: 'Course what user take',
        label: 'course',
        bulkValues: [
          {
            value: 's',
            label: 'angularPatterns',
            validators: [
              { type: 'required' },
              {
                type: 'pattern',
                option: /^[a-zA-Z\s]*$/,
                errorMsg: 'Only' + ' char',
              },
              {
                type: 'minChar',
                option: 2,
                errorMsg: 'Must filled with min 2 char',
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
        labelHint: 'Name for User',
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
        labelHint: 'Name for User',
        bulkValues: [
          {
            value: '444',
            label: 'Miki',
          },
          {
            label: 'Ivan',
            bulkValues: [
              {
                value: null,
                validators: [{ type: 'required' }],
              },
              { value: 2, placeholder: 'NAMING', labelHint: 'Number' },
            ],
          },
        ],
      },
    ],
  };
  formValue$ = using(
    () =>
      this.dynamicForm.valueChanges
        .pipe(
          debounceTime(200),
          tap(
            (values) =>
              this._stepperStore.dispatch(formValueChange(values as any)) //eslint-disable-line
          )
        )
        .subscribe(),
    () => this._stepperStore.select(selectStepperEntities)
  ).pipe(shareReplay());

  ngOnInit() {
    this.dynamicForm = this.generateFormBuilderService.buildFormFromJson(
      this.jsonData
    );
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

  public typeOf(value: number | string | undefined | boolean) {
    return typeof value;
  }
}
