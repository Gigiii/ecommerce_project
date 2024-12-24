import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../interfaces/cart_item';
import { QuantitySelectorComponent } from '../../products/quantity-selector/quantity-selector.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [QuantitySelectorComponent, CommonModule, RouterLink],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {

  constructor (private cartService : CartService) {}
  @Input() cart_items! : CartItem[];
  @Output() cart_change = new EventEmitter<CartItem>;

  onQuantityChange (newQuantity : number, item : CartItem) {
    this.cartService.editCartItem(item.id, item.color, item.size, newQuantity);
    this.cart_change.emit(item);
  }

  deleteItem (item : CartItem) {
    this.cartService.removeCartItem(item.id, item.color, item.size);
    alert('Item deleted from cart!')
    window.location.reload();
    this.cart_change.emit(item);
  }

}
