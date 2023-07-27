import { createAction, props } from '@ngrx/store';
import { StepperEntity } from './stepper.models';

export const initStepper = createAction('[Stepper Page] Init');

export const loadStepperSuccess = createAction(
  '[Stepper/API] Load Stepper Success',
  props<{ stepper: StepperEntity[] }>()
);

export const loadStepperFailure = createAction(
  '[Stepper/API] Load Stepper Failure',
  props<{ error: any }>()
);

export const formValueChange = createAction(
    '[Stepper] Form Value change',
    props<StepperEntity>()
);
