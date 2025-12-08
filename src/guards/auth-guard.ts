import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { PermissionFacade } from '@api/security/redux/permission/permission.facade';

export const AuthGuard: CanActivateFn = (route, state) => {
  const permissionFacade = inject(PermissionFacade);
  const cleanUrl = state.url.replace(/\?.*$/, "")
    .replace(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/g, "")
    .replace(/\/+/g, "/")
    .replace(/\/$/, "");
  permissionFacade.CanAccessHeadRequestUpdate({
    xUrl: cleanUrl
  });
  return permissionFacade.CanAccessHeadIsLoaded$;
};
