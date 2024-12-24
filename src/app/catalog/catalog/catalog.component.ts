import { Component, OnInit } from '@angular/core';
import { Color, Product, Size } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { PaginatedResultsComponent } from '../paginated-results/paginated-results.component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from "../filter/filter.component";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [FormsModule, PaginatedResultsComponent, CommonModule, FilterComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages = 1;

  category?: string;
  color?: Color;
  size?: Size;
  maxPrice?: number;
  name?: string;

  constructor(private productService: ProductService) {}

  changePage(page : number) {
    this.currentPage = page;
  }

  getMaxItems() {
    return Math.min(this.itemsPerPage * this.currentPage, this.filteredProducts.length);
  }
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  onFilterChange(filters: {
    category?: string;
    color?: Color;
    size?: Size;
    maxPrice?: number;
    name?: string;
  }): void {
    this.category = filters.category;
    this.color = filters.color;
    this.size = filters.size;
    this.maxPrice = filters.maxPrice;
    this.name = filters.name;
    this.applyFilters();
  }
  

  applyFilters(): void {
    this.filteredProducts = this.productService.filterProducts({
      category: this.category,
      color: this.color,
      size: this.size,
      maxPrice: this.maxPrice,
      name: this.name,
    });
    this.currentPage = 1;
  }

}
