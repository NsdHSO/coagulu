import { Action } from '@ngrx/store';

import * as InfoUserActions from './info-user.actions';
import { InfoUserEntity } from './info-user.models';
import {
  InfoUserState,
  initialInfoUserState,
  infoReducer,
} from './info.reducer';

describe('InfoUser Reducer', () => {
  const createInfoUserEntity = (id: string, name = ''): InfoUserEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid InfoUser actions', () => {
    it('loadInfoUserSuccess should return the list of known InfoUser', () => {
      const infoUser = [
        createInfoUserEntity('PRODUCT-AAA'),
        createInfoUserEntity('PRODUCT-zzz'),
      ];
      const action = InfoUserActions.loadInfoUserSuccess({ infoUser });

      const result: InfoUserState = infoReducer(initialInfoUserState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = infoReducer(initialInfoUserState, action);

      expect(result).toBe(initialInfoUserState);
    });
  });
});
