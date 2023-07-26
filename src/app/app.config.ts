import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromStepper from './+state/stepper.reducer';
import { StepperEffects } from './+state/stepper.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(StepperEffects),
    provideState(fromStepper.STEPPER_FEATURE_KEY, fromStepper.stepperReducer),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
  ],
};
