import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmexLogoComponent } from './amex-logo.component';

describe('AmexLogoComponent', () => {
  let component: AmexLogoComponent;
  let fixture: ComponentFixture<AmexLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmexLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmexLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
