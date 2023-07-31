import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as StepperActions from './stepper.actions';
import { formValueChange } from './stepper.actions';
import { StepperEntity } from './stepper.models';
import { mockStepper } from './mock';

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
    entities: mockStepper(),
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
    stepperAdapter.setAll(stepper, {
      ...state,
      loaded: true,
    })
  ),
  on(StepperActions.loadStepperFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    formValueChange,
    (
      state,
      {
        type, //eslint-disable-line
        ...update
      }
    ) => ({
      ...state,
      entities: { ...state.entities, ...update } as any, //eslint-disable-line
    })
  )
);

export function stepperReducer(
  state: StepperState | undefined,
  action: Action
) {
  return reducer(state, action);
}
