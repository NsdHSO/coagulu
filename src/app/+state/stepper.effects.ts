import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
import * as StepperActions from './stepper.actions';

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
