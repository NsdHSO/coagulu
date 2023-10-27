import { MaskDirective } from './mask.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '',
  selector: 'sivan-test',
  imports: [MaskDirective],
  standalone: true,
})
class TestComponent {}

const TEMPLATE = '<div sivanMask>Test</div>';

function createTestComponent(template: string = TEMPLATE) {
  return TestBed.overrideComponent(TestComponent, {
    set: { template: template },
  }).createComponent(TestComponent);
}
fdescribe('MaskDirective', () => {
  let fixture: ComponentFixture<any>;

  afterEach(() => {
    fixture = null as any;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    });
  });

  function getComponent() {
    return fixture.componentInstance;
  }

  it('should create the component', () => {
    fixture = createTestComponent();
    expect(getComponent()).toBeTruthy();
  });

  it('should handle warning', () => {
    const warnSpy = jest.spyOn(console, 'warn');
    fixture = createTestComponent();
    fixture.detectChanges();
    expect(warnSpy).toHaveBeenCalledWith(
      'Oops, Please applied this directive only to the input directive'
    );
    warnSpy.mockRestore();
  });
  it('should not handle the warning', () => {
    const warnSpy = jest.spyOn(console, 'warn');
    const template = `<input sivanMask />`;
    fixture = createTestComponent(template);
    fixture.detectChanges();
    expect(warnSpy).not.toHaveBeenCalledWith(
      'Oops, Please applied this directive only to the input directive'
    );
    warnSpy.mockRestore();
  });
});
