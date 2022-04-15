import { TestBed } from '@angular/core/testing';

import { PstatementService } from './pstatement.service';

describe('PstatementService', () => {
  let service: PstatementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PstatementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
