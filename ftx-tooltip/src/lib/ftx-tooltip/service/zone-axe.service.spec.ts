import { TestBed } from '@angular/core/testing';

import { ZoneAxeService } from './zone-axe.service';

describe('ZoneAxeService', () => {
  let service: ZoneAxeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneAxeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
