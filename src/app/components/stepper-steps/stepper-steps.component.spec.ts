import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperStepsComponent } from './stepper-steps.component';

describe('StepperStepsComponent', () => {
  let component: StepperStepsComponent;
  let fixture: ComponentFixture<StepperStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperStepsComponent]
    });
    fixture = TestBed.createComponent(StepperStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
