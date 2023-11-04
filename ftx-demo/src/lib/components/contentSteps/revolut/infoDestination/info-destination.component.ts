import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FtxFtmComponent } from 'ngx-ftm';
import { DataFormBuilder } from 'ngx-ftx-shared';
import { TypeConstantEnum } from 'ngx-ftx-forms';

@Component({
  selector: 'coagulu-info-destination',
  standalone: true,
  imports: [CommonModule, FtxFtmComponent],
  templateUrl: './info-destination.component.html',
  styleUrls: ['./info-destination.component.scss'],
})
export class InfoDestinationComponent {
  jsonData: DataFormBuilder = {
    values: [
      {
        label: 'Ivan2',
        value: null,
        validators: [{ type: TypeConstantEnum.REQUIRED }],
        labelHint: 'Childrens',
        placeholder: 'Country Bank',
      },
    ],
  };
}
