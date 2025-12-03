import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionFacade } from '@api/security/redux/permission/permission.facade';
import { AuthService } from '@features/users/services/auth-service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const permissionFacade = inject(PermissionFacade);
  const authService = inject(AuthService);
  permissionFacade.CanAccessHeadRequestUpdate({
    xUrl: state.url
  });
  return permissionFacade.CanAccessHeadIsLoaded$;
};
