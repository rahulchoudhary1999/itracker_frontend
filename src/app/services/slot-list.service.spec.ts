import { TestBed } from '@angular/core/testing';

import { SlotListService } from './slot-list.service';

describe('SlotListService', () => {
  let service: SlotListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
