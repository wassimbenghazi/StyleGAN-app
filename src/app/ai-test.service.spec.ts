import { TestBed } from '@angular/core/testing';

import { AiTestService } from './ai-test.service';

describe('AiTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AiTestService = TestBed.get(AiTestService);
    expect(service).toBeTruthy();
  });
});
