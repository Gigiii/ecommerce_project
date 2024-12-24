import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CartItem } from '../interfaces/cart_item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor(private authService: AuthService) {
    this.loadCart();
  }

  private loadCart(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    }
  }

  private saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  addToCart(cartItem: CartItem): boolean {
    const existingItemIndex = this.cart.findIndex(
      (item) => item.id === cartItem.id && item.color === cartItem.color && item.size === cartItem.size
    );

    if (existingItemIndex > -1) {
      this.cart[existingItemIndex].quantity += cartItem.quantity;
    } else {
      this.cart.push(cartItem);
    }
    this.saveCart();
    return true;
  }

  editCartItem(id: number, color: string, size: string, quantity: number): void {
    const itemIndex = this.cart.findIndex(
      (item) => item.id === id && item.color === color && item.size === size
    );

    if (itemIndex > -1) {
      this.cart[itemIndex].quantity = quantity;
      this.saveCart();
    }
  }

  removeCartItem(id: number, color: string, size: string): void {
    this.cart = this.cart.filter(
      (item) => !(item.id === id && item.color === color && item.size === size)
    );
    this.saveCart();
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  clearCart(): void {
    this.cart = [];
    localStorage.removeItem('cart');
  }
}
