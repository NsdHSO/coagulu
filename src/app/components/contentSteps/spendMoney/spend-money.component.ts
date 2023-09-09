import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {
  GenerateFormBuilderService,
  TypeConstantEnum,
  TypePattern,
} from 'ngx-ftx-forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SivanInputComponent } from 'ngx-ftx-shared';

@Component({
  selector: 'spend-money',
  standalone: true,
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    SivanInputComponent,
  ],
  templateUrl: './spend-money.component.html',
  styleUrls: ['./spend-money.component.scss'],
})
export class SpendMoneyComponent {
  @ViewChild('default') defaultTemplate!: TemplateRef<unknown>;

  private readonly _fb = inject(GenerateFormBuilderService);
  simple: any; //eslint-disable-line
  currency: any; //eslint-disable-line
  constructor() {
    this.simple = this._fb.buildFormFromJson({
      label: 'name',
      value: 'IVan',
      validators: [{ type: TypeConstantEnum.REQUIRED }],
      placeholder: 'Isvan Avramescu',
      labelHint: 'Name for User',
    });
    this.currency = this._fb.buildFormFromJson({
      label: 'personalData',
      labelHint: 'Personal Data',
      values: [
        {
          label: 'valueCurrency',
          labelHint: 'Personal Nested',
          value: '123141232311',
          validators: [
            {
              type: TypeConstantEnum.PATTERN,
              option: TypePattern.ONLY_NUMBER,
              errorMsg: 'Only Integer Number',
            },
          ],
        },
        {
          label: 'currency',
          value: 'fa_solid:RO',
          labelHint: 'Personal TEst',
        },
      ],
    });
    console.log(this.currency);
  }
}
