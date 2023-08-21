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

  getValidator(validatorConfig: Validator): ValidatorFn {
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
