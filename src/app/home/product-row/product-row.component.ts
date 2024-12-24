import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.scss'
})
export class ProductRowComponent {

  products : Product[] = [];

  constructor (private productService : ProductService, private router: Router) {}

  ngOnInit() : void {
    this.products = this.productService.getProductsByCount(4);
  }

  viewProduct(id : number) {
    this.router.navigate(['/products', id]).then(() => {
      window.location.reload();
    });
  }
}
