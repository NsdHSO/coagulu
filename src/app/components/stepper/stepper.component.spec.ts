import { StepperComponent } from './stepper.component';
import * as angularCore from '@angular/core';
import { StepperService } from '../services/stepper.service';
import { of } from 'rxjs';

describe('StepperComponent', () => {
  const spyInject = jest.spyOn(angularCore, 'inject');

  const setup = (stepperService: unknown) => {
    spyInject.mockImplementation((providerToken: unknown) => {
      if (providerToken === StepperService) {
        return stepperService;
      }
      return null;
    });

    return new StepperComponent();
  };
  it('should create', () => {
    const mockService = {
      formValues$: () => of(''),
      stepperForm: {},
    };

    const stepperComponent = setup(mockService);
    expect(stepperComponent).toBeTruthy();
  });
});
