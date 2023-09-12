import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SivanInputComponent } from './sivan-input.component';
import { FormControl, FormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';

describe('SivanInputComponent', () => {
  let component: SivanInputComponent;
  let fixture: ComponentFixture<SivanInputComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SivanInputComponent, FormsModule, BrowserAnimationsModule],
      providers: [FormControl, provideAnimations()],
    });
    fixture = TestBed.createComponent(SivanInputComponent);
    component = fixture.componentInstance;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
