import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DataFormBuilder, Section } from '../interfaces/data-form-builder';
import { ConstantsEnum } from '../../shared/utils/constants.enum';

@Injectable({
  providedIn: 'root',
})
export class GenerateFormBuilderService {
  constructor(private fb: FormBuilder) {}

  buildFormFromJson(jsonData: DataFormBuilder): FormGroup {
    console.log(this.buildGroup(jsonData));
    return this.buildGroup(jsonData);
  }

  private buildGroup(data: any): FormGroup {
    const group: { [key: string]: any } = {};

    data.values.forEach((item: Section, idx: number) => {
      if (item.value) {
        group[item.label] = new FormControl(item.value);
      }
      if (
        item.values &&
        item.values.length > ConstantsEnum.ZERO &&
        !(
          item.values[ConstantsEnum.ZERO].values &&
          item.values[ConstantsEnum.ZERO].values.length > ConstantsEnum.ZERO
        )
      ) {
        group[item.label] = this.buildGroup(item);
      }
      if (
        item.values &&
        item.values[ConstantsEnum.ZERO].values &&
        item.values[ConstantsEnum.ZERO].values.length > ConstantsEnum.ZERO
      ) {
        //TODO: Add statement for FormArray
      }
    });

    return this.fb.group(group);
  }

  private buildArray(items: Section[]): FormArray {
    const array = this.fb.array([]);
    items.forEach((item: Section) => {
      if (item.values && item.values.length > ConstantsEnum.ZERO) {
        //        (array as FormArray).push(this.buildArray(item.values));
      }
    });
    return array;
  }

  private getValidators(item: any): any[] {
    const validators: any[] = [];
    if (item.validators && Array.isArray(item.validators)) {
      item.validators.forEach((validator: string) => {
        if (validator.startsWith('minLength')) {
          const minLength = Number(validator.split(':')[1]);
          validators.push(Validators.minLength(minLength));
        } else if (validator.startsWith('min')) {
          const min = Number(validator.split(':')[1]);
          validators.push(Validators.min(min));
        } else if (validator === 'required') {
          validators.push(Validators.required);
        }
      });
    }
    return validators;
  }
}
