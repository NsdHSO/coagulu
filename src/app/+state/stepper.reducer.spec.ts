import * as StepperActions from './stepper.actions';
import {
  initialStepperState,
  stepperReducer,
  StepperState,
} from './stepper.reducer';

describe('Stepper Reducer', () => {
  describe('valid Stepper actions', () => {
    it('loadStepperSuccess should return the list of known Stepper', () => {
      const result: StepperState = stepperReducer(
        initialStepperState,
        StepperActions.initStepper
      );

      expect({ ...(result.entities['infoUser'] as any) }.check).toBe(true);
    });
  });
});
