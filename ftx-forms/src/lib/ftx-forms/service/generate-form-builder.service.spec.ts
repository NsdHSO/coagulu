import { TestBed } from '@angular/core/testing';

import { GenerateFormBuilderService } from './service-generate-form-builder.service';

describe('ServiceGenerateFormBuilderService', () => {
  let service: GenerateFormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateFormBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
