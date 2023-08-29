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
});
