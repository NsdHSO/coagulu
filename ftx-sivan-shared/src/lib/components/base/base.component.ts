import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormControlName,
  NgControl,
} from '@angular/forms';
import { TypeInput } from 'ngx-ftx-forms';

@Component({ template: '' })
export abstract class BaseComponent {
  @Input({ required: true }) public control!:
    | NgControl
    | FormControl
    | FormControlName
    | any;
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) hintTop!: string;
  @Input() typeInput: TypeInput = 'text';

  get controls(): FormControl {
    return this.control;
  }
}
