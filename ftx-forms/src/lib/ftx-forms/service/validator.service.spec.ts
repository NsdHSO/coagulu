import { TestBed } from '@angular/core/testing';
import { ValidatorService } from './validator.service';
import { FormControl } from '@angular/forms';
import { TypePattern } from '../utils';
import * as vm from 'vm';

describe('ValidatorService', () => {
  let service: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('Validator Generator ', () => {
    [
      { type: 'email', method: 'emailValidator' },
      { type: 'min', method: 'minValidator', option: 22 },
      { type: 'minChar', method: 'minCharValidator', option: 22 },
      {
        type: 'pattern',
        method: 'patternValidator',
        option: TypePattern.ONLY_CHAR,
      },
      { type: 'required', method: 'requiredValidator' },
    ].forEach((vmx: { type: string; method: any; option?: unknown }) => {
      it(`validator must be return a function ${vmx.type}`, () => {
        const generator = service.validatorGenerators();
        const spyMethod = jest.spyOn(service, vmx.method); // Typecast here

        expect(generator[vmx.type]).toBeInstanceOf(Function);
        const validatorFunction = generator[vmx.type];
        const fakeControl = { value: 'some value' } as FormControl;

        expect(typeof validatorFunction).toBe('function');

        // Call the validator function to check if the spy has been called
        validatorFunction(fakeControl, vmx.option, 'TEST');
        expect(spyMethod).toHaveBeenCalled();
      });
    });
  });

  describe('Check Validator msg', () => {
    it('email Validator have error', () => {
      const emailFrom = {
        value: 'Ivan',
      } as FormControl;

      expect(service.emailValidator(emailFrom)).toEqual({ error: true });
    });
    it('email Validator have error', () => {
      const emailFrom = {} as FormControl;

      expect(service.emailValidator(emailFrom)).toBeFalsy();
    });
    it('email Validator', () => {
      const emailFrom = {
        value: 'ivan@gmail.com',
      } as FormControl;

      expect(service.emailValidator(emailFrom)).toBeFalsy();
    });
    it('patter Validator have error', () => {
      const emailFrom = {
        value: 'Ivan1',
      } as FormControl;

      expect(
        service.patternValidator(emailFrom, TypePattern.ONLY_CHAR)
      ).toEqual({ error: true });
    });
    it('patter Validator', () => {
      const emailFrom = {
        value: 'ivan@gmail.com',
      } as FormControl;

      expect(
        service.patternValidator(emailFrom, TypePattern.ONLY_CHAR)
      ).not.toBeFalsy();
    });
    it('min char validator have error', () => {
      const emailFrom = {
        value: 222,
      } as FormControl;

      expect(service.minCharValidator(emailFrom, 2)).toEqual(null);
    });
    it('min char validator', () => {
      const emailFrom = {
        value: 'ivan@gmail.com',
      } as FormControl;

      expect(service.minCharValidator(emailFrom, 15)).not.toBeFalsy();
    });
    it('min char validator', () => {
      const emailFrom = {
        value: 'ivanssssss@gmail.com',
      } as FormControl;

      expect(service.minCharValidator(emailFrom, 15)).toBeFalsy();
    });
    it('min validator have error', () => {
      const emailFrom = {
        value: 20,
      } as FormControl;

      expect(service.minValidator(emailFrom, 2)).toEqual(null);
    });
    it('min validator', () => {
      const emailFrom = {
        value: 'ivan@gmail.com',
      } as FormControl;

      expect(service.minValidator(emailFrom, 1)).not.toBeFalsy();
    });
    it('required validator have error', () => {
      const emailFrom = {
        value: 20,
      } as FormControl;

      expect(service.requiredValidator(emailFrom)).toEqual(null);
    });
    it('required validator', () => {
      const emailFrom = {
        value: '',
      } as FormControl;

      expect(service.requiredValidator(emailFrom)).not.toBeFalsy();
    });
  });
});
