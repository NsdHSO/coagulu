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
}

export interface SubSection {
  label: string;
  values?: NestedValue[];
  value?: string | null | number;
  validators?: Validator[];
}

export interface Section {
  label: string;
  value?: number | string;
  values?: SubSection[];
  validators?: Validator[];
  bulkValues?: NestedValue[];
}

export interface DataFormBuilder {
  values: Section[];
}
