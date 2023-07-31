import {
  initialStepperState,
  stepperAdapter,
  StepperPartialState,
} from './stepper.reducer';
import { mockStepper } from './mock';
import * as StepperSelectors from './stepper.selectors';

describe('Stepper Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const createStepperEntity = (id: string, name = '') => ({ ...mockStepper() });

  let state: StepperPartialState;

  beforeEach(() => {
    state = {
      stepper: stepperAdapter.setAll(
        [
          createStepperEntity('PRODUCT-AAA'),
          createStepperEntity('PRODUCT-BBB'),
          createStepperEntity('PRODUCT-CCC'),
        ],
        {
          ...initialStepperState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Stepper Selectors', () => {
    it('selectAllStepper() should return the list of Stepper', () => {
      const results = StepperSelectors.selectAllStepper(state);

      expect([...results].length).toBe(1);
    });
  });
});
