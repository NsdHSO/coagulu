import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { IconCoreModule } from 'ngx-liburg-icon';
import { ToggleComponent } from './toggle.component';

describe('ToogleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;
  const formControl = new FormControl('TESTr');
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleComponent, MatIconModule, IconCoreModule],
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
      it('should change value', () => {
        component.control = new FormControl(true);
        const wrapperElement = fixture.nativeElement.querySelector(
          '[data-test="shared-toggle-wrapper"]'
        );
        const spy = jest.spyOn(component, 'mutateToggle');
        wrapperElement.click();
        expect(spy).toHaveBeenCalled();
        expect(component.control.value).toBeFalsy();
      });
    });
    describe('should label go', () => {
      it('should left', () => {
        component.control = new FormControl(true);
        fixture.detectChanges();
        const wrapperElement = fixture.nativeElement.querySelector(
          '[data-test="shared-toggle-type-input-label"]'
        );
        expect(wrapperElement.classList.contains('translate-x-3/4')).toBe(true);
      });
      it('should right', () => {
        component.control = new FormControl(false);
        fixture.detectChanges();
        const wrapperElement = fixture.nativeElement.querySelector(
          '[data-test="shared-toggle-type-input-label"]'
        );
        expect(wrapperElement.classList.contains('-translate-x-4')).toBe(true);
      });
    });
    describe('should check content', () => {
      describe('be implicit', () => {
        it('should not have value use implicit value', () => {
          component.control = new FormControl(true);
          component.valuesToggled = null;
          fixture.detectChanges();
          const wrapperElement = fixture.nativeElement.querySelector(
            '[data-test="shared-toggle-type-input-label-implicit"]'
          );
          expect(wrapperElement.innerHTML).toBe('Yes');
        });
        it('should not have value use implicit value', () => {
          component.control = new FormControl(false);
          component.valuesToggled = null;
          fixture.detectChanges();
          const wrapperElement = fixture.nativeElement.querySelector(
            '[data-test="shared-toggle-type-input-label-implicit"]'
          );
          expect(wrapperElement.innerHTML).toBe('No');
        });
      });
      describe('have another value', () => {
        it('should have set icon when control have value', () => {
          component.control = new FormControl(false);
          component.valuesToggled = [
            { icon: 'fa_solid:CR', description: '', value: true },
            { icon: 'fa_solid:RO', description: 'test', value: false },
          ];
          fixture.detectChanges();
          const wrapperElement = fixture.nativeElement.querySelector(
            '[data-test="shared-toggle-type-input-label-another"]'
          );
          expect(wrapperElement.getAttribute('ng-reflect-svg-icon')).toBe(
            'fa_solid:RO'
          );
        });
        it('should have set icon when no control have value', () => {
          component.control = new FormControl(true);
          component.valuesToggled = [
            { icon: 'fa_solid:CR', description: '', value: true },
            { icon: 'fa_solid:RO', description: 'test', value: false },
          ];
          fixture.detectChanges();
          const wrapperElement = fixture.nativeElement.querySelector(
            '[data-test="shared-toggle-type-input-label-another"]'
          );
          expect(wrapperElement.getAttribute('ng-reflect-svg-icon')).toBe(
            'fa_solid:CR'
          );
        });
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
