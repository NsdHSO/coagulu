import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressComponent } from './progress.component';
import { ActivatedRoute } from '@angular/router';
import { NumberEnum, ONE, TWO } from 'ngx-ftx-shared';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { IconCoreModule } from 'ngx-liburg-icon';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;
  let activatedSpy: jest.SpyInstance<ActivatedRoute>;
  const disableSpy = new BehaviorSubject(true);
  const notDisableSpy = new BehaviorSubject(true);
  beforeEach(async () => {
    activatedSpy = {
      snapshot: {
        data: {
          config: [{ icon: 'fa_solid:RO' }, { icon: 'fa_solid:CR' }],
          actions: [
            { disable: disableSpy.asObservable(), name: 'Pause' },
            { disable: notDisableSpy.asObservable(), name: 'Continue' },
          ],
        } as unknown,
      },
    } as ActivatedRoute as never;
    await TestBed.configureTestingModule({
      imports: [ProgressComponent, MatIconModule, IconCoreModule],
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
    expect(wrapper.children.length).toEqual(TWO);
  });
  it('should check if generate correct entities', () => {
    const wrapper: HTMLDivElement[] = fixture.nativeElement.querySelectorAll(
      '[data-test="sivan-shared-progress-entities"]'
    );
    expect(wrapper.length).toEqual(TWO);
  });
  describe('should assert action', () => {
    it('count', () => {
      const wrapper: HTMLDivElement[] = fixture.nativeElement.querySelectorAll(
        '[data-test="sivan-shared-progress-actions"]'
      );
      expect(wrapper.length).toEqual(TWO);
    });
  });
});
