import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FtxFormsComponent } from './ftx-forms.component';

describe('FtxFormsComponent', () => {
  let component: FtxFormsComponent;
  let fixture: ComponentFixture<FtxFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FtxFormsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FtxFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
