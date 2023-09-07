import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { GenerateFormBuilderService, TypeConstantEnum } from 'ngx-ftx-forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDropdownComponent } from '../../../../../ftx-sivan-shared/src/lib/components';

@Component({
  selector: 'spend-money',
  standalone: true,
  imports: [
    CommonModule,
    InputDropdownComponent,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './spend-money.component.html',
  styleUrls: ['./spend-money.component.scss'],
})
export class SpendMoneyComponent {
  @ViewChild('default') defaultTemplate!: TemplateRef<unknown>;

  private readonly _fb = inject(GenerateFormBuilderService);
  form: any;
  constructor() {
    this.form = this._fb.buildFormFromJson({
      label: 'name',
      value: 'IVan',
      validators: [{ type: TypeConstantEnum.REQUIRED }],
      placeholder: 'Isvan Avramescu',
      labelHint: 'Name for User',
    });
  }
}
