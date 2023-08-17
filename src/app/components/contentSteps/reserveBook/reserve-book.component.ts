import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateFormBuilderService } from '../../services/service-generate-form-builder.service';
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { DataFormBuilder } from '../../interfaces/data-form-builder';

@Component({
  selector: 'reserve-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reserve-book.component.html',
  styleUrls: ['./reserve-book.component.scss'],
})
export class ReserveBookComponent {
  dynamicForm: FormGroup | any;

  jsonData: DataFormBuilder = {
    values: [
      {
        label: 'name',
        value: 'IVan',
        validators: [{ type: 'required' }],
      },
      {
        label: 'age',
        value: '20',
        validators: [{ type: 'required' }, { type: 'min', option: 30 }],
      },
      {
        label: 'address',
        values: [
          {
            label: 'Ocamel',
            values: [
              {
                value: 'TESD',
              },
            ],
          },
        ],
      },
      {
        label: 'personalData',
        values: [
          {
            label: 'cnp',
            value: '123141232311',
          },
          {
            label: 'ds',
            value: '123141232311',
          },
        ],
      },
    ],
  };

  constructor(private formBuilder: GenerateFormBuilderService) {}

  ngOnInit() {
    this.dynamicForm = this.formBuilder.buildFormFromJson(this.jsonData);
  }

  onSubmit() {
    if (this.dynamicForm.valid) {
      // Handle form submission
    } else {
      // Form is not valid, display errors or take action
    }
  }

  getControl(controlKey: string): AbstractControl | null {
    return this.dynamicForm.get(controlKey);
  }
}
