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

      expect(
        {
          ...(result.entities['infoUser'] as unknown as {
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
          }),
        }.check
      ).toBe(true);
    });
  });
});
