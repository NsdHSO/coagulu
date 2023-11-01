import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sivan-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  /**
   * Instance of ActivatedRoute to take config from data
   * @private
   */
  private _activateRoute = inject(ActivatedRoute);

  configs = this._activateRoute.snapshot.data['config'];
}
