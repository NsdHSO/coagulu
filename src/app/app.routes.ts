import { NavigationEnd, Route, Router } from '@angular/router';
import { inject } from '@angular/core';
import { catchError, filter, map, of, tap } from 'rxjs';
import { StepperService } from './components/services/stepper.service';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./components/stepper/stepper.component').then(
        (c) => c.StepperComponent
      ),
    resolve: [
      () => {
        const stepperService = inject(StepperService);
        const router = inject(Router);
        router.events
          .pipe(
            filter((event: any) => event instanceof NavigationEnd),
            map((v: NavigationEnd) => v.url.split('/')[1]),
            tap((url) => stepperService.flagUrl$.next(url)),
            catchError((err) => {
              console.warn(err);
              return of(false); // If there's an error, prevent navigation by returning false
            })
          )
          .subscribe();
      },
    ],
    children: [
      {
        path: 'intro',
        loadComponent: () =>
          import('./components/contentSteps/intro/intro.component').then(
            (c) => c.IntroComponent
          ),
      },
      {
        path: 'infoUser',
        loadComponent: () =>
          import('./components/contentSteps/infoUser/info-user.component').then(
            (c) => c.InfoUserComponent
          ),
      },
      {
        path: 'spendMoney',
        loadComponent: () =>
          import(
            './components/contentSteps/spendMoney/spend-money.component'
          ).then((c) => c.SpendMoneyComponent),
      },
      {
        path: 'reserveBook',
        loadComponent: () =>
          import(
            './components/contentSteps/reserveBook/reserve-book.component'
          ).then((c) => c.ReserveBookComponent),
      },
      {
        path: '**',
        redirectTo: 'intro',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
