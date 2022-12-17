import { TestBed } from '@angular/core/testing';

import { SideRailService } from './side-rail.service';

describe('SiderailService', () => {
  let service: SideRailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideRailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
