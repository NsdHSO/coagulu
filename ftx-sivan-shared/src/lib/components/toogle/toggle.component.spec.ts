import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { ToggleComponent } from './toggle.component';

describe('ToogleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;
  let formControl = new FormControl('TESTr');
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    component.control = formControl;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    component.control = null;
  });

  fdescribe('should check class', () => {
    describe('control disabled', () => {
      formControl.disable();
      it('should check if the correct class is applied when disabled', () => {
        formControl.setErrors({ test: 'test' });
        const wrapperElement = fixture.nativeElement.querySelector(
          '[data-test="shared-toggle-wrapper"]'
        );
        fixture.detectChanges();

        expect(wrapperElement.classList.contains('bg-slate-300')).toBe(true);
      });
      it('should border red', () => {
        component.control = new FormControl(null);
        component.control.setErrors({ name: 'test' });
        component.control.disable();
        fixture.detectChanges();
        const wrapperElement = fixture.nativeElement.querySelector(
          '[data-test="shared-toggle-wrapper"]'
        );

        expect(wrapperElement.classList.contains('border-red-500')).toBe(true);
      });
    });
    describe('check click event', () => {
      it('should call', () => {
        const wrapperElement = fixture.nativeElement.querySelector(
          '[data-test="shared-toggle-wrapper"]'
        );
        const spy = jest.spyOn(component, 'mutateToggle');
        wrapperElement.click();
        expect(spy).toHaveBeenCalled();
      });
    });
    it('should check if the correct class is applied when is not disabled', () => {
      component.control = new FormControl('Iban');
      const wrapperElement = fixture.nativeElement.querySelector(
        '[data-test="shared-toggle-wrapper"]'
      );
      fixture.detectChanges();

      expect(wrapperElement.classList.contains('bg-slate-300')).toBeFalsy();
    });
    it('should check if border is applied', () => {
      const wrapperElement = fixture.nativeElement.querySelector(
        '[data-test="shared-toggle-wrapper"]'
      );
      fixture.detectChanges();

      expect(wrapperElement.classList.contains('border-green-300')).toBe(true);
    });
  });
});
