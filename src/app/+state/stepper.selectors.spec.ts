import { StepperEntity } from './stepper.models';
import {
  stepperAdapter,
  StepperPartialState,
  initialStepperState,
} from './stepper.reducer';
import * as StepperSelectors from './stepper.selectors';

describe('Stepper Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getStepperId = (it: StepperEntity) => it.id;
  const createStepperEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as StepperEntity);

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
      const selId = getStepperId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = StepperSelectors.selectEntity(state) as StepperEntity;
      const selId = getStepperId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectStepperLoaded() should return the current "loaded" status', () => {
      const result = StepperSelectors.selectStepperLoaded(state);

      expect(result).toBe(true);
    });

    it('selectStepperError() should return the current "error" state', () => {
      const result = StepperSelectors.selectStepperError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
