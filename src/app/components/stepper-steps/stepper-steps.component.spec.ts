import * as ang from '@angular/core';
import { StepperStepsComponent } from './stepper-steps.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('StepperStepsComponent', () => {
  const spyInject = jest.spyOn(ang, 'inject');
  const activate = {
    navigate: () => {
      console.log('Ivan');
    },
  };
  const store = {
    select: () => of(''),
  };
  const setup = (activated: unknown, store: unknown) => {
    spyInject.mockImplementation((providerToken: unknown) => {
      if (providerToken === Router) {
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
