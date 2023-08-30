import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ftx-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ftx-tooltip.component.html',
  styleUrls: ['./ftx-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FtxTooltipComponent {
  @Input() rendererTemplate: any;

  @ContentChild(FtxTooltipComponent) content: any;

  @Input()
  public text = '';
}
