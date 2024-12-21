import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.scss'
})
export class ProductRowComponent {

  products : Product[] = [];

  constructor (private productService : ProductService) {}

  ngOnInit() : void {
    this.products = this.productService.getProductsByCount(4);
  }
}
