import { Action } from '@ngrx/store';

import * as StepperActions from './stepper.actions';
import { StepperEntity } from './stepper.models';
import {
  initialStepperState,
  stepperReducer,
  StepperState,
} from './stepper.reducer';
import { mockStepper } from './mock';

describe('Stepper Reducer', () => {
  const createStepperEntity = (id: string, name = ''): StepperEntity => ({
    ...mockStepper(),
  });

  describe('valid Stepper actions', () => {
    it('loadStepperSuccess should return the list of known Stepper', () => {
      const stepper = [
        createStepperEntity('PRODUCT-AAA'),
        createStepperEntity('PRODUCT-zzz'),
      ];
      const action = StepperActions.loadStepperSuccess({ stepper });

      const result: StepperState = stepperReducer(initialStepperState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = stepperReducer(initialStepperState, action);

      expect(result).toBe(initialStepperState);
    });
  });
});
