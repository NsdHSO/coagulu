import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { ProgressComponent } from './progress.component';
import { interval, map, of, startWith } from 'rxjs';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { IconCoreModule } from 'ngx-liburg-icon';
import { AsyncPipe } from '@angular/common';

export default {
  title: 'ProgressComponent',
  component: ProgressComponent,
  decorators: [
    moduleMetadata({
      imports: [ProgressComponent, MatIconModule, IconCoreModule, AsyncPipe],
      providers: [
        provideAnimations(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                stepper: [{ icon: 'fa_solid:RO' }, { icon: 'fa_solid:CR' }],
                actions: [
                  { disable: of(true), name: 'Pause' },
                  {
                    disable: (() =>
                      interval(2500).pipe(
                        map((v) => v % 2 === 0),
                        startWith(false)
                      ))(),
                    name: 'Continue',
                  },
                ],
              } as unknown,
            },
          } as ActivatedRoute as never,
        },
      ],
    }),
    applicationConfig({
      providers: [
        importProvidersFrom(HttpClientModule),
        provideRouter([
          {
            path: '',
            loadComponent: () =>
              import('./../input/sivan-input.component').then(
                (c) => c.SivanInputComponent
              ),
          },
        ]),
      ],
    }),
  ],
  tags: ['autodocs'],
} as Meta<ProgressComponent>;
const Template: Story<ProgressComponent> = (args: ProgressComponent) => ({
  props: args,
});
export const WorkBack = Template.bind({});
WorkBack.args = {};
