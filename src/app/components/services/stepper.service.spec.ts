import { of } from 'rxjs';
import * as angularCore from '@angular/core';
import { StepperService } from './stepper.service';
import { Store } from '@ngrx/store';

describe('Stepper Service', () => {
  const injectSpy = jest.spyOn(angularCore, 'inject');

  const setupSpy = (store: unknown, formBuilder: unknown) => {
    injectSpy.mockImplementation((providerToken) => {
      if (providerToken === Store) {
        return store;
      } else {
        return formBuilder;
      }
    });

    return new StepperService();
  };

  it('should return the same obj', () => {
    const storeMock = { get: jest.fn(() => of([])) };
    const formBuilder = {
      isValid: () => true,
      group: () => ({ name: 'ivan' }),
      control: ({ args }: { args?: unknown }) => args,
      array: ({ args }: { args?: unknown }) => args,
    };

    const stepperService = setupSpy(storeMock, formBuilder);

    expect(stepperService.stepperForm).toStrictEqual({ name: 'ivan' });
  });
});
