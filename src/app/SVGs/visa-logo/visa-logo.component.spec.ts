import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaLogoComponent } from './visa-logo.component';

describe('VisaLogoComponent', () => {
  let component: VisaLogoComponent;
  let fixture: ComponentFixture<VisaLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisaLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisaLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
