import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpendMoneyComponent } from './spend-money.component';

describe('SpendMoneyComponent', () => {
  let component: SpendMoneyComponent;
  let fixture: ComponentFixture<SpendMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendMoneyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpendMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
