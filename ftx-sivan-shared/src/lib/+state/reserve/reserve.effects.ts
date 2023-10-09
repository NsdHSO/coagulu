import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, switchMap } from 'rxjs';
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
