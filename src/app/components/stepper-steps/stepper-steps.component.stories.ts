import { applicationConfig, Meta, moduleMetadata } from '@storybook/angular';
import { StepperStepsComponent } from './stepper-steps.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { MatRippleModule } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { StepperService } from '../services/stepper.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from '../../app.routes';
import { IconCoreModule } from 'ngx-liburg-icon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { importProvidersFrom } from '@angular/core';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';

export default {
  title: 'StepperStepsComponent',
  component: StepperStepsComponent,
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(BrowserAnimationsModule),
        importProvidersFrom(IconCoreModule),
        provideAnimations(),
      ],
    }),
    moduleMetadata({
      imports: [
        CommonModule,
        MatIconModule,
        RouterLink,
        ButtonComponent,
        MatRippleModule,
        AsyncPipe,
        RouterTestingModule.withRoutes(appRoutes),
        IconCoreModule,
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => of(''),
          },
        },
        {
          provide: StepperService,
          useValue: {
            flagUrl$: of('Ivan'),
          },
        },
        {
          provide: HttpClientModule,
          useValue: {
            fetchIcon: () => {},
            loadSvgIconSetFromConfig: () => {},
          },
        },
      ],
    }),
  ],
} as Meta<StepperStepsComponent>;

export const Primary = {
  render: (args: StepperStepsComponent) => ({
    props: args,
  }),
  args: {
    vm: {
      intro: {
        icon: 'fa_brands:sitrox',
      },
      retrieve: {
        icon: 'fa_brands:sitrox',
      },
      steps: [
        {
          value: 'intro',
          id: 1,
          label: 'intro',
        },
        {
          value: 'retrieve',
          id: 2,
          label: 'intro',
        },
      ],
    },
  },
};
