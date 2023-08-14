import { EnvironmentInjector, inject, Injectable } from '@angular/core';
import {
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
import { GenerativeService } from './generative.service';

@Injectable({
  providedIn: 'root',
})
export class GenerateFormBuilderService {
  private readonly _fb = inject(FormBuilder);
  private readonly _injectGenerative = inject(GenerativeService);
  buildFormFromJson(jsonData: DataFormBuilder): FormGroup {
    console.log(this.buildGroup(jsonData));
    return this.buildGroup(jsonData);
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
      case TypeConstantEnum.MIN_CHAR:
        if (typeof option === TypeConstantEnum.NUMBER) {
          // Check if option is a number
          const numOption = option as number;
          return (control: { value: number }) =>
            String(control.value).length >= numOption ||
            String(control.value).length === 0
              ? null
              : { error: errorMsg || true };
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

  public trackBy<T>(item: number, entity: T) {
    return this._injectGenerative.trackBy(item, entity);
  }

  private buildGroup(data: any): FormGroup {
    const group: { [key: string]: unknown } = {};
    data.values.forEach((item: Section) => {
      if (item.value) {
        group[item.label] = this.getFormControl(item);
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
        const arrayBulks = this._fb.array([]) as any;
        item.bulkValues.forEach((arrayBulk, index: number) => {
          if (!arrayBulk.bulkValues) {
            const bulkValues = this._fb.group({
              value: [arrayBulk.value, this.extractValidator(arrayBulk)],
            });
            arrayBulks.push(bulkValues);
          }
          if (
            arrayBulk &&
            arrayBulk.bulkValues &&
            arrayBulk.bulkValues.length > 0
          ) {
            const bulkValues = this._fb.array([]) as any;
            arrayBulk.bulkValues.forEach((vmx) => {
              bulkValues.push(this.getFormControl(vmx));
            });
            arrayBulks.push(bulkValues);
          }
        });
        group[item.label] = arrayBulks;
      }
    });
    return this._fb.group(group);
  }

  private getFormControl(item: Section | NestedValue) {
    return this._fb.control(item.value, this.extractValidator(item));
  }
}
