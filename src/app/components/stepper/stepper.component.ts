import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { StepperStepsComponent } from '../stepper-steps/stepper-steps.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatchFormGroupValueDirective } from '../../directive/patch-form-group-value.directive';
import { StepperService } from '../services/stepper.service';
import { tap } from 'rxjs';

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
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _stepperService = inject(StepperService);
  vm$ = this._stepperService.formValues$;
  form = this._stepperService.stepperForm;
}
