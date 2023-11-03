import { setCompodocJson } from '@storybook/addon-docs/angular';

export const decorators = [
  // Adds theme switching support.
  // NOTE: requires setting "darkMode" to "class" in your tailwind config
];
import docJson from '../documentation.json';
setCompodocJson(docJson);
export const parameters = {
  layout: 'fullscreen',
};
