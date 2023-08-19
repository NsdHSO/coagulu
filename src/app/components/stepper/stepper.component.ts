import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { StepperStepsComponent } from '../stepper-steps/stepper-steps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperService } from '../services/stepper.service';
import { PatchFormGroupValueDirective } from 'ngx-ftx-forms';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    StepperStepsComponent,
    PatchFormGroupValueDirective,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent {
  private readonly _stepperService = inject(StepperService);
  vm$ = this._stepperService.formValues$;
  form = this._stepperService.stepperForm;
}
