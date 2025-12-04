import { HttpInterceptorFn } from '@angular/common/http';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  return from(cookieStore.get('token')).pipe(
    switchMap(cookie => {
      const token = cookie?.value;
      if (!token) {
        return next(req);
      }
      const authReq = req.clone({
        setHeaders: {
          Authorization: `${token}`
        }
      });

      return next(authReq);
    })
  );
};
