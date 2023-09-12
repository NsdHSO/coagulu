import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SivanInputComponent } from './sivan-input.component';
import { FormControl, FormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  ANIMATION_MODULE_TYPE,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';

describe('SivanInputComponent', () => {
  let component: SivanInputComponent;
  let fixture: ComponentFixture<SivanInputComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SivanInputComponent, FormsModule, BrowserAnimationsModule],
      providers: [
        FormControl,
        {
          provide: ANIMATION_MODULE_TYPE,
          useValue: 'BrowserAnimations',
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(SivanInputComponent);
    component = fixture.componentInstance;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
