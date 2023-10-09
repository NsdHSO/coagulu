import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  INFO_USER_FEATURE_KEY,
  InfoUserState,
  infoUserAdapter,
} from './info.reducer';

// Lookup the 'InfoUser' feature state managed by NgRx
export const selectInfoUserState = createFeatureSelector<InfoUserState>(
  INFO_USER_FEATURE_KEY
);

const { selectAll, selectEntities } = infoUserAdapter.getSelectors();

export const selectInfoUserLoaded = createSelector(
  selectInfoUserState,
  (state: InfoUserState) => state.loaded
);

export const selectInfoUserError = createSelector(
  selectInfoUserState,
  (state: InfoUserState) => state.error
);

export const selectAllInfoUser = createSelector(
  selectInfoUserState,
  (state: InfoUserState) => selectAll(state)
);

export const selectInfoUserEntities = createSelector(
  selectInfoUserState,
  (state: InfoUserState) => selectEntities(state)
);

export const selectInfoSelectedId = createSelector(
  selectInfoUserState,
  (state: InfoUserState) => state.selectedId
);

export const selectInfoEntity = createSelector(
  selectInfoUserEntities,
  selectInfoSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
