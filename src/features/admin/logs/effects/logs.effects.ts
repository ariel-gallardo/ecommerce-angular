import { inject, Injectable } from "@angular/core";
import { LogErrorActions } from "@api/logs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

@Injectable()
export class LogsEffects {
    private actions$ = inject(Actions);

    searchOneEffect = createEffect(() => 
        this.actions$.pipe(
            ofType(LogErrorActions.GetRequestUpdateSuccess),
            map(() => LogErrorActions.GetExecute())
        )
    ); 
}