import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FtxTooltipComponent } from './ftx-tooltip.component';

describe('FtxTooltipComponent', () => {
  let component: FtxTooltipComponent;
  let fixture: ComponentFixture<FtxTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtxTooltipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FtxTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('should assert text', () => {
    it('should change the text', () => {
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="text-tooltip"]'
      );
      component.text = 'test';
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(divElement.textContent).toEqual('test');
      });
    });

    it('should change not the text', () => {
      const divElement = fixture.nativeElement.querySelector(
        '[data-test="text-tooltip"]'
      );
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(divElement.textContent).toEqual('test');
      });
    });
  });
});
