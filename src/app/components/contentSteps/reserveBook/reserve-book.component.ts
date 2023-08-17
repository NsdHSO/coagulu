import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateFormBuilderService } from '../../services/service-generate-form-builder.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataFormBuilder } from '../../interfaces/data-form-builder';
import { InputComponent } from '../../../shared/input/input.component';
import { debounceTime, shareReplay, tap, using } from 'rxjs';
import { ButtonComponent } from '../../../shared/button/button.component';
import { GenerativeService } from '../../services/generative.service';
import { Store } from '@ngrx/store';
import { FormControlLabelComponent } from './formControlLabel/form-control-label.component';
import {
  TypeConstantEnum,
  TypePattern,
} from '../../../shared/utils/constants.enum';
import { StepperService } from '../../services/stepper.service';
import { PatchFormGroupValueDirective } from '../../../directive/patch-form-group-value.directive';
import { formValueChangeReserve } from '../../../+state/reserve/reserve.actions';
import { selectReserveEntities } from '../../../+state/reserve/reserve.selectors';

@Component({
  selector: 'reserve-book',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    FormControlLabelComponent,
    PatchFormGroupValueDirective,
  ],
  templateUrl: './reserve-book.component.html',
  styleUrls: ['./reserve-book.component.scss'],
})
export class ReserveBookComponent implements OnInit {
  private readonly _stepperStore = inject(Store);
  private _stepperService = inject(StepperService);
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
        validators: [{ type: TypeConstantEnum.REQUIRED }],
        placeholder: 'Isvan Avramescu',
        labelHint: 'Name for User',
      },
      {
        label: 'email',
        value: 's@gm.co',
        validators: [
          { type: TypeConstantEnum.REQUIRED },
          { type: TypeConstantEnum.EMAIL },
        ],
        labelHint: 'Email Address',
      },
      {
        label: 'Ageu',
        value: '201',
        validators: [
          { type: TypeConstantEnum.REQUIRED },
          {
            type: TypeConstantEnum.PATTERN,
            option: TypePattern.ONLY_NUMBER,
            errorMsg: 'Only Integer Number',
          },
        ],
        labelHint: 'age',
      },
      {
        label: 'summary',
        value: true,
        labelHint: 'Summary Type',
        typeInput: 'boolean',
        validators: [{ type: TypeConstantEnum.REQUIRED }],
      },
      {
        label: 'TEST AREA',
        value: 'dasdasd',
        labelHint: 'Area Data',
        typeInput: 'area',
      },
      {
        label: 'toggle',
        value: true,
        labelHint: 'Toggle Type',
        typeInput: 'toggle',
        valueToggleShow: [
          { value: true, description: 'TEst' },
          { value: false, description: 'TEST1' },
        ],
      },
      {
        labelHint: 'Address street',
        label: 'address',
        values: [
          {
            label: 'street',
            value: 'Ivan',
            validators: [
              {
                type: TypeConstantEnum.REQUIRED,
                errorMsg: 'This field it is' + ' must',
              },
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
            labelHint: 'Personal Nested',
            value: '123141232311',
            validators: [{ type: TypeConstantEnum.MIN, option: 20 }],
          },
          {
            label: 'ds',
            value: 'TEST',
            labelHint: 'Personal TEst',
            validators: [
              { type: TypeConstantEnum.REQUIRED },
              {
                type: TypeConstantEnum.PATTERN,
                option: TypePattern.ONLY_CHAR,
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
            labelHint: 'Summary TEST',
            validators: [
              { type: TypeConstantEnum.REQUIRED },
              {
                type: TypeConstantEnum.PATTERN,
                option: TypePattern.ONLY_CHAR,
                errorMsg: 'Only' + ' char',
              },
              {
                type: TypeConstantEnum.MIN_CHAR,
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
                validators: [{ type: TypeConstantEnum.REQUIRED }],
                labelHint: 'Childrens',
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
              this._stepperStore.dispatch(formValueChangeReserve(values as any)) //eslint-disable-line
          ),
          tap((v) => {
            this._stepperService.steppForm.controls.reserveBook.controls.check.setValue(
              this.dynamicForm.valid
            );
          }),
          tap((v) => {
            this._stepperService.flagUrl$.next('reserveBook');
          })
        )
        .subscribe(),
    () => this._stepperStore.select(selectReserveEntities)
  ).pipe(shareReplay());

  ngOnInit() {
    this.dynamicForm = this.generateFormBuilderService.buildFormFromJson(
      this.jsonData
    );
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      console.log(this.dynamicForm.getRawValue());
      // Handle form submission
    } else {
      //
    }
  }
}
