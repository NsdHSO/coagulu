import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as StepperActions from './stepper.actions';
import { StepperEntity } from './stepper.models';

export const STEPPER_FEATURE_KEY = 'stepper';

export interface StepperState extends EntityState<StepperEntity> {
  selectedId?: string | number; // which Stepper record has been selected
  loaded: boolean; // has the Stepper list been loaded
  error?: string | null; // last known error (if any)
}

export interface StepperPartialState {
  readonly [STEPPER_FEATURE_KEY]: StepperState;
}

export const stepperAdapter: EntityAdapter<StepperEntity> =
  createEntityAdapter<StepperEntity>();

export const initialStepperState: StepperState = stepperAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const reducer = createReducer(
  initialStepperState,
  on(StepperActions.initStepper, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(StepperActions.loadStepperSuccess, (state, { stepper }) =>
    stepperAdapter.setAll(stepper, { ...state, loaded: true })
  ),
  on(StepperActions.loadStepperFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function stepperReducer(
  state: StepperState | undefined,
  action: Action
) {
  return reducer(state, action);
}
