import { TestBed } from '@angular/core/testing';

import { DataApiSocioeducService } from './data-api-socioeduc.service';

describe('DataApiSocioeducService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataApiSocioeducService = TestBed.get(DataApiSocioeducService);
    expect(service).toBeTruthy();
  });
});
