import { inject, Injectable } from "@angular/core";
import { PermissionActions } from "@api/security";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

@Injectable()
export class AuthEffects {
    private actions$ = inject(Actions);
    
    $authEffect = createEffect(() => this.actions$.pipe(
        ofType(PermissionActions.CanAccessHeadRequestUpdateSuccess),
        map(() => PermissionActions.CanAccessHeadExecute())
    ));
    $authEffectSuccess = createEffect(() => this.actions$.pipe(
        ofType(PermissionActions.CanAccessHeadSetData),
        map(() => PermissionActions.CanAccessHeadSuccess())
    ));
}