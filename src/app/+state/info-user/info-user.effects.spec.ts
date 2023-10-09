import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import * as InfoUserActions from './info-user.actions';
import { InfoUserEffects } from './info-user.effects';

describe('InfoUserEffects', () => {
  let actions: Observable<Action>;
  let effects: InfoUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        InfoUserEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(InfoUserEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: InfoUserActions.initInfoUser() });

      const expected = hot('-a-|', {
        a: InfoUserActions.loadInfoUserSuccess({ infoUser: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
