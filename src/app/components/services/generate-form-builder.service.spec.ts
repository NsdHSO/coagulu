import { TestBed } from '@angular/core/testing';

import { ServiceGenerateFormBuilderService } from './service-generate-form-builder.service';

describe('ServiceGenerateFormBuilderService', () => {
  let service: ServiceGenerateFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceGenerateFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
