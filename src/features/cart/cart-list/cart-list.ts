import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart } from '@api/cart/models/cart.model';
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
export class CartList implements OnInit {

  form: FormGroup<NullableFormControl<Cart>>;
  subs!: Subscription;

  constructor(private readonly cartFacade: CartFacade, 
    private readonly fb: FormBuilder, 
    private readonly authService: AuthService) {
    this.cartFacade.FiltersFirstGetInit();
    this.form = this.fb.group<Cart>(new Cart());
  }

  ngOnInit(): void {
    this.subs = this.cartFacade.FiltersFirstGet$.subscribe(cart => {
      console.log(cart)
      this.form.setValue(cart);
    });
    this.authService.IsExpired.then(async expired => {
      if(!expired){
        const userId = await this.authService.NameIdentifier;
        if(userId)
        this.cartFacade.FiltersFirstGetRequestUpdate({
          userId: Number(userId) 
        })
      }
    }); 
  }
}
