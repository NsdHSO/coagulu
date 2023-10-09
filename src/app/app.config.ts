import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromStepper from './+state/stepper.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { IconCoreModule } from 'ngx-liburg-icon';
import { provideAnimations } from '@angular/platform-browser/animations';
import * as fromReserve from './+state/reserve/reserve.reducer';
import { ReserveEffects, StepperEffects } from './+state';
import * as fromInfoUser from './+state/info-user/info.reducer';
import { InfoUserEffects } from './+state/info-user/info-user.effects';

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
