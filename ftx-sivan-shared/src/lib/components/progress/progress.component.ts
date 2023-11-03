import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';
import { GenerativeService } from '../../service';

@Component({
  selector: 'sivan-progress',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterOutlet, ButtonComponent],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  /**
   * Instance of ActivatedRoute to take config from data
   * @private
   */
  private _activateRoute = inject(ActivatedRoute);

  /**
   * Instance of Generative for trackBy
   */
  generativeService = inject(GenerativeService);

  configs = this._activateRoute.snapshot.data['config'];
  actions = this._activateRoute.snapshot.data['actions'];
}
