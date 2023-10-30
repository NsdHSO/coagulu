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
import { MatRippleModule } from '@angular/material/core';
import { Store } from '@ngrx/store';
import {
  BehaviorSubject,
  map,
  Observable,
  of,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { StepperService } from '../services/stepper.service';
import { ButtonComponent, FormBadgeComponent } from 'ngx-ftx-forms';
import { FormStepper, selectStepsEntities, Step } from 'ngx-ftx-shared';
import { RenderYouDirective } from 'ngx-fts-tooltip';
import { GenerativeService } from 'ngx-ftx-shared';

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
    FormBadgeComponent,
    RenderYouDirective,
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
  readonly generativeService = inject(GenerativeService);
  steps$ = this._store.select(selectStepsEntities);
  @Output() ivan? = new EventEmitter();
  @Input() vm: FormStepper | any; //eslint-disable-line
  @Input() flagUrl$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  @Input() buttonDisabled$: Observable<boolean> = new Observable<boolean>();
  nextTab() {
    return this.steps$
      .pipe(
        switchMap((step: Step[]) =>
          of({
            index: step.findIndex((v) => v.value === this.flagUrl$.value),
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
