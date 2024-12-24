import { Component, EventEmitter, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart_item';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ItemsComponent } from '../items/items.component';
import { PaymentComponent } from '../payment/payment.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, ItemsComponent, PaymentComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  subtotal: number = 0;

  constructor (private cartService : CartService) {}
  cart_items : CartItem[] = [];
  ngOnInit(): void {
    this.cart_items = this.cartService.getCartItems();
    this.updateSubtotal();
  }

  onCartChange(item : CartItem) {
    this.cart_items = this.cartService.getCartItems();
    this.updateSubtotal();
  }

  updateSubtotal() {
    this.subtotal = this.cart_items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }


}
