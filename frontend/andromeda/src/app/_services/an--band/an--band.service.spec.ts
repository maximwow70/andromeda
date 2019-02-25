import { TestBed } from '@angular/core/testing';

import { BandService } from './an--band.service';

describe('AnBandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BandService = TestBed.get(BandService);
    expect(service).toBeTruthy();
  });
});
