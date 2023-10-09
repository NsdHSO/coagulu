import { InfoUserEntity } from './info-user.models';
import {
  infoUserAdapter,
  InfoUserPartialState,
  initialInfoUserState,
} from './info.reducer';
import * as InfoUserSelectors from './info-user.selectors';

describe('InfoUser Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getInfoUserId = (it: InfoUserEntity) => it.id;
  const createInfoUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as InfoUserEntity);

  let state: InfoUserPartialState;

  beforeEach(() => {
    state = {
      infoUser: infoUserAdapter.setAll(
        [
          createInfoUserEntity('PRODUCT-AAA'),
          createInfoUserEntity('PRODUCT-BBB'),
          createInfoUserEntity('PRODUCT-CCC'),
        ],
        {
          ...initialInfoUserState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('InfoUser Selectors', () => {
    it('selectAllInfoUser() should return the list of InfoUser', () => {
      const results = InfoUserSelectors.selectAllInfoUser(state);
      const selId = getInfoUserId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectEntity() should return the selected Entity', () => {
      const result = InfoUserSelectors.selectInfoEntity(
        state
      ) as InfoUserEntity;
      const selId = getInfoUserId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('selectInfoUserLoaded() should return the current "loaded" status', () => {
      const result = InfoUserSelectors.selectInfoUserLoaded(state);

      expect(result).toBe(true);
    });

    it('selectInfoUserError() should return the current "error" state', () => {
      const result = InfoUserSelectors.selectInfoUserError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
