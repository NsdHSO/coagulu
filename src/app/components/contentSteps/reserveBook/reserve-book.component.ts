import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  ButtonComponent,
  DataFormBuilder,
  FormControlLabelComponent,
  FtxFormsComponent,
  GenerateFormBuilderService,
  InputComponent, PatchFormGroupValueDirective,
  TypeConstantEnum,
  TypePattern,
} from '@ngx-ftx-forms';
import { debounceTime, shareReplay, tap, using } from 'rxjs';
import { Store } from '@ngrx/store';
import { StepperService } from '../../services/stepper.service';
import { formValueChangeReserve, selectReserveEntities } from '../../../+state';

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
    FtxFormsComponent,
  ],
  templateUrl: './reserve-book.component.html',
  styleUrls: ['./reserve-book.component.scss'],
})
export class ReserveBookComponent implements OnInit {
  private readonly _stepperStore = inject(Store);
  readonly generateFormBuilderService: GenerateFormBuilderService = inject(
    GenerateFormBuilderService
  );
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
        label: 'TESTa',
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
        label: 'ARE',
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
        validators: [{ type: TypeConstantEnum.REQUIRED }],
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
          {
            label: 'street2',
            value: 'Ivan2',
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
  private _stepperService = inject(StepperService);
  formValue$ = using(
    () =>
      this.dynamicForm.valueChanges
        .pipe(
          debounceTime(200),
          tap((v) => console.log(this.dynamicForm.controls)),
          tap(
            (values) =>
              this._stepperStore.dispatch(formValueChangeReserve(values as any)) //eslint-disable-line
          ),
          tap(() => {
            this._stepperService.steppForm.controls.reserveBook.controls.check.patchValue(
              this.dynamicForm.valid
            );
          }),
          tap(() => {
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
