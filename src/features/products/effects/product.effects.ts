import { inject, Injectable } from "@angular/core";
import { ProductActions } from "@api/product";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

@Injectable()
export class ProductEffects {
    private actions$ = inject(Actions);
    $searchEffect = createEffect(() => this.actions$.pipe(
        ofType(ProductActions.FiltersGetRequestUpdateSuccess),
        map(() => ProductActions.FiltersGetExecute())
    ));
}