import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FtxFormsComponent } from './ftx-forms.component';
import { GenerateFormBuilderService, GenerativeService } from 'ngx-ftx-forms';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimationBuilder } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FtxFormsComponent', () => {
  let component: FtxFormsComponent;
  let fixture: ComponentFixture<FtxFormsComponent>;
  let generativeService: any; //eslint-disable-line
  let generateFormBuilder: any; //eslint-disable-line
  let animationBuilder: any; //eslint-disable-line
  beforeEach(async () => {
    generativeService = {
      trackBy: (i: number) => i++,
    };
    generateFormBuilder = {
      getCustomFromControlType: () => ({}),
    };
    animationBuilder = {
      create: '',
      build: () => ({
        create: (e: unknown) => ({
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
