import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'demo',
    loadChildren: () =>
      import('./loaders/demo-loader.module').then((m) => m.DemoLoaderModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
