import { TestBed } from '@angular/core/testing';

import { ProductToOrderService } from './product-to-order.service';

describe('ProductToOrderService', () => {
  let service: ProductToOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductToOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
