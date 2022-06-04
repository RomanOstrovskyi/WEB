import { TestBed } from '@angular/core/testing';

import { BasicAuthGuardGuard } from './basic-auth-guard.guard';

describe('BasicAuthGuardGuard', () => {
  let guard: BasicAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BasicAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
