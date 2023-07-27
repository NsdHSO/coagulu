import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';
import {appRoutes} from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import * as fromStepper from './+state/stepper.reducer';
import {StepperEffects} from './+state/stepper.effects';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {IconCoreModule} from "ngx-liburg-icon";
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers : [
    provideEffects(StepperEffects),
    provideStore(),
    provideState(fromStepper.STEPPER_FEATURE_KEY, fromStepper.stepperReducer),
    provideStoreDevtools({ maxAge: 25 }),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(IconCoreModule),
    provideAnimations()
],
};
