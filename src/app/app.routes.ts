import {Route} from '@angular/router';

export const appRoutes: Route[] = [{
    path : '',
    loadComponent : () => import('./components/stepper/stepper.component').then(c => c.StepperComponent)
}, {
    path : '**',
    redirectTo : ''
}];
