import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeBadge, TypeSide } from '../../utils';
import { MatIconModule } from '@angular/material/icon';
import { GenerativeService } from 'ngx-ftx-shared';

export interface ActionBadge {
  side: TypeSide;
  action: () => unknown;
  icon?: string;
  text: string;
}
@Component({
  selector: 'ngx-form-badge',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './form-badge.component.html',
  styleUrls: ['./form-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBadgeComponent {
  protected readonly _generativeService = inject(GenerativeService);

  /**
   * Type of badge
   */
  @Input()
  typeBadge: TypeBadge = 'error';

  /**
   * Action
   */
  @Input()
  actionBadge: ActionBadge[] = [
    { side: 'middle', action: () => console.log('TEST'), text: 'Nothig' },
  ];
}
