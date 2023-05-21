import { TestBed } from '@angular/core/testing';

import { CreamsService } from './creams.service';

describe('CreamsService', () => {
  let service: CreamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
