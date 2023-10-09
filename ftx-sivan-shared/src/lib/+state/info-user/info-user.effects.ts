import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as InfoUserActions from './info-user.actions';

@Injectable()
export class InfoUserEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InfoUserActions.initInfoUser),
      switchMap(() =>
        of(InfoUserActions.loadInfoUserSuccess({ infoUser: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(InfoUserActions.loadInfoUserFailure({ error }));
      })
    )
  );
}
