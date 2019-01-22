import { TestBed } from '@angular/core/testing';

import { AdataService } from './adata.service';

describe('AdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdataService = TestBed.get(AdataService);
    expect(service).toBeTruthy();
  });
});
