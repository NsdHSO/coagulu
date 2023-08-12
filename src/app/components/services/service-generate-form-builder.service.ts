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
  NestedValue,
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
    console.log(this.buildGroup(jsonData).controls['home']);
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
      if (item.bulkValues && item.bulkValues.length > ConstantsEnum.ZERO) {
        const arrayBulks = this.fb.array([]) as any;
        item.bulkValues.forEach((arrayBulk, index: number) => {
          if (!arrayBulk.bulkValues) {
            const bulkValues = this.fb.group({
              value: [arrayBulk.value, this.extractValidator(arrayBulk)],
              title: [arrayBulk.label],
            });
            arrayBulks.push(bulkValues);
          }
          if (
            arrayBulk &&
            arrayBulk.bulkValues &&
            arrayBulk.bulkValues.length > 0
          ) {
            const bulkValues = this.fb.array([]) as any;
            arrayBulk.bulkValues.forEach((vmx) => {
              bulkValues.push(this.fb.control(vmx.value));
            });
            arrayBulks.push(bulkValues);
          }
        });
        group[item.label] = arrayBulks;
      }
    });

    return this.fb.group(group);
  }

  extractValidator(item: Section | NestedValue): ValidatorFn[] {
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
        return (control: { value: unknown }) =>
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
