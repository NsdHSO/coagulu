import * as angularCore from '@angular/core';
import { StepperService } from '../../services/stepper.service';
import { StepperComponent } from '../../stepper/stepper.component';
import { of } from 'rxjs';

describe('InfoUserComponent', () => {
  const spyInject = jest.spyOn(angularCore, 'inject');

  const setup = (stepperService: unknown) => {
    spyInject.mockImplementation((providerToken: unknown) => {
      if (providerToken === StepperService) {
        return stepperService;
      }
      return;
    });

    return new StepperComponent();
  };
  it('should create', () => {
    const mockService = {
      formValues$: () => of(''),
      stepperForm: {},
    };

    const stepperComponent = setup(mockService);

    expect(stepperComponent.form).toEqual({});
  });
});
