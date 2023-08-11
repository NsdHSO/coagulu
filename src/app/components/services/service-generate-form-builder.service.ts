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
import {
  ConstantsEnum,
  TypeConstantEnum,
} from '../../shared/utils/constants.enum';

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
    const { type, option, errorMsg } = validatorConfig;

    switch (type) {
      case TypeConstantEnum.REQUIRED:
        return (control: { value: any }) =>
          control.value
            ? null
            : { error: errorMsg || 'This field Is must' || true };
      case TypeConstantEnum.MIN:
        if (typeof option === TypeConstantEnum.NUMBER) {
          // Check if option is a number
          const numOption = option as number;
          return (control: { value: number }) =>
            control.value >= numOption ? null : { error: errorMsg || true };
        } else {
          throw new Error('Other Error extract validator'); // Handle other
          // cases or throw an error
        }
      case TypeConstantEnum.PATTERN:
        if (
          typeof option === TypeConstantEnum.STRING ||
          option instanceof RegExp
        ) {
          const pattern =
            typeof option === TypeConstantEnum.STRING
              ? new RegExp(option as string)
              : (option as RegExp);
          return (control: FormControl) =>
            (pattern instanceof RegExp ? pattern.test(control.value) : false)
              ? null
              : { error: errorMsg || true };
        } else {
          throw new Error('Invalid option for pattern validator');
        }

      case TypeConstantEnum.EMAIL:
        return (control: FormControl) => {
          if (!control.value) {
            return null; // Allow empty values for the email validator
          }
          const emailPattern =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailPattern.test(control.value)
            ? null
            : { error: errorMsg || true };
        };
      // Add more cases for other validator types as needed

      default:
        // Return null for unknown validator types
        throw new Error('Please Implement this Validator');
    }
  }
}
