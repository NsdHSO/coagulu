import { Action } from '@ngrx/store';
import { ReserveEntity } from './reserve.models';
import {
  initialReserveState,
  reserveReducer,
  ReserveState,
} from './reserve.reducer';
import * as ReserveActions from './reserve.actions';

describe('Reserve Reducer', () => {
  const createReserveEntity = (id: string, name = ''): ReserveEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Reserve actions', () => {
    it('loadReserveSuccess should return the list of known Reserve', () => {
      const reserve = [
        createReserveEntity('PRODUCT-AAA'),
        createReserveEntity('PRODUCT-zzz'),
      ];
      const action = ReserveActions.loadReserveSuccess({ reserve });

      const result: ReserveState = reserveReducer(initialReserveState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reserveReducer(initialReserveState, action);

      expect(result).toBe(initialReserveState);
    });
  });
});
