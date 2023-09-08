import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  ActionBadge,
  FormBadgeComponent,
} from '../formBadge/form-badge.component';
import { RenderYouDirective } from 'ngx-fts-tooltip';
import { DescriptionEntity } from '../../interfaces';

@Component({
  selector: 'ngx-form-label',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FormBadgeComponent,
    RenderYouDirective,
  ],
  templateUrl: './form-label.component.html',
  styleUrls: ['./form-label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLabelComponent {
  /**
   * Is array form Input
   */
  @Input() isFormArray? = false;

  /**
   * Label for multiple-input-dropdown
   */
  @Input() label: string | undefined = '';

  /**
   * Type of Input checkbox text
   */
  @Input() typeInput? = 'text';

  /**
   * Label for multiple-input-dropdown
   */
  @Input() labelInput? = 'Complete label';
  /**
   * Message for tooltip
   */
  @Input() haveTooltip?: boolean;
  /**
   * Description for multiple-input-dropdown
   */
  @Input() descriptionEntity?: DescriptionEntity;
  actionBadge = [
    {
      icon: 'fa_solid:RO',
      side: 'left',
      action: () => console.log('ivan'),
    },
  ] as ActionBadge[];
}
