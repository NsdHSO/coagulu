import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as StepperActions from './stepper.actions';
import { StepperEffects } from './stepper.effects';

describe('StepperEffects', () => {
  let actions: Observable<Action>;
  let effects: StepperEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        StepperEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(StepperEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: StepperActions.initStepper() });

      const expected = hot('-a-|', {
        a: StepperActions.loadStepperSuccess({ stepper: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
