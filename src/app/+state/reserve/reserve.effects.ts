import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as ReserveActions from './reserve.actions';
@Injectable()
export class ReserveEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ReserveActions.initReserve),
      switchMap(() => of(ReserveActions.loadReserveSuccess({ reserve: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(ReserveActions.loadReserveFailure({ error }));
      })
    )
  );
}
