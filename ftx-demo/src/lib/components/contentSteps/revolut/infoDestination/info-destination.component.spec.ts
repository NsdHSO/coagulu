import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoDestinationComponent } from './info-destination.component';

describe('InfoDestinationComponent', () => {
  let component: InfoDestinationComponent;
  let fixture: ComponentFixture<InfoDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDestinationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
