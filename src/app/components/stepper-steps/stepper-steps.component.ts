import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { StepperValues } from '../../+state/stepper.models';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'stepper-steps',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    RouterLink,
    ButtonComponent,
    RouterLinkActive,
    MatRippleModule,
  ],
  templateUrl: './stepper-steps.component.html',
  styleUrls: ['./stepper-steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperStepsComponent {
  @Input() vm: any; //eslint-disable-line

  trackBy(index: number, item: StepperValues) {
    return item.id;
  }

  public nextTab() {
    console.log('Ivan');
  }
}
