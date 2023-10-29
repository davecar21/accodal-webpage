import { TestBed } from '@angular/core/testing';

import { PexelsService } from './pexels.services';

describe('PexelService', () => {
  let service: PexelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PexelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
