import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { demoRouting } from './demo.routing';

@NgModule({
  imports: [RouterModule.forChild(demoRouting)],
})
export class DemoModule {}
