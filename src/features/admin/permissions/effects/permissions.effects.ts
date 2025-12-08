import { inject, Injectable } from "@angular/core";
import { PermissionActions } from "@api/security";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

@Injectable()
export class PermissionEffects {
    private actions$ = inject(Actions);

    $searchOneEffect = createEffect(() => this.actions$.pipe(
        ofType(PermissionActions.GetRequestUpdateSuccess),
        map(() => PermissionActions.GetExecute())
    ));

    $searchEffect = createEffect(() => this.actions$.pipe(
        ofType(PermissionActions.FiltersGetRequestUpdateSuccess),
        map(() => PermissionActions.FiltersGetExecute())
    ));

    $deleteEffect = createEffect(() => this.actions$.pipe(
        ofType(PermissionActions.DeleteRequestUpdateSuccess),
        map(() => PermissionActions.DeleteExecute())
    ));
}