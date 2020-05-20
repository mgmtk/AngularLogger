import { TestBed } from '@angular/core/testing';

import { LogItemService } from './log-item.service';

describe('LogItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogItemService = TestBed.get(LogItemService);
    expect(service).toBeTruthy();
  });
});
