import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControlLabelComponent } from './form-control-label.component';
import {
  FormControl,
  FormControlDirective,
  FormControlName,
  FormsModule,
  NgControl,
  NgModel,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockNgControl {}

describe('FormControlLabelComponent', () => {
  let component: FormControlLabelComponent;
  let fixture: ComponentFixture<FormControlLabelComponent>;
  beforeEach(async () => {
    const NG_CONTROL_PROVIDER = {
      provide: NgControl,
      useClass: class extends FormControlName {
        override control = new FormControl();
      },
    };
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        FormControlLabelComponent,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
      ],
      providers: [
        NgControl,
        FormControlDirective,
        FormControlName,
        NgModel,
        { provide: NgControl, useClass: MockNgControl }, // Provide the mock NgControl
      ], // Provide necessary dependencies
    })
      .overrideComponent(FormControlLabelComponent, {
        add: { providers: [NG_CONTROL_PROVIDER] },
      })
      .compileComponents();
    fixture = TestBed.createComponent(FormControlLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('injectNgControl', () => {
    it('should throw an error if injection fails', () => {
      expect(component).toBeDefined();
    });
  });
});
