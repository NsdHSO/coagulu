import { TypeConstantEnum, TypePattern, TypeUpdate } from '../utils';

export interface ValidatorConfig {
  type: TypeConstantEnum;
  option?: TypePattern | number;
  errorMsg?: string;
}

export interface ValueToggle {
  value: boolean;
  description: string;
}

export interface DataFormBuilder {
  label?: string;
  labelHint?: string;
  value?: unknown;
  typeInput?: TypeInput;
  values?: DataFormBuilder[];
  bulkValues?: DataFormBuilder[];
  valueToggleShow?: ValueToggle[];
  validators?: ValidatorConfig[];
  placeholder?: string;
  description?: DescriptionEntity;
  updateOn?: TypeUpdate;
  validator?: ValidatorChecker;
}
export interface ValidatorChecker {
  field: string;
}
export interface DescriptionEntity {
  text: string;
  icon?: string;
}
export type TypeInput =
  | 'boolean'
  | 'toggle'
  | 'area'
  | 'currency'
  | 'dropdown'
  | 'date'
  | 'date-interval';
