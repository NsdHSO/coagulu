import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementZindexDirective } from './directive/increment-zindex.directive';

@Component({
  selector: 'ftx-tooltip',
  standalone: true,
  imports: [CommonModule, IncrementZindexDirective],
  templateUrl: './ftx-tooltip.component.html',
  styleUrls: ['./ftx-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FtxTooltipComponent {
  @Input() rendererTemplate: any; //eslint-disable-line

  @ContentChild(FtxTooltipComponent) content: any; //eslint-disable-line

  @Input()
  public text = '';
}
