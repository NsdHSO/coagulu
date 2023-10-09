import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  STEPPER_FEATURE_KEY,
  stepperAdapter,
  StepperState,
} from './stepper.reducer';
import { getSteps } from './stepper.actions';
import { StepperEntity } from './stepper.models';
// Lookup the 'Stepper' feature state managed by NgRx
export const selectStepperState =
  createFeatureSelector<StepperState>(STEPPER_FEATURE_KEY);

const { selectAll, selectEntities } = stepperAdapter.getSelectors();

export const selectStepperLoaded = createSelector(
  selectStepperState,
  (state: StepperState) => state.loaded
);

export const selectStepperError = createSelector(
  selectStepperState,
  (state: StepperState) => state.error
);

export const selectAllStepper = createSelector(
  selectStepperState,
  (state: StepperState) => selectAll(state)
);

export const selectStepperEntities = createSelector(
  selectStepperState,
  (state: StepperState) => selectEntities(state)
);

export const selectStepsEntities = createSelector(
  getSteps,
  (state: {
    stepper: {
      entities: StepperEntity;
    };
  }) => state.stepper.entities.steps
);
