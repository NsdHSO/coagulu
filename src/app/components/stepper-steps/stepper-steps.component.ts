import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { StepperValues } from '../../+state/stepper.models';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonComponent } from '../../shared/button/button.component';
import { MatRippleModule } from '@angular/material/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { selectStepsEntities } from '../../+state/stepper.selectors';

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
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _store = inject(Store);
  steps$ = this._store.select(selectStepsEntities);

  trackBy(index: number, item: StepperValues) {
    return item.id;
  }

  public nextTab() {
    this.steps$.pipe(tap(console.log)).subscribe();
  }
}
