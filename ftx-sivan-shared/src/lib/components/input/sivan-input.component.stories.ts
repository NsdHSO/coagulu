import {
  applicationConfig,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { SivanInputComponent } from './sivan-input.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IconCoreModule } from 'ngx-liburg-icon';
import { GenerativeService } from '../../service';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FtxTooltipComponent } from 'ngx-fts-tooltip';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OutlineDirective } from '../../directive';
import { of } from 'rxjs';

export default {
  title: 'SivanInputComponent',
  component: SivanInputComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatIconModule,
        CommonModule,
        IconCoreModule,
        BrowserAnimationsModule,
        FtxTooltipComponent,
        FormsModule,
        ReactiveFormsModule,
        OutlineDirective,
      ],
      providers: [
        {
          provide: GenerativeService,
          useValue: { trackBy: () => 2 },
        },
        provideAnimations(),
      ],
    }),
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)],
    }),
  ],
  tags: ['autodocs'],
} as Meta<SivanInputComponent>;
const Template: Story<SivanInputComponent> = (args: SivanInputComponent) => ({
  props: args,
});
export const WorkBack = Template.bind({});
WorkBack.args = {
  placeholder: 'success', // Set the default value to 'success'
  mainControl: {
    valueChanges: of('tes'),
    value: 'tes',
    error: true,
    _registerOnCollectionChange: () => true,
    registerOnChange: () => true,
    registerOnDisabledChange: () => true,
    _unregisterOnChange: () => true,
  },
};
export const Currency = Template.bind({});
Currency.args = {
  placeholder: 'success', // Set the default value to 'success'
  mainControl: {
    valueChanges: of('tes'),
    value: 'tes',
    error: true,
    _registerOnCollectionChange: () => true,
    registerOnChange: () => true,
    registerOnDisabledChange: () => true,
    _unregisterOnChange: () => true,
  },
  currencyControl: {
    valueChanges: of('tes'),
    value: 'tes',
    error: true,
    _registerOnCollectionChange: () => true,
    registerOnChange: () => true,
    registerOnDisabledChange: () => true,
    _unregisterOnChange: () => true,
  },
  choices: [
    { icon: 'fa_solid:RO', placeholder: 'RON' },
    { icon: 'fa_solid:CR', placeholder: 'KN' },
  ],
  isInputCurrencyClick: true,
};
