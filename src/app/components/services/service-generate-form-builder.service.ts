import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import {
  DataFormBuilder,
  Section,
  Validator,
} from '../interfaces/data-form-builder';
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
    const group: { [key: string]: unknown } = {};

    data.values.forEach((item: Section) => {
      if (item.value) {
        group[item.label] = new FormControl(
          item.value,
          this.extractValidator(item)
        );
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
        (array as FormArray).push(this.buildArray(item.values));
      }
    });
    return array;
  }

  extractValidator(item: Section): ValidatorFn[] {
    let validators: ValidatorFn[] = [];
    if (item.validators && item.validators.length > 0) {
      validators = item.validators.map((validatorConfig) =>
        this.getValidator(validatorConfig)
      );
    }
    return validators;
  }

  getValidator(validatorConfig: Validator): ValidatorFn | any {
    const { type, option } = validatorConfig;

    switch (type) {
      case 'required':
        return (control: { value: any }) =>
          control.value ? null : { required: true };
      case 'min':
        if (typeof option === 'number') {
          // Check if option is a number
          return (control: { value: number }) =>
            control.value >= option ? null : { min: true };
        } else {
          throw new Error('Other Error extract validator'); // Handle other
          // cases or throw an error
        }
      case 'pattern':
        if (typeof option === 'string' || option instanceof RegExp) {
          const pattern =
            typeof option === 'string' ? new RegExp(option) : option;
          return (control: FormControl) =>
            pattern.test(control.value) ? null : { pattern: true };
        } else {
          throw new Error('Invalid option for pattern validator');
        }

      case 'email':
        return (control: FormControl) => {
          if (!control.value) {
            return null; // Allow empty values for the email validator
          }
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailPattern.test(control.value) ? null : { email: true };
        };
      // Add more cases for other validator types as needed

      default:
        // Return null for unknown validator types
        throw new Error('Please Implement this Validator');
    }
  }
}
