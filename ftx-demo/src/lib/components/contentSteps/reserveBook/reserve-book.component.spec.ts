import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReserveBookComponent } from './reserve-book.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('ReserveBookComponent', () => {
  let component: ReserveBookComponent;
  let fixture: ComponentFixture<ReserveBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveBookComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    fixture = TestBed.createComponent(ReserveBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
