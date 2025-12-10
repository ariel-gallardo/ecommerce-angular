import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionFacade } from '@api/security/redux/permission/permission.facade';
import { AuthService } from '@features/users/services/auth-service';
import { from, switchMap } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
  const permissionFacade = inject(PermissionFacade);
  const authService = inject(AuthService);
  
  const cleanUrl = state.url.replace(/\?.*$/, "")
    .replace(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/g, "")
    .replace(/\/+/g, "/")
    .replace(/\/$/, "");
  permissionFacade.CanAccessHeadRequestUpdate({
    xUrl: cleanUrl
  });
  
  if (!authService.HasToken) {
    return from(authService.DecodeToken()).pipe(
      switchMap(() => permissionFacade.CanAccessHeadIsLoaded$)
    );
  }
  return permissionFacade.CanAccessHeadIsLoaded$;
};
