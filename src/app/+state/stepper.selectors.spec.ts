import { StepperPartialState } from './stepper.reducer';
import { mockStepper } from './mock';

describe('Stepper Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const createStepperEntity = (id: string, name = '') => ({ ...mockStepper() });

  let state: StepperPartialState;

  beforeEach(() => {
    // state = {
    //   stepper: stepperAdapter.setAll(
    //     [
    //       createStepperEntity('PRODUCT-AAA'),
    //       createStepperEntity('PRODUCT-BBB'),
    //       createStepperEntity('PRODUCT-CCC'),
    //     ],
    //     {
    //       ...initialStepperState,
    //       selectedId: 'PRODUCT-BBB',
    //       error: ERROR_MSG,
    //       loaded: true,
    //     }
    //   ),
    // };
  });
});
