import { TestBed } from '@angular/core/testing';

import { PathResolverServiceService } from './path-resolver.service';

describe('PathResolverServiceService', () => {
  let service: PathResolverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathResolverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
