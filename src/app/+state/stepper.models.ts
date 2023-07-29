/**
 * Interface for the 'Stepper' data
 */
export interface StepperEntity {
  steps: {
    value: string;
    label: string;
    id: string;
  }[];
  intro: {
    icon: string;
    check: boolean;
    id: string;
    values: Label[] | null;
  };
  infoUser: {
    check: boolean;
    icon: string;
    id: string;
    values: {
      familyNumber: number;
      roleOfMember: {
        id: string;
        value: string;
        check: boolean;
      }[];
      childrens: number;
    };
  };
  spendMoney: {
    id: string;
    icon: string;
    check: boolean;
    values: {
      incoming: number;
      spendMoney: number;
      revenue: number;
      categorySpendMoney: {
        id: string;
        value: number;
        label: string;
        scope: {
          id: string;
          label: string;
          check: boolean;
        }[];
      }[];
      recommendations: {
        check: boolean;
        label: string;
      }[];
    };
  };
  // Exteotera graph
  reserveBook: {
    icon: string;
    id: string;
    check: boolean;
    values: {
      id: string;
      graph: {
        id: string;
        values: {
          id: string;
          label: string;
          start: number;
          end: number;
        }[];
        howMannyMonth: number;
      };
      reserve: {
        id: string;
        currentReserve: Label;
        recommendationReserve: Label;
        howMannyMonth: number;
      };
      details: {
        id: string;
        check: boolean;
        values: BookDetail[];
      };
      modals: {
        setBookType: Label;
        sumBook: Label;
      };
    };
  };
}

export interface Label {
  id: string;
  value: number;
  labelCurrency: string;
}

export interface StepperValues {
  id: string;
  values: any;
  check: boolean;
  icon: string;
}

export interface BookDetail {
  id: string;
  name: string;
  author: string;
  subBook?: {
    label: Label;
    edit: boolean;
    delete: boolean;
  };
}
