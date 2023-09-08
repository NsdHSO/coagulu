import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipleInputComponent } from './multiple-input.component';
import { FormControl, FormsModule, NgControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InputComponent', () => {
  let component: MultipleInputComponent;
  let fixture: ComponentFixture<MultipleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleInputComponent, FormsModule, BrowserAnimationsModule],
      providers: [NgControl],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleInputComponent);
    component = fixture.componentInstance;
    const mockControl = {
      control: new FormControl(), //
    };
    component.control = mockControl;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
