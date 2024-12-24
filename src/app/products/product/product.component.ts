import { Color, Product, Size } from './../../interfaces/product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductRowComponent } from '../../home/product-row/product-row.component';
import { SizeSelectorComponent } from '../size-selector/size-selector.component';
import { ColorSelectorComponent } from '../color-selector/color-selector.component';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';
import { filter } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { CartItem } from '../../interfaces/cart_item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductRowComponent, SizeSelectorComponent, ColorSelectorComponent, QuantitySelectorComponent, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  id!: number;
  product!: Product;
  currentImageIndex: number = 0;

  selectedSize: Size | undefined;
  selectedColor: Color | undefined;
  productQuantity : number = 1;

  constructor(private productService: ProductService, private authService: AuthService , private route: ActivatedRoute, private router: Router, private cartService: CartService) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(this.id);
    this.selectedColor = this.product.color[0];
    this.selectedSize = this.product.size[0];
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
  }


  onColorChange(color: Color | undefined) {
    this.selectedColor = color;
  }

  onQuantityChange(quantity : number) {
    this.productQuantity = quantity;
  }

  onSizeChange(newSize: Size | undefined) {
    this.selectedSize = newSize;
  }


  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  isImageVisible(): boolean {
    return true;
  }
  
  addToCart(): void {
    if(!this.product.inStock){
      alert('This product is out of stock.');
    }
    else if (this.selectedColor && this.selectedSize && this.productQuantity >= 1) {
      if (this.authService.isAuthenticated()) {
        const cartItem: CartItem = {
          id: this.product.id,
          name: this.product.name,
          imageUrl: this.product.imageUrls[0],
          price: this.product.price,
          quantity: this.productQuantity,
          size: this.selectedSize,
          color: this.selectedColor
        };

        this.cartService.addToCart(cartItem); // Add item to the cart
        alert('Item added to cart!');
      } else {
        alert('Please log in first!');
        this.router.navigateByUrl('/login');
      }
    } else {
      alert('Please select color, size, and quantity.');
    }
  }

}
