import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ReserveEntity } from './reserve.models';
import * as ReserveActions from './reserve.actions';

export const RESERVE_FEATURE_KEY = 'reserve';

export interface ReserveState extends EntityState<ReserveEntity> {
  selectedId?: string | number; // which Reserve record has been selected
  loaded: boolean; // has the Reserve list been loaded
  error?: string | null; // last known error (if any)
}

export interface ReservePartialState {
  readonly [RESERVE_FEATURE_KEY]: ReserveState;
}

export const reserveAdapter: EntityAdapter<ReserveEntity> =
  createEntityAdapter<ReserveEntity>();
export const initialReserveState: ReserveState = reserveAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);
const reducer = createReducer(
  initialReserveState,
  on(ReserveActions.initReserve, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ReserveActions.loadReserveSuccess, (state, { reserve }) =>
    reserveAdapter.setAll(reserve, { ...state, loaded: true })
  ),
  on(ReserveActions.loadReserveFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(
    ReserveActions.formValueChangeReserve,
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

export function reserveReducer(
  state: ReserveState | undefined,
  action: Action
) {
  return reducer(state, action);
}
