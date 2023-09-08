import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SivanInputComponent } from './sivan-input.component';

describe('InputComponent', () => {
  let component: SivanInputComponent;
  let fixture: ComponentFixture<SivanInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SivanInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SivanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
