import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperComponent } from './stepper.component';
import { BehaviorSubject } from 'rxjs';
import { StepperService } from '../services/stepper.service';

fdescribe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;
  let stepperSpy;
  const formValues$ = new BehaviorSubject({ name: '' });
  beforeEach(async () => {
    stepperSpy = {
      formValues$: formValues$.asObservable(),
      stepperForm: {},
    };

    await TestBed.configureTestingModule({
      imports: [StepperComponent],
      providers: [
        {
          provide: StepperService,
          useValue: stepperSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
