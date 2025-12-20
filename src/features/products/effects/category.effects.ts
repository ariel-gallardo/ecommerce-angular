import { inject, Injectable } from "@angular/core";
import { CategoryActions } from "@api/product";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

@Injectable()
export class CategoryEffects {
    private actions$ = inject(Actions);
    $searchEffect = createEffect(() => this.actions$.pipe(
        ofType(CategoryActions.FiltersGetRequestUpdateSuccess),
        map(() => CategoryActions.FiltersGetExecute())
    ));
}