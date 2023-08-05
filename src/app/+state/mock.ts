export const mockStepper = () =>
  ({
    intro: {
      check: true,
      id: generateRandomId(),
      icon: 'fa_brands:sitrox',
      values: null,
    } as InfoUser,
    infoUser: {
      check: true,
      id: generateRandomId(),
      info: {
        familyNumber: 4,
        roleOfMember: [
          {
            id: 0,
            value: 'Parent',
            check: true,
          },
          {
            id: 1,
            value: 'Child',
            check: false,
          },
        ],
        childrens: 2,
      },
      icon: 'fa_brands:twitter',
    } as InfoUser,
    spendMoney: {
      id: generateRandomId(),
      check: true,
      values: {
        incoming: 5000,
        spendMoney: 3000,
        revenue: 2000,
        categorySpendMoney: [
          {
            id: generateRandomId(),
            value: 100,
            label: 'Groceries',
            scope: [
              {
                id: generateRandomId(),
                label: 'Food',
                check: true,
              },
              {
                id: generateRandomId(),
                label: 'Drinks',
                check: false,
              },
            ],
          },
          {
            id: generateRandomId(),
            value: 500,
            label: 'Entertainment',
            scope: [
              {
                id: generateRandomId(),
                label: 'Movies',
                check: true,
              },
              {
                id: generateRandomId(),
                label: 'Concerts',
                check: false,
              },
            ],
          },
        ],
        recommendations: [
          {
            check: true,
            label: 'Cut down on eating out',
          },
          {
            check: false,
            label: 'Cancel unused subscriptions',
          },
        ],
      },
      icon: 'fa_solid:music',
    } as InfoUser,
    reserveBook: {
      id: generateRandomId(),
      check: true,
      values: {
        id: generateRandomId(),
        graph: {
          id: generateRandomId(),
          values: [
            {
              id: generateRandomId(),
              label: 'Jan',
              start: 500,
              end: 800,
            },
            {
              id: generateRandomId(),
              label: 'Feb',
              start: 800,
              end: 1000,
            },
            {
              id: generateRandomId(),
              label: 'Mar',
              start: 1000,
              end: 1200,
            },
          ],
          howMannyMonth: 3,
        },
        reserve: {
          id: generateRandomId(),
          currentReserve: {
            id: generateRandomId(),
            value: 1000,
            labelCurrency: 'USD',
          },
          recommendationReserve: {
            id: generateRandomId(),
            value: 1200,
            labelCurrency: 'USD',
          },
          howMannyMonth: 6,
        },
        details: {
          id: generateRandomId(),
          check: true,
          values: [
            {
              id: generateRandomId(),
              name: 'Book 1',
              author: 'Author A',
              genre: 'Fiction',
            },
            {
              id: generateRandomId(),
              name: 'Book 2',
              author: 'Author B',
              genre: 'Mystery',
            },
          ],
        },
        modals: {
          setBookType: {
            id: generateRandomId(),
            value: 50,
            labelCurrency: 'USD',
          },
          sumBook: {
            id: generateRandomId(),
            value: 30,
            labelCurrency: 'USD',
          },
        },
      },
      icon: 'fa_brands:codepen',
    } as InfoUser,
    steps: [
      {
        value: 'intro',
        id: generateRandomId(),
        label: 'Intro',
      },
      {
        value: 'infoUser',
        id: generateRandomId(),
        label: 'Info User',
      },
      {
        value: 'spendMoney',
        id: generateRandomId(),
        label: 'Spend Money',
      },
      {
        value: 'reserveBook',
        id: generateRandomId(),
        label: 'ReserveBook',
      },
    ] as Step[],
  } as FormStepper);

// Helper function to generate random strings for ids
export function generateRandomId(): string {
  return Math.random().toString(36).substr(2, 40);
}
export interface Step {
  value: string;
  label: string;
  id: string;
}
export interface FormStepper {
  intro: InfoUser;
  infoUser: InfoUser;
  spendMoney: InfoUser;
  reserveBook: InfoUser;
  steps: Step[];
}

export interface ValuesClass {
  id?: string;
  graph?: Graph;
  reserve?: Reserve;
  details?: InfoUser;
  modals?: Modals;
  incoming?: number;
  spendMoney?: number;
  revenue?: number;
  categorySpendMoney?: CategorySpendMoney[];
  recommendations?: Recommendation[];
}

export interface InfoUser {
  check: boolean;
  id: string;
  info?: Info;
  icon?: string;
  values?: ValuesValue[] | ValuesClass | null;
}

export interface CategorySpendMoney {
  id: string;
  value: number;
  label: string;
  scope: Scope[];
}

export interface Scope {
  id: string;
  label: string;
  check: boolean;
}

export interface Graph {
  id: string;
  values: GraphValue[];
  howMannyMonth: number;
}

export interface GraphValue {
  id: string;
  label: string;
  start: number;
  end: number;
}

export interface Modals {
  setBookType: SetBookType;
  sumBook: SetBookType;
}

export interface SetBookType {
  id: string;
  value: number;
  labelCurrency: string;
}

export interface Recommendation {
  check: boolean;
  label: string;
}

export interface Reserve {
  id: string;
  currentReserve: SetBookType;
  recommendationReserve: SetBookType;
  howMannyMonth: number;
}

export interface ValuesValue {
  id: string;
  name: string;
  author: string;
  genre: string;
}

export interface Info {
  familyNumber: number;
  roleOfMember: RoleOfMember[];
  childrens: number;
}

export interface RoleOfMember {
  id: number;
  value: string;
  check: boolean;
}
