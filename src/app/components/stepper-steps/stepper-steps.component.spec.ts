import * as ang from '@angular/core';
import { StepperStepsComponent } from './stepper-steps.component';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('StepperStepsComponent', () => {
  const spyInject = jest.spyOn(ang, 'inject');
  const activate = {};
  const store = {
    select: () => of(''),
  };
  const setup = (activated: unknown, store: unknown) => {
    spyInject.mockImplementation((providerToken: unknown) => {
      if (providerToken === ActivatedRoute) {
        return activated;
      }
      if (providerToken === Store) {
        return store;
      }
      return;
    });

    return new StepperStepsComponent();
  };

  it('should init', () => {
    const stepperComponent = setup(activate, store);

    expect(stepperComponent).toBeTruthy();
  });
});
