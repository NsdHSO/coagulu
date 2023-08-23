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
    [
      { type: 'min', method: 'minValidator', option: 'tesst' },
      { type: 'minChar', method: 'minCharValidator', option: 'TEST' },
      {
        type: 'pattern',
        method: 'patternValidator',
        option: true,
      },
    ].forEach((vmx: { type: string; method: any; option?: unknown }) => {
      it(`validator must be return a error for ${vmx.type}`, () => {
        const generator = service.validatorGenerators();

        expect(generator[vmx.type]).toBeInstanceOf(Function);
        const validatorFunction = generator[vmx.type];
        const fakeControl = { value: 'some value' } as FormControl;
        expect(typeof validatorFunction).toBe('function');
        expect(() =>
          validatorFunction(fakeControl, vmx.option, 'TEST')
        ).toThrowError();
      });
    });
  });

  describe('Check Validator msg', () => {
    it('should email Validator have error', () => {
      const emailFrom = {
        value: 'Ivan',
      } as FormControl;

      expect(service.emailValidator(emailFrom)).toEqual({ error: true });
    });
    it('should email Validator have error', () => {
      const emailFrom = {} as FormControl;

      expect(service.emailValidator(emailFrom)).toBeFalsy();
    });
    it('should email Validator', () => {
      const emailFrom = {
        value: 'ivan@gmail.com',
      } as FormControl;

      expect(service.emailValidator(emailFrom)).toBeFalsy();
    });
    it('should return null for valid email', () => {
      const control = new FormControl('test@example.com');
      const errorMsg = 'Test Error';

      const result = service.emailValidator(control, errorMsg);

      expect(result).toBeNull();
    });
    it('should return null for empty value', () => {
      const control = new FormControl('');
      const errorMsg = 'Test Error';

      const result = service.emailValidator(control, errorMsg);

      expect(result).toBeNull();
    });
    it('should patter Validator have error', () => {
      const emailFrom = {
        value: 'Ivan1',
      } as FormControl;

      expect(
        service.patternValidator(emailFrom, TypePattern.ONLY_CHAR)
      ).toEqual({ error: true });
    });
    it('should patter Validator', () => {
      const emailFrom = {
        value: 'ivan@gmail.com',
      } as FormControl;

      expect(
        service.patternValidator(emailFrom, TypePattern.ONLY_CHAR)
      ).not.toBeFalsy();
    });
    it('should min char validator have error', () => {
      const emailFrom = {
        value: 222,
      } as FormControl;

      expect(service.minCharValidator(emailFrom, 2)).toEqual(null);
    });
    it('should min char validator', () => {
      const emailFrom = {
        value: 'ivan@gmail.com',
      } as FormControl;

      expect(service.minCharValidator(emailFrom, 15)).not.toBeFalsy();
    });
    it('should min char validator', () => {
      const emailFrom = {
        value: 'ivanssssss@gmail.com',
      } as FormControl;

      expect(service.minCharValidator(emailFrom, 15)).toBeFalsy();
    });
    it('should min validator have error', () => {
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
    it('should required validator have error', () => {
      const emailFrom = {
        value: 20,
      } as FormControl;

      expect(service.requiredValidator(emailFrom)).toEqual(null);
    });
    it('should required validator', () => {
      const emailFrom = {
        value: '',
      } as FormControl;

      expect(service.requiredValidator(emailFrom)).not.toBeFalsy();
    });
  });
});
