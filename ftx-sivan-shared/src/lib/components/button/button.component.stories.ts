import { Meta, Story, StoryFn } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  tags: ['autodocs'],
} as Meta<ButtonComponent>;

export const Primary: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `
      <sivan-button-component [disable]='disable' [roundedFull]='roundedFull' (marian)="marian()" class="class">
            Click Me
      </sivan-button-component>
    `,
  methods: {
    marian() {
      console.log('test');
    },
  },
});

export const ButtonWithDocs = Primary.bind({});

ButtonWithDocs.argTypes = {
  roundedFull: {
    control: 'select', // Type 'select' is automatically inferred when 'options' is defined
    options: ['rounded-s', 'rounded-md', 'rounded-xl', 'rounded-full'],
    defaultValue: 'rounded-s',
  },
  disable: {
    options: [true, false],
    control: { type: 'radio' },
  },
  class: {
    control: 'select', // Type 'select' is automatically inferred when 'options' is defined
    options: ['bg-red-500', 'text-blue', 'text-white'],
    defaultValue: 'bg-red-500',
  },
};
