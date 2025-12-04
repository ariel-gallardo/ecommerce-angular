import { HttpInterceptorFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "@features/users/services/auth-service";
import { from, switchMap } from "rxjs";

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  return from((async () => {
    const isExpired = await authService.IsExpired;
    if(isExpired) authService.removeToken();
    const cookie = await authService.Token;
    const token = cookie?.value;

    if (!token || isExpired) {
      return next(req);
    }

    const authReq = req.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    });

    return next(authReq);
  })()).pipe(
    switchMap(result => result)
  );
};
