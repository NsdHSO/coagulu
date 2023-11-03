import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormControlEntityComponent,
  MultipleInputComponent,
  PatchFormGroupValueDirective,
  TypeConstantEnum,
  TypePattern,
} from 'ngx-ftx-forms';
import { FtxFtmComponent } from 'ngx-ftm';
import { ButtonComponent, DataFormBuilder } from 'ngx-ftx-shared';

@Component({
  selector: 'info-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatchFormGroupValueDirective,
    ButtonComponent,
    MultipleInputComponent,
    FormControlEntityComponent,
    FtxFtmComponent,
  ],
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss'],
})
export class InfoUserComponent {
  jsonData: DataFormBuilder = {
    values: [
      {
        label: 'name',
        value: 'IVan',
        validators: [{ type: TypeConstantEnum.REQUIRED }],
        placeholder: 'Isvan Avramescu',
        labelHint: 'Name for User',
        validator: {
          field: 'address',
        },
        updateOn: 'blur',
      },
      {
        label: 'email',
        validator: {
          field: 'name',
        },
        value: 'sa@dsa.com',
        validators: [
          { type: TypeConstantEnum.REQUIRED },
          { type: TypeConstantEnum.EMAIL },
        ],
        placeholder: 'Email Address',
        labelHint: 'ivan@entrt.country',
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
        labelHint: 'Summary Test',
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
            icon: 'fa_solid:RO',
          },
          {
            value: true,
            description: 'Yes',
            icon: 'fa_solid:CR',
          },
        ],
      },
      {
        label: 'explosion',
        value: false,
        labelHint: 'Is Adult',
        typeInput: 'toggle',
        validators: [
          {
            type: TypeConstantEnum.REQUIRED,
          },
        ],
      },
      {
        label: 'ARE',
        value: 'dasdasd',
        labelHint: 'Area Data',
        placeholder: 'Are Text Lore ipsum',
        typeInput: 'area',
        description: {
          text:
            'Lorem Ipsum Text description you are in the best form' +
            ' builder create evere',
        },
        validator: {
          field: 'explosion',
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
        placeholder: 'Hey you',
        values: [
          {
            label: 'cnp',
            labelHint: 'Personal Nested',
            value: '123141232311',
            placeholder: 'Your CNP',
            validators: [{ type: TypeConstantEnum.MIN, option: 20 }],
            validator: {
              field: 'email',
            },
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
            validator: {
              field: 'email',
            },
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
          {
            label: 'ds3',
            value: 'sdasd',
            labelHint: 'Personal TEst',
            validators: [
              { type: TypeConstantEnum.REQUIRED },
              {
                type: TypeConstantEnum.PATTERN,
                option: TypePattern.ONLY_CHAR,
                errorMsg: 'Only' + ' char',
              },
            ],
            // TODO: inner validator
            //            validator: {
            //              field: 'ds6',
            //            },
          },
          {
            label: 'ds6',
            value: 'gasd',
            placeholder: 'Personal TEst',
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
            label: 'ds25',
            value: 'TssEST',
            placeholder: 'Personal TEst25',
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
          },
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
            placeholder: 'Angular Pattern',
            labelHint: '32.42',
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
                placeholder: 'Avram Avramescu',
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
            label: 'Ivan2',
            bulkValues: [
              {
                value: null,
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
        ],
      },
    ],
  };
}
