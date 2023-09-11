import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SivanInputComponent } from './sivan-input.component';
import { FormControl, FormsModule } from '@angular/forms';
import { of } from 'rxjs'; // Mock NgControl

describe('SivanInputComponent', () => {
  let component: SivanInputComponent;
  let fixture: ComponentFixture<SivanInputComponent>;
  let formControl: FormControl;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SivanInputComponent, FormsModule],
      providers: [FormControl],
    });
    fixture = TestBed.createComponent(SivanInputComponent);
    component = fixture.componentInstance;
    formControl = new FormControl('');
    fixture.componentInstance.mainControl = new FormControl();
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
