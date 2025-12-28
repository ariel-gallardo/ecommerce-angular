import { Component, OnDestroy, OnInit, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart } from '@api/cart/models/cart.model';
import { CartItem } from '@api/cart/models/cart-item.model';
import { NullableFormControl } from '@api/cart/models/common/nullable-form-control.model';
import { CartFacade } from '@api/cart/redux/cart/cart.facade';
import { AuthService } from '@features/users/services/auth-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cart-list',
  standalone: false,
  templateUrl: './cart-list.html',
  styleUrl: './cart-list.scss',
})
export class CartList implements OnInit, OnDestroy {

  form: FormGroup<NullableFormControl<Cart>>;
  subs!: Subscription;
  public cart = signal<Cart | null>(null);
  
  public cartItems = computed(() => {
    return this.cart()?.items || [];
  });

  public hasItems = computed(() => {
    const items = this.cartItems();
    return items && items.length > 0;
  });

  public itemCount = computed(() => {
    const items = this.cartItems();
    if (!items || items.length === 0) return 0;
    return items.reduce((total, item) => {
      return total + (item.quantity?.value || 0);
    }, 0);
  });

  public subtotal = computed(() => {
    const items = this.cartItems();
    if (!items || items.length === 0) return '0.00';
    // TODO: Calcular subtotal real cuando el precio esté disponible
    const total = items.reduce((sum, item) => {
      const quantity = item.quantity?.value || 0;
      const price = 0; // TODO: Obtener precio real del producto
      return sum + (quantity * price);
    }, 0);
    return total.toFixed(2);
  });

  public shipping = computed(() => {
    // TODO: Calcular envío basado en reglas de negocio
    const subtotalValue = parseFloat(this.subtotal());
    if (subtotalValue === 0) return '0.00';
    // Envío gratis si el subtotal es mayor a $50, sino $5.00
    return subtotalValue >= 50 ? '0.00' : '5.00';
  });

  public total = computed(() => {
    const subtotalValue = parseFloat(this.subtotal());
    const shippingValue = parseFloat(this.shipping());
    return (subtotalValue + shippingValue).toFixed(2);
  });

  constructor(
    private readonly cartFacade: CartFacade,
    private readonly fb: FormBuilder,
    private readonly authService: AuthService
  ) {
    this.cartFacade.FiltersFirstGetInit();
    this.form = this.fb.group<Cart>(new Cart());
  }

  ngOnInit(): void {
    this.subs = this.cartFacade.FiltersFirstGet$.subscribe(cart => {
      this.cart.set(cart);
      this.form.setValue(cart);
    });
    
    if (!this.authService.IsExpired) {
      const userId = this.authService.NameIdentifier;
      if (userId) {
        this.cartFacade.FiltersFirstGetRequestUpdate({
          userId: Number(userId)
        });
        this.cartFacade.FiltersFirstGet();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public trackByItemId(index: number, item: CartItem): string {
    return item.id || item.productId || `item-${index}`;
  }

  public checkout(): void {
    // TODO: Implementar checkout
    console.log('Proceder al pago');
  }
}
