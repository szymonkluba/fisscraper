import { TestBed } from '@angular/core/testing';

import { SiderailService } from './siderail.service';

describe('SiderailService', () => {
  let service: SiderailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiderailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
