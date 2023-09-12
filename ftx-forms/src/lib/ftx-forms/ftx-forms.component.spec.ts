import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FtxFormsComponent } from './ftx-forms.component';
import { GenerateFormBuilderService } from './service';
import { FormControl, Validators } from '@angular/forms';
import { AnimationBuilder } from '@angular/animations';
import {
  ANIMATION_MODULE_TYPE,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { GenerativeService } from 'ngx-ftx-shared';

describe('FtxFormsComponent', () => {
  let component: FtxFormsComponent;
  let fixture: ComponentFixture<FtxFormsComponent>;
  let generativeService: any; //eslint-disable-line
  let generateFormBuilder: any; //eslint-disable-line
  let animationBuilder: any; //eslint-disable-line
  beforeEach(async () => {
    generativeService = {
      trackBy: () => null,
    };
    generateFormBuilder = {
      getCustomFromControlType: () => ({}),
    };
    animationBuilder = {
      create: '',
      build: () => ({
        create: () => ({
          play: () => {
            //
          },
        }),
      }),
      destroy: () => {
        //
      },
    };
    await TestBed.configureTestingModule({
      imports: [FtxFormsComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: GenerativeService,
          useValue: generativeService,
        },
        {
          provide: GenerateFormBuilderService,
          useValue: generateFormBuilder,
        },
        {
          provide: AnimationBuilder,
          useValue: animationBuilder,
        },
        {
          provide: ANIMATION_MODULE_TYPE,
          useValue: 'BrowserAnimations',
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(FtxFormsComponent);
    component = fixture.componentInstance;
    component.dynamicForm = new FormControl('', Validators.required);
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
