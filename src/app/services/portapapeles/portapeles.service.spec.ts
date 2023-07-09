import { TestBed } from '@angular/core/testing';

import { PortapelesService } from './portapeles.service';

describe('PortapelesService', () => {
  let service: PortapelesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortapelesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
