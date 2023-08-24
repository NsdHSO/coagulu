import { TypeConstantEnum } from '../utils';

export interface ValidatorConfig {
  type: TypeConstantEnum;
  option?: any;
  errorMsg?: string;
}

export interface ValueToggle {
  value: boolean;
  description: string;
}

export interface DataFormBuilder {
  label?: string;
  labelHint?: string;
  value?: any;
  typeInput?: TypeInput;
  values?: DataFormBuilder[];
  bulkValues?: DataFormBuilder[];
  valueToggleShow?: ValueToggle[];
  validators?: ValidatorConfig[];
  placeholder?: string;
}

export type TypeInput =
  | 'boolean'
  | 'toggle'
  | 'area'
  | 'currency'
  | 'dropdown'
  | 'date'
  | 'date-interval';
