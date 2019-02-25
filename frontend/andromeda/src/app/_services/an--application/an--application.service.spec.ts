import { TestBed } from '@angular/core/testing';

import { ApplicationService } from './an--application.service';

describe('AnApplicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationService = TestBed.get(ApplicationService);
    expect(service).toBeTruthy();
  });
});
