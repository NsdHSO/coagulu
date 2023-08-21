import { inject, Injectable } from '@angular/core';
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
} from '../interfaces';
import { TypeConstantEnum } from '../utils';
import { ValidatorService } from './validator.service';

@Injectable({
  providedIn: 'root',
})
export class GenerateFormBuilderService {
  private readonly _fb = inject(FormBuilder);
  private readonly _validatorService = inject(ValidatorService);

  buildFormFromJson(jsonData: DataFormBuilder): any {
    console.log(this.buildFormGenerate(jsonData));
    return this.buildFormGenerate(jsonData);
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

  // eslint-disable-next-line
  getValidator(validatorConfig: Validator): ValidatorFn | any {
    const { type, option, errorMsg } = validatorConfig;
    switch (type) {
      case TypeConstantEnum.REQUIRED:
        return (control: FormControl) =>
          this._validatorService.requiredValidator(control, errorMsg);
      case TypeConstantEnum.MIN:
        if (typeof option === TypeConstantEnum.NUMBER) {
          const numOption = option as number;
          return (control: FormControl) =>
            this._validatorService.minValidator(control, numOption, errorMsg);
        } else {
          throw new Error('Other Error extract validator'); // Handle other
          // cases or throw an error
        }
      case TypeConstantEnum.MIN_CHAR:
        if (typeof option === TypeConstantEnum.NUMBER) {
          // Check if option is a number
          const numOption = option as number;
          return (control: FormControl) =>
            this._validatorService.minCharValidator(
              control,
              numOption,
              errorMsg
            );
        } else {
          throw new Error('Other Error extract validator'); // Handle other
          // cases or throw an error
        }
      case TypeConstantEnum.PATTERN:
        if (
          typeof option === TypeConstantEnum.STRING ||
          option instanceof RegExp
        ) {
          return (control: FormControl) =>
            this._validatorService.patternValidator(control, option, errorMsg);
        } else {
          throw new Error('Invalid option for pattern validator');
        }
      case TypeConstantEnum.EMAIL:
        return (control: FormControl) =>
          this._validatorService.emailValidator(control, errorMsg);
      // Add more cases for other validator types as needed
      default:
        // Return null for unknown validator types
        throw new Error('Please Implement this Validator');
    }
  }

  buildFormGenerate(
    data: DataFormBuilder
  ): FormGroup | FormArray | FormControl {
    if (data.values) {
      //eslint-disable-next-line
      const group: { [key: string]: any } = {};
      data.values.forEach((item) => {
        const label = item.label?.toLowerCase();
        if (item.values) {
          group[label ?? ''] = this.buildFormGenerate(item);
        } else if (item.bulkValues) {
          group[label ?? ''] = this._fb.array(
            item.bulkValues.map((subItem) => this.buildFormGenerate(subItem))
          );
        } else {
          const validators = this.extractValidator(item);
          group[label ?? ''] = this._fb.control(item.value || null, validators);
        }
      });
      return this._fb.group(group);
    } else if (data.bulkValues) {
      return this._fb.array(
        data.bulkValues.map((subItem) => this.buildFormGenerate(subItem))
      );
    } else {
      const validators = this.extractValidator(data);
      return this._fb.control(data.value || null, validators);
    }
  }
}
