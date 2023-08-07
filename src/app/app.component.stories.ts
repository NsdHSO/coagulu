import { Meta, moduleMetadata } from '@storybook/angular';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export default {
  title: 'AppComponent',
  component: AppComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, RouterModule.forRoot([])],
    }),
  ],
} as Meta<AppComponent>;

export const Primary = {
  render: (args: AppComponent) => ({
    props: args,
  }),
  args: {},
};
