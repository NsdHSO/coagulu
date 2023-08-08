import { Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

export const Primary = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `
      <button-component [disable]='disable' [roundedFull]='roundedFull' >
        TEST
</button-component>
    `,
  }),
  args: {
    roundedFull: '!rounded-md',
    disable: true,
  },
};
export const PrimaryEnable = {
  render: (args: ButtonComponent) => ({
    props: args,
    template: `
      <button-component [disable]='disable' [roundedFull]='roundedFull' >
        TEST
</button-component>
    `,
  }),
  args: {
    roundedFull: '!rounded-full',
    disable: false,
  },
};