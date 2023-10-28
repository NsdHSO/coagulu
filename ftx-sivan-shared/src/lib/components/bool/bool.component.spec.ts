import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { BoolComponent } from './bool.component';
import { FormControl } from '@angular/forms';

describe('BoolComponent', () => {
  let component: BoolComponent;
  let fixture: ComponentFixture<BoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoolComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoolComponent);
    component = fixture.componentInstance;
    component.control = new FormControl(true);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should render', () => {
    it('check template', fakeAsync(() => {
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="sivan-bool"]'
      ) as HTMLDivElement;
      fixture.detectChanges();
      expect(divElement.children.length).toBe(2);
    }));

    it('check the control value', fakeAsync(() => {
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="sivan-bool-control"]'
      ) as HTMLInputElement;
      fixture.detectChanges();
      expect(divElement.checked).toBe(true);
    }));
    it('check false ', fakeAsync(() => {
      component.control.setValue(false);
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="sivan-bool-control"]'
      ) as HTMLInputElement;
      fixture.detectChanges();
      expect(divElement.checked).toBe(false);
    }));
    it('check the hint ', fakeAsync(() => {
      component.hintTop = 'Test';
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="sivan-bool-hint"]'
      ) as HTMLLabelElement;
      fixture.detectChanges();
      expect(divElement.innerHTML).toBe('Test');
    }));
  });

  describe('should check class', () => {
    it('should right', () => {
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="sivan-bool"]'
      ) as HTMLLabelElement;
      fixture.detectChanges();
      expect(divElement.classList).toContain('bool-position-right');
    });
    it('should left', () => {
      component.positionLabel = 'left';
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="sivan-bool"]'
      ) as HTMLLabelElement;
      fixture.detectChanges();
      expect(divElement.classList).toContain('bool-position-left');
    });
    it('should top', () => {
      component.positionLabel = 'up';
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="sivan-bool"]'
      ) as HTMLLabelElement;
      fixture.detectChanges();
      expect(divElement.classList).toContain('bool-position-up');
    });
    it('should bottom', () => {
      component.positionLabel = 'down';
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="sivan-bool"]'
      ) as HTMLLabelElement;
      fixture.detectChanges();
      expect(divElement.classList).toContain('bool-position-down');
    });
  });
});
