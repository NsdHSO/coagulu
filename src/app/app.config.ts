import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromStepper from 'ngx-ftx-shared';
import * as fromReserve from 'ngx-ftx-shared';
import * as fromInfoUser from 'ngx-ftx-shared';
import {
  InfoUserEffects,
  ReserveEffects,
  StepperEffects,
} from 'ngx-ftx-shared';
import { IconCoreModule } from 'ngx-liburg-icon';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(InfoUserEffects),
    provideState(fromInfoUser.INFO_USER_FEATURE_KEY, fromInfoUser.infoReducer),
    provideEffects(ReserveEffects),
    provideState(fromReserve.RESERVE_FEATURE_KEY, fromReserve.reserveReducer),
    provideEffects(StepperEffects),
    provideStore(),
    provideState(fromStepper.STEPPER_FEATURE_KEY, fromStepper.stepperReducer),
    provideStoreDevtools({ maxAge: 25 }),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(IconCoreModule),
    provideAnimations(),
  ],
};
