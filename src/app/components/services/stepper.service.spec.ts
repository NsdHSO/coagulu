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

  it('should count the lookups', () => {
    const storeMock = { get: jest.fn(() => of([])) };
    const formBuilder = {
      isValid: () => true,
      group: () => ({ name: 'ivan' }),
    };

    const lookuper = setupSpy(storeMock, formBuilder);

    expect(lookuper.stepperForm).toStrictEqual({ name: 'ivan' });
  });
});
