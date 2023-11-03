import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  FormControlEntityComponent,
  FtxFormsComponent,
  GenerateFormBuilderService,
  MultipleInputComponent,
  TypeConstantEnum,
  TypePattern,
} from 'ngx-ftx-forms';
import {
  formValueChangeReserve,
  selectReserveEntities,
  ButtonComponent,
  DataFormBuilder,
} from 'ngx-ftx-shared';
import { debounceTime, shareReplay, tap, using } from 'rxjs';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'reserve-book',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultipleInputComponent,
    ButtonComponent,
    FormControlEntityComponent,
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

  dynamicForm: any; // eslint-disable-line
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
        label: 'Adult',
        value: false,
        labelHint: 'Is Adult',
        typeInput: 'toggle',
        valueToggleShow: [
          {
            value: false,
            description: 'No',
            icon: 'fa_solid:"RO"',
          },
          {
            value: true,
            description: 'Yes',
            icon: 'fa_solid:"CR"',
          },
        ],
      },
      {
        label: 'ARE',
        value: 'dasdasd',
        labelHint: 'Area Data',
        typeInput: 'area',
        description: {
          text:
            'Lorem Ipsum Text description you are in the best form' +
            ' builder create evere',
        },
      },
      {
        labelHint: 'Address street',
        label: 'address',
        values: [
          {
            label: 'street',
            value: 'Ivan',
            labelHint: 'Street Number 1',
            placeholder: 'Street Number 1',
            validators: [
              {
                type: TypeConstantEnum.REQUIRED,
                errorMsg: 'This field it is' + ' must',
              },
            ],
          },
          {
            label: 'streetIvan',
            value: 'Ivan2',
            validators: [
              {
                type: TypeConstantEnum.REQUIRED,
                errorMsg: 'This field it is' + ' must',
              },
            ],
            description: {
              text:
                'Lorem Ipsum Text description you are in the best form' +
                ' builder create evere',
            },
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
          {
            label: 'ds2',
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
          {
            label: 'ds3',
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
            value: 'ss',
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
        labelHint: 'Name for Home',
        bulkValues: [
          {
            value: '444',
            label: 'Miki',
          },
          {
            label: 'Ivan',
            bulkValues: [
              {
                value: 1231,
                validators: [{ type: TypeConstantEnum.REQUIRED }],
                labelHint: 'Childrens',
              },
              {
                label: 'train',
                value: 232,
                placeholder: 'NAMING',
                labelHint: 'Number',
              },
            ],
          },
          {
            label: 'Barto',
            bulkValues: [
              {
                value: null,
                labelHint: 'barot Childrens',
              },
              {
                label: 'barot Childrens train',
                value: 23222,
                placeholder: ' barot NAMING',
                labelHint: 'Number',
              },
            ],
          },
          {
            label: 'Barto2',
            bulkValues: [
              {
                value: null,
                labelHint: 'barot Childrens',
              },
              {
                label: 'barot Childrens train',
                value: 23222,
                placeholder: ' barot NAMING',
                labelHint: 'Number',
              },
            ],
          },
          {
            label: 'Bartos',
            bulkValues: [
              {
                value: null,
                labelHint: 'barot Childrens',
              },
              {
                label: 'barot Childrens train',
                value: 23222,
                placeholder: ' barot NAMING',
                labelHint: 'Number',
                validators: [{ type: TypeConstantEnum.REQUIRED }],
              },
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
          tap((values: DataFormBuilder) =>
            this._stepperStore.dispatch(formValueChangeReserve(values))
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
