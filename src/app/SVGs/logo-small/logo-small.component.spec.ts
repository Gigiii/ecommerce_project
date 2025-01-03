import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSmallComponent } from './logo-small.component';

describe('LogoSmallComponent', () => {
  let component: LogoSmallComponent;
  let fixture: ComponentFixture<LogoSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
