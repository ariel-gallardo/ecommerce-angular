import { Component, Input, OnDestroy, OnInit, computed, signal, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '@api/cart/models/cart-item.model';
import { ProductFacade } from '@api/product/redux/product/product.facade';
import { Product } from '@api/product/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cart-detail',
  standalone: false,
  templateUrl: './cart-detail.html',
  styleUrl: './cart-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDetail implements OnInit, OnDestroy {
  @Input() cartItem!: CartItem;
  
  private productSubs?: Subscription;
  public product = signal<Product | null>(null);
  public productImageUrl!: string;
  
  public productName = computed(() => {
    return this.product()?.name || 'Producto';
  });

  public unitPrice = computed(() => {
    // TODO: Obtener precio real del producto cuando esté disponible
    return 0;
  });

  public itemTotal = computed(() => {
    const quantity = this.cartItem.quantity?.value || 0;
    const price = this.unitPrice();
    return (quantity * price).toFixed(2);
  });

  constructor(private readonly productFacade: ProductFacade) {
  }

  ngOnInit(): void {
    // Calcular la URL de la imagen de forma estable una sola vez
    if (this.cartItem.productId) {
      const seed = parseInt(this.cartItem.productId, 36) % 1000;
      this.productImageUrl = `https://picsum.photos/seed/${seed}/200/200`;
    } else if (this.cartItem.id) {
      const seed = parseInt(this.cartItem.id, 36) % 1000;
      this.productImageUrl = `https://picsum.photos/seed/${seed}/200/200`;
    } else {
      this.productImageUrl = `https://picsum.photos/seed/0/200/200`;
    }
    
    if (this.cartItem.productId) {
      // TODO: Cargar información del producto usando productFacade
      // Por ahora solo mostramos el ID
    }
  }

  ngOnDestroy(): void {
    if (this.productSubs) {
      this.productSubs.unsubscribe();
    }
  }

  public increaseQuantity(): void {
    // TODO: Implementar incremento de cantidad
    console.log('Incrementar cantidad:', this.cartItem);
  }

  public decreaseQuantity(): void {
    // TODO: Implementar decremento de cantidad
    console.log('Decrementar cantidad:', this.cartItem);
  }

  public isDecreaseDisabled(): boolean {
    return (this.cartItem.quantity?.value || 0) <= 1;
  }

  public removeItem(): void {
    // TODO: Implementar eliminación del item
    console.log('Eliminar item:', this.cartItem);
  }
}
