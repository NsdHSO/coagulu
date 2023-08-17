import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  RESERVE_FEATURE_KEY,
  reserveAdapter,
  ReserveState,
} from './reserve.reducer';

// Lookup the 'Reserve' feature state managed by NgRx
export const selectReserveState =
  createFeatureSelector<ReserveState>(RESERVE_FEATURE_KEY);

const { selectAll, selectEntities } = reserveAdapter.getSelectors();

export const selectReserveLoaded = createSelector(
  selectReserveState,
  (state: ReserveState) => state.loaded
);

export const selectReserveError = createSelector(
  selectReserveState,
  (state: ReserveState) => state.error
);

export const selectAllReserve = createSelector(
  selectReserveState,
  (state: ReserveState) => selectAll(state)
);

export const selectReserveEntities = createSelector(
  selectReserveState,
  (state: ReserveState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectReserveState,
  (state: ReserveState) => state.selectedId
);

export const selectEntity = createSelector(
  selectReserveEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
