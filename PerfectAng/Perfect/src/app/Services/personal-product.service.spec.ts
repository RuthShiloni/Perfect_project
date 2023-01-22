import { TestBed } from '@angular/core/testing';

import { PersonalProductService } from './personal-product.service';

describe('PersonalProductService', () => {
  let service: PersonalProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
