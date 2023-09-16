import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FtxFtmComponent } from './ftx-ftm.component';

describe('FtxFtmComponent', () => {
  let component: FtxFtmComponent;
  let fixture: ComponentFixture<FtxFtmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtxFtmComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FtxFtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
