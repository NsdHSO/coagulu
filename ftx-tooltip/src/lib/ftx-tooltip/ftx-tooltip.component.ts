import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'coagulu-ftx-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ftx-tooltip.component.html',
  styleUrls: ['./ftx-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FtxTooltipComponent {}
