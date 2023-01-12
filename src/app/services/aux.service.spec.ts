import { TestBed } from '@angular/core/testing';

import { AuxService } from './aux.service';

describe('AuxService', () => {
  let service: AuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
