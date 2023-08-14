import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControlLabelComponent } from './form-control-label.component';

describe('FormControlLabelComponent', () => {
  let component: FormControlLabelComponent;
  let fixture: ComponentFixture<FormControlLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormControlLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
