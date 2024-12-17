import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterRowComponent } from './newsletter-row.component';

describe('NewsletterRowComponent', () => {
  let component: NewsletterRowComponent;
  let fixture: ComponentFixture<NewsletterRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
