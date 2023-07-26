/**
 * Interface for the 'Stepper' data
 */
export interface StepperEntity {
    intro: {
        check: boolean
        id: number
    }
    infoUser: {
        check: boolean
        id: number
        values: {
            familyNumber: number,
            roleOfMember: [{
                id: number,
                value: string,
                check: boolean
            }],
            childrens: number
        }
    },
    spendMoney: {
        check: boolean
        id: number
        values: {
            incoming: number,
            spendMoney: number,
            revenue: number,
            categorySpendMoney: [{
                id: number
                value: number,
                label: string,
                scope: [{
                    label: string,
                    check: boolean
                    id: number
                }]
            }]
        }
    },
}
