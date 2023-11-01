import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressComponent } from './progress.component';
import { ActivatedRoute } from '@angular/router';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;
  let activatedSpy: jest.SpyInstance<ActivatedRoute>;
  beforeEach(async () => {
    activatedSpy = {
      snapshot: {
        data: {
          config: [{ icon: 'fa_solid:RO' }],
        } as unknown,
      },
    } as ActivatedRoute as never;
    await TestBed.configureTestingModule({
      imports: [ProgressComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate ui', () => {
    const wrapper: HTMLDivElement = fixture.nativeElement.querySelector(
      '[data-test="sivan-shared-progress"]'
    );
    fixture.detectChanges();
    expect(wrapper.children.length).toEqual(2);
  });
});
