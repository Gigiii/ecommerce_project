import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginated-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginated-results.component.html',
  styleUrl: './paginated-results.component.scss'
})
export class PaginatedResultsComponent {
  @Input() products: Product[] = [];
  @Input() currentPage: number = 1;
  @Input() itemsPerPage: number = 9;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() totalPagesChange: EventEmitter<number> = new EventEmitter<number>();

  constructor (private router : Router) {}
  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.products.slice(start, end);
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.itemsPerPage);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.totalPagesChange.emit(this.totalPages);
    }
  }

  changePage(page: number): void {
    this.pageChange.emit(page);
  }

  viewProduct(id : number) {
    this.router.navigate(['/products', id]).then(() => {
      window.location.reload();
    });
  }
}
