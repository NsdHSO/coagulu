import { createAction, props } from '@ngrx/store';
import { StepperEntity } from './stepper.models';

const prefixStepper = 'Stepper';
export const initStepper = createAction(`[${prefixStepper} Page] Init`);

export const loadStepperSuccess = createAction(
  `[${prefixStepper}/API] Load Stepper Success`,
  props<{
    stepper: StepperEntity[];
  }>()
);

export const loadStepperFailure = createAction(
  `[${prefixStepper}/API] Load Stepper Failure`,
  props<{
    error: any; //eslint-disable-line
  }>()
);

export const formValueChange = createAction(
  `[${prefixStepper}] Form Value change`,
  props<StepperEntity>()
);

export const getSteps = createAction(
  `[${prefixStepper}] Get Steps`,
  props<{
    stepper: {
      entities: StepperEntity;
    };
  }>()
);
