import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLogoComponent } from './cart-logo.component';

describe('CartLogoComponent', () => {
  let component: CartLogoComponent;
  let fixture: ComponentFixture<CartLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
