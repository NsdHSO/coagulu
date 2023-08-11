export interface Validator {
  type: string;
  option?: unknown;
  errorMsg?: string;
}

export interface NestedValue {
  value: string;
  validators?: Validator[];
  label?: string;
}

export interface SubSection {
  label: string;
  values?: NestedValue[];
  value?: string | null | number;
}

export interface Section {
  label: string;
  value?: number | string;
  values?: SubSection[] | any;
  validators?: Validator[];
}

export interface DataFormBuilder {
  values: Section[];
}
