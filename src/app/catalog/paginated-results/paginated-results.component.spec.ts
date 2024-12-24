import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedResultsComponent } from './paginated-results.component';

describe('PaginatedResultsComponent', () => {
  let component: PaginatedResultsComponent;
  let fixture: ComponentFixture<PaginatedResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatedResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
