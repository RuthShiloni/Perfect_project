import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProductComponent } from './personal-product.component';

describe('PersonalProductComponent', () => {
  let component: PersonalProductComponent;
  let fixture: ComponentFixture<PersonalProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
