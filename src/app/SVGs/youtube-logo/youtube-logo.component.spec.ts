import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeLogoComponent } from './youtube-logo.component';

describe('YoutubeLogoComponent', () => {
  let component: YoutubeLogoComponent;
  let fixture: ComponentFixture<YoutubeLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubeLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
