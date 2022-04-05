import { TestBed } from '@angular/core/testing';

import { ScheduledInterviewService } from './scheduled-interview.service';

describe('ScheduledInterviewService', () => {
  let service: ScheduledInterviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduledInterviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
