import { Component, Input } from '@angular/core';
import { FormControl, FormControlName, NgControl } from '@angular/forms';
import { TypeInput } from '../../interfaces';

@Component({ template: '' })
export abstract class BaseComponent {
  @Input({ required: true }) public control!:
    | NgControl
    | FormControl
    | FormControlName
    // eslint-disable-next-line
    | any;
  @Input({ required: true }) placeholder!: string;
  @Input({ required: true }) hintTop!: string;
  @Input() typeInput: TypeInput = 'text';

  get controls(): FormControl {
    return this.control;
  }
}
