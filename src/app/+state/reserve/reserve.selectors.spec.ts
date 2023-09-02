import { ReserveEntity } from './reserve.models';
import {
  initialReserveState,
  reserveAdapter,
  ReservePartialState,
} from './reserve.reducer';
import * as ReserveSelectors from './reserve.selectors';

describe('Reserve Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getReserveId = (it: ReserveEntity) => it.id;
  const createReserveEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ReserveEntity);

  let state: ReservePartialState;

  beforeEach(() => {
    state = {
      reserve: reserveAdapter.setAll(
        [
          createReserveEntity('PRODUCT-AAA'),
          createReserveEntity('PRODUCT-BBB'),
          createReserveEntity('PRODUCT-CCC'),
        ],
        {
          ...initialReserveState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Reserve Selectors', () => {
    it('selectAllReserve() should return the list of Reserve', () => {
      const results = ReserveSelectors.selectAllReserve(state);
      const selId = getReserveId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = ReserveSelectors.selectEntity(state) as ReserveEntity;
      const selId = getReserveId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectReserveLoaded() should return the current "loaded" status', () => {
      const result = ReserveSelectors.selectReserveLoaded(state);

      expect(result).toBe(true);
    });

    it('selectReserveError() should return the current "error" state', () => {
      const result = ReserveSelectors.selectReserveError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
