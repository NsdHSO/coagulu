import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as StepperActions from './stepper.actions';
import * as StepperFeature from './stepper.reducer';

@Injectable()
export class StepperEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StepperActions.initStepper),
      switchMap(() => of(StepperActions.loadStepperSuccess({ stepper: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(StepperActions.loadStepperFailure({ error }));
      })
    )
  );
}
