export interface Validator {
  type: string;
  option?: unknown;
  errorMsg?: string;
}

export interface NestedValue {
  value?: unknown;
  validators?: Validator[];
  label?: string;
  bulkValues?: NestedValue[];
  placeholder?: string;
  labelHint?: string;
  valueToggleShow?: { value: boolean; description: string }[];
  typeInput?: string;
}

export interface SubSection {
  label: string;
  values?: NestedValue[];
  value?: string | null | number;
  validators?: Validator[];
  placeholder?: string;
  labelHint?: string;
  valueToggleShow?: { value: boolean; description: string }[];
  typeInput?: string;
}

export interface Section {
  label: string;
  value?: number | string | boolean;
  values?: SubSection[];
  validators?: Validator[];
  bulkValues?: NestedValue[];
  placeholder?: string;
  labelHint: string;
  typeInput?: string;
  valueToggleShow?: { value: boolean; description: string }[];
}

export interface DataFormBuilder {
  values: Section[];
}
