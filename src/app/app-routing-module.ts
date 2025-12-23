import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@features/base/shell/shell';

const routes: Routes = [
  {
    path: '',
    component: Shell,
    children: [
      {path: 'users', loadChildren: () => import('@features/users/users.module').then(m => m.UsersModule)},
      {path: 'cart', loadChildren: () => import('@features/cart/cart.module').then(m => m.CartModule)},
      {path: 'products', loadChildren: () => import('@features/products/products.module').then(m => m.ProductsModule)}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableViewTransitions: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
