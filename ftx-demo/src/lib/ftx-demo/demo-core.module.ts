import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { DemoModule } from './demo.module';

@NgModule({})
export class DemoCoreModule {
  constructor(@Optional() @SkipSelf() parentModule: DemoModule) {
    if (parentModule) {
      throw new Error(`Demo module Is already loaded`);
    }
  }

  static forRoot(): ModuleWithProviders<DemoModule> {
    return {
      ngModule: DemoModule,
    };
  }
}
