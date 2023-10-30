import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpendMoneyComponent } from './spend-money.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('SpendMoneyComponent', () => {
  let component: SpendMoneyComponent;
  let fixture: ComponentFixture<SpendMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendMoneyComponent],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(SpendMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
