import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  isFormArray,
  isFormGroup,
  ValidatorFn,
} from '@angular/forms';
import { DataFormBuilder, ValidatorConfig } from '../interfaces';
import { ValidatorService } from './validator.service';

@Injectable({
  providedIn: 'root',
})
export class GenerateFormBuilderService {
  private readonly _fb = inject(FormBuilder);
  private readonly _validatorService = inject(ValidatorService);

  buildFormFromJson(
    jsonData: DataFormBuilder
  ): FormGroup | FormArray | FormControl {
    console.log(this.buildFormGenerate(jsonData));
    return this.buildFormGenerate(jsonData);
  }

  extractValidator(item: DataFormBuilder): ValidatorFn[] {
    let validators: ValidatorFn[] = [];
    if (item.validators && item.validators.length > 0) {
      validators = item.validators.map((validatorConfig) =>
        this.getValidator(validatorConfig)
      );
    }
    return validators;
  }

  getValidator(validatorConfig: ValidatorConfig): ValidatorFn {
    const { type, option, errorMsg } = validatorConfig;
    // Use the validatorGenerators function to generate validators
    const validatorGenerator = this._validatorService.validatorGenerators();
    if (type in validatorGenerator) {
      return (control: unknown) =>
        validatorGenerator[type](
          control as FormControl,
          option,
          errorMsg ?? ''
        );
    } else {
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
          group[label ?? ''] = this.setFormControl(item, validators);
        }
      });
      return this._fb.group(group);
    } else if (data.bulkValues) {
      return this._fb.array(
        data.bulkValues.map((subItem) => this.buildFormGenerate(subItem))
      );
    } else {
      const validators = this.extractValidator(data);
      return this.setFormControl(data, validators);
    }
  }

  setFormControl(data: DataFormBuilder, validators: ValidatorFn[]) {
    return this._fb.control(data.value || null, {
      validators: validators,
      updateOn: data.updateOn,
    });
  }

  getCustomFromControlType(control: AbstractControl<unknown>): string {
    if (isFormArray(control)) {
      return 'FormArray';
    }
    if (isFormGroup(control)) {
      return 'FormGroup';
    }
    return 'FormControl';
  }
}
