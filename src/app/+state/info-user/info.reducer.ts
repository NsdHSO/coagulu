import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as InfoUserActions from './info-user.actions';
import { InfoUserEntity } from './info-user.models';

export const INFO_USER_FEATURE_KEY = 'infoUser';

export interface InfoUserState extends EntityState<InfoUserEntity> {
  selectedId?: string | number; // which InfoUser record has been selected
  loaded: boolean; // has the InfoUser list been loaded
  error?: string | null; // last known error (if any)
}

export interface InfoUserPartialState {
  readonly [INFO_USER_FEATURE_KEY]: InfoUserState;
}

export const infoUserAdapter: EntityAdapter<InfoUserEntity> =
  createEntityAdapter<InfoUserEntity>();

export const initialInfoUserState: InfoUserState =
  infoUserAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const infoUserReducer = createReducer(
  initialInfoUserState,
  on(InfoUserActions.initInfoUser, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(InfoUserActions.loadInfoUserSuccess, (state, { infoUser }) =>
    infoUserAdapter.setAll(infoUser, { ...state, loaded: true })
  ),
  on(InfoUserActions.loadInfoUserFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(InfoUserActions.infoUserValueChange, (state, { type, ...payload }) => ({
    ...state,
    entities: { ...state.entities, ...payload },
  }))
);

export function infoReducer(state: InfoUserState | undefined, action: Action) {
  return infoUserReducer(state, action);
}
