import { inject, Injectable } from "@angular/core";
import { CartActions } from "@api/cart";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

@Injectable()
export class CartEffects {
    private actions$ = inject(Actions);
    $authEffect = createEffect(() => this.actions$.pipe(
        ofType(CartActions.FiltersFirstGetRequestUpdateSuccess),
        map(() => CartActions.FiltersFirstGetExecute())
    ));
}