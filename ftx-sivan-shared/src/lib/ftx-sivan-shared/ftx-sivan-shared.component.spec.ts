import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FtxSivanSharedComponent } from './ftx-sivan-shared.component';

describe('FtxSivanSharedComponent', () => {
  let component: FtxSivanSharedComponent;
  let fixture: ComponentFixture<FtxSivanSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtxSivanSharedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FtxSivanSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
