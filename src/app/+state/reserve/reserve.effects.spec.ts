import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { ReserveEffects } from './reserve.effects';
import * as ReserveActions from './reserve.actions';

describe('ReserveEffects', () => {
  let actions: Observable<Action>;
  let effects: ReserveEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ReserveEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ReserveEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ReserveActions.initReserve() });

      const expected = hot('-a-|', {
        a: ReserveActions.loadReserveSuccess({ reserve: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
