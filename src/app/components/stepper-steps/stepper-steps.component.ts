import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../../../ftx-forms/src/lib/ftx-forms/shared/button/button.component';
import { MatRippleModule } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { map, of, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { selectStepsEntities } from '../../+state/stepper.selectors';
import { StepperService } from '../services/stepper.service';
import { FormStepper, Step } from '../../+state/mock';

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
export class StepperStepsComponent implements OnDestroy {
  private readonly _router = inject(Router);
  private readonly _destroyed$ = new Subject();
  private readonly _store = inject(Store);
  readonly stepperService = inject(StepperService);
  steps$ = this._store.select(selectStepsEntities);
  @Output() ivan? = new EventEmitter();
  @Input() vm: FormStepper | any; //eslint-disable-line

  trackBy(index: number) {
    return index;
  }

  nextTab() {
    return this.steps$
      .pipe(
        switchMap((step: Step[]) =>
          of({
            index: step.findIndex(
              (v) => v.value === this.stepperService.flagUrl$.value
            ),
            step,
          })
        ),
        map((v) => v.step[v.index >= v.step.length - 1 ? 0 : v.index + 1]),
        tap((value) => this._router.navigate([value.value])),
        takeUntil(this._destroyed$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }
}
