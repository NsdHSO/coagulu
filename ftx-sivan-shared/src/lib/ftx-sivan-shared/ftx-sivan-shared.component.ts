import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'coagulu-ftx-sivan-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ftx-sivan-shared.component.html',
  styleUrls: ['./ftx-sivan-shared.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FtxSivanSharedComponent {}
