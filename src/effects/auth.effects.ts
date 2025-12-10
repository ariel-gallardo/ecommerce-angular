import { inject, Injectable } from "@angular/core";
import { PermissionActions } from "@api/security";
import { AuthService } from "@features/users/services/auth-service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, map, mergeMap, of } from "rxjs";

@Injectable()
export class AuthEffects {
    private actions$ = inject(Actions);
    private authService = inject(AuthService);

    $authEffect = createEffect(() =>
        this.actions$.pipe(
            ofType(PermissionActions.CanAccessHeadRequestUpdateSuccess),
            mergeMap(() => {
                if (this.authService.HasToken) {
                    return of(PermissionActions.CanAccessHeadExecute());
                }
                return from(this.authService.DecodeToken()).pipe(
                    map(() => PermissionActions.CanAccessHeadExecute())
                );
            })
        )
    );

    $authEffectSuccess = createEffect(() => this.actions$.pipe(
        ofType(PermissionActions.CanAccessHeadSetData),
        map(() => PermissionActions.CanAccessHeadSuccess())
    ));
}