import { Injectable } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { TypeConstantEnum } from '../utils';

type ValidatorGenerator = (
  control: FormControl | FormControl<unknown>,
  option: any,
  errorMsg: string
) => any;
@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  requiredValidator(control: AbstractControl, errorMsg?: string): any {
    return control.value
      ? null
      : { error: errorMsg || 'This field Is must' || true };
  }

  minValidator(control: AbstractControl, option: number, errorMsg?: string) {
    return control.value >= option ? null : { error: errorMsg || true };
  }

  minCharValidator(
    control: AbstractControl,
    option: number,
    errorMsg?: string
  ) {
    return String(control.value).length >= option ||
      String(control.value).length === 0
      ? null
      : { error: errorMsg || true };
  }

  patternValidator(
    control: FormControl,
    option: unknown,
    errorMsg?: string | undefined
  ) {
    const pattern =
      typeof option === 'string'
        ? new RegExp(option as string)
        : (option as RegExp);
    return pattern instanceof RegExp
      ? pattern.test(control.value)
        ? null
        : { error: errorMsg || true }
      : null;
  }

  emailValidator(control: FormControl, errorMsg?: string): any {
    if (!control.value) {
      return null;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(control.value)
      ? null
      : { error: errorMsg || true };
  }
  validatorGenerators(): { [key: string]: ValidatorGenerator } {
    return {
      [TypeConstantEnum.REQUIRED]: (control, _, errorMsg) =>
        control.value ? null : { error: errorMsg || true },
      [TypeConstantEnum.MIN]: (control, option, errorMsg) => {
        if (typeof option === 'number') {
          return this.minValidator(control, option, errorMsg);
        } else {
          throw new Error('Other Error extract validator');
        }
      },
      [TypeConstantEnum.MIN_CHAR]: (control, option, errorMsg) => {
        if (typeof option === 'number') {
          return this.minCharValidator(control, option, errorMsg);
        } else {
          throw new Error('Other Error extract validator');
        }
      },
      [TypeConstantEnum.PATTERN]: (control, option, errorMsg) => {
        if (typeof option === 'string' || option instanceof RegExp) {
          return this.patternValidator(control, option, errorMsg);
        } else {
          throw new Error('Invalid option for pattern validator');
        }
      },
      [TypeConstantEnum.EMAIL]: (control, _, errorMsg) => {
        return this.emailValidator(control, errorMsg);
      },
      // Add more cases for other validator types as needed
    };
  }
}
