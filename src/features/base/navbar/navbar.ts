import { Component, EventEmitter, OnDestroy, OnInit, ViewChild, computed, signal } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { Subscription } from 'rxjs';
import { CartFacade } from '@api/cart/redux/cart/cart.facade';
import { Cart } from '@api/cart/models/cart.model';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
}) 
export class Navbar implements OnInit, OnDestroy {

  private subs!: Subscription;
  private hasMenu: boolean = false; 
  private cartSubs!: Subscription;
  public cart = signal<Cart | null>(null);
  public cartItemCount = computed(() => {
    const cartData = this.cart();
    if (!cartData || !cartData.items || cartData.items.length === 0) {
      return 0;
    }
    return cartData.items.reduce((total, item) => {
      return total + (item.quantity?.value || 0);
    }, 0);
  });

  constructor(
    private readonly menuService: MenuService,
    private readonly cartFacade: CartFacade
  ) {
  } 

  public get HasMenu(){
    return this.hasMenu;
  }

  ngOnInit(): void {
    this.subs = this.menuService.hasMenuState$.subscribe(hasMenu => {
      this.hasMenu = hasMenu;
    });
    
    // Suscribirse al carrito para obtener la cantidad de productos
    this.cartFacade.FiltersFirstGetInit();
    this.cartSubs = this.cartFacade.FiltersFirstGet$.subscribe(cart => {
      this.cart.set(cart);
    });
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    if (this.cartSubs) {
      this.cartSubs.unsubscribe();
    }
  }

  public openMenu(){
    this.menuService.toggleMenu();
  }
}
