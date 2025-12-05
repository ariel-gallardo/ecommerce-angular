import { Component, Input } from '@angular/core';
import { CartItem } from '@api/cart/models/cart-item.model';

@Component({
  selector: 'cart-detail',
  standalone: false,
  templateUrl: './cart-detail.html',
  styleUrl: './cart-detail.scss',
})
export class CartDetail {
  @Input() cartItem!: CartItem
}
