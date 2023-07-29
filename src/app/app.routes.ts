import {Route} from '@angular/router';

export const appRoutes: Route[] = [
    {
        path : '',
        loadComponent : () => import('./components/stepper/stepper.component').then(c => c.StepperComponent),
        children : [
            {
                path : 'intro',
                loadComponent : () => import('./components/contentSteps/intro/intro.component').then(c => c.IntroComponent),
            },
            {
                path : 'infoUser',
                loadComponent : () => import('./components/contentSteps/infoUser/info-user.component').then(c => c.InfoUserComponent),
            },
            {
                path : 'spendMoney',
                loadComponent : () => import('./components/contentSteps/spendMoney/spend-money.component').then(c => c.SpendMoneyComponent),
            },
            {
                path : 'reserveBook',
                loadComponent : () => import('./components/contentSteps/reserveBook/reserve-book.component').then(c => c.ReserveBookComponent),
            },
            {
                path : '**',
                redirectTo : 'intro',
            }],
    },
    {
        path : '**',
        redirectTo : '',
    }];
