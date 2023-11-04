import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressComponent } from './progress.component';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { IconCoreModule } from 'ngx-liburg-icon';
import { TWO } from '../../util';
import { ButtonComponent } from 'ngx-ftx-shared';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;
  describe('should assert logic', () => {
    let activatedSpy: jest.SpyInstance<ActivatedRoute>;
    const disableSpy = new BehaviorSubject(true);
    const notDisableSpy = new BehaviorSubject(true);

    beforeEach(async () => {
      activatedSpy = {
        snapshot: {
          data: {
            stepper: [{ icon: 'fa_solid:RO' }, { icon: 'fa_solid:CR' }],
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
        '[data-test="sivan-shared-progress-icon"]'
      );
      expect(wrapper.length).toEqual(TWO);
    });
    describe('should assert action', () => {
      it('count', () => {
        const wrapper: HTMLDivElement[] =
          fixture.nativeElement.querySelectorAll(
            '[data-test="sivan-shared-progress-actions"]'
          );
        expect(wrapper.length).toEqual(TWO);
      });
    });
  });
  describe('should assert ui', () => {
    let activatedSpy: jest.SpyInstance<ActivatedRoute>;
    const disableSpy = new BehaviorSubject(true);
    const notDisableSpy = new BehaviorSubject(true);

    beforeEach(async () => {
      activatedSpy = {
        snapshot: {
          data: {
            actions: [
              {
                disable: disableSpy.asObservable(),
                name: 'Pause',
                event: (e: unknown) => console.log(e),
              },
              { disable: notDisableSpy.asObservable(), name: 'Continue' },
            ],
          } as unknown,
        },
      } as ActivatedRoute as never;
      await TestBed.configureTestingModule({
        imports: [
          ProgressComponent,
          MatIconModule,
          IconCoreModule,
          ButtonComponent,
        ],
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
    it('should button be in middle', () => {
      const wrapper: HTMLDivElement = fixture.nativeElement.querySelector(
        '[data-test="sivan-shared-progress-bar"]'
      );
      expect(wrapper.classList).toContain('justify-center');
    });
    it('should button be click', () => {
      const wrapper: DebugElement = fixture.debugElement.query(
        By.css('[data-test="sivan-shared-progress-actions"]')
      );
      const eventMock = 'test';
      const consoleSpy = jest.spyOn(console, 'log'); // Spy on the console.log function
      wrapper.triggerEventHandler('marian', eventMock);
      fixture.detectChanges();

      expect(consoleSpy).toHaveBeenCalledWith(eventMock);
    });
  });
});
