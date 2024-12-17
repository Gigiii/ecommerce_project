import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MastercardLogoComponent } from './mastercard-logo.component';

describe('MastercardLogoComponent', () => {
  let component: MastercardLogoComponent;
  let fixture: ComponentFixture<MastercardLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MastercardLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MastercardLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
