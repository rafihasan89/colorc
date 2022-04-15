import { TestBed } from '@angular/core/testing';

import { WstatementService } from './wstatement.service';

describe('WstatementService', () => {
  let service: WstatementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WstatementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
