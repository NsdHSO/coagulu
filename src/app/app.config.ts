import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as fromShared from 'ngx-ftx-shared';
import { IconCoreModule } from 'ngx-liburg-icon';
import { appRoutes } from './app.routes';

const { InfoUserEffects, ReserveEffects, StepperEffects, ...storeExports } =
  fromShared;
export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(InfoUserEffects),
    provideState(storeExports.INFO_USER_FEATURE_KEY, storeExports.infoReducer),
    provideEffects(ReserveEffects),
    provideState(storeExports.RESERVE_FEATURE_KEY, storeExports.reserveReducer),
    provideEffects(StepperEffects),
    provideStore(),
    provideState(storeExports.STEPPER_FEATURE_KEY, storeExports.stepperReducer),
    provideStoreDevtools({ maxAge: 25 }),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(IconCoreModule),
    provideAnimations(),
  ],
};
