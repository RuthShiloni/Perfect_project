import { TestBed } from '@angular/core/testing';

import { SizeAndPriceService } from './size-and-price.service';

describe('SizeAndPriceService', () => {
  let service: SizeAndPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SizeAndPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
